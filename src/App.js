import {Component} from 'react'

import {v4 as uuidv4} from 'uuid'
import './App.css'

const colorList = ['yellow', 'green', 'orange', 'brown', 'blue']

class App extends Component {
  state = {
    passwordList: [],
    website: '',
    username: '',
    password: '',
    searchList: '',
    isShow: false,
  }

  onChangeWebsite = event => {
    // console.log(event.target.value)
    this.setState({website: event.target.value})
  }

  onChangeUsername = event => {
    this.setState({username: event.target.value})
  }

  onChangePassword = event => {
    this.setState({password: event.target.value})
  }

  onChangeSearch = event => {
    this.setState({searchList: event.target.value})
    // console.log(event.target.value)
  }

  onAddWebsite = event => {
    event.preventDefault()
    const {website, username, password, searchList} = this.state
    const title = website.slice(0, 1).toUpperCase()
    const colorValue = colorList[Math.floor(Math.random() * 5)]
    const newPassword = {
      id: uuidv4(),
      website,
      username,
      password,
      color: colorValue,
      title,
    }
    this.setState(prevState => ({
      passwordList: [...prevState.passwordList, newPassword],
      website: '',
      username: '',
      password: '',
      searchList: '',
    }))
  }

  showPasswords = event => {
    if (event.target.checked) {
      this.setState({isShow: true})
    } else {
      this.setState({isShow: false})
    }
  }

  onDelete = id => {
    const {passwordList} = this.state
    const deleteList = passwordList.filter(
      eachPassword => eachPassword.id !== id,
    )
    this.setState({passwordList: deleteList})
  }

  noPasswords = count => {
    if (count === 0) {
      return (
        <div className="no-password-image-container">
          <img
            src="https://assets.ccbp.in/frontend/react-js/no-passwords-img.png"
            alt="no passwords"
            className="no-password-image"
          />
          <p className="no-password-heading">No Passwords</p>
        </div>
      )
    }
    return null
  }

  render() {
    const {
      website,
      username,
      password,
      passwordList,
      searchList,
      isShow,
    } = this.state
    const count = passwordList.length
    if (searchList !== '') {
      const searchResult = passwordList.filter(eachPassword =>
        eachPassword.website.toLowerCase().includes(searchList.toLowerCase()),
      )
      //   console.log(searchResult)
      //   this.setState({passwordList: searchResult})
      // .includes(searchList.toLowerCase()),
      //   this.setState({passwordList: searchResult})
    }

    // if (searchList.length !== 0) {
    //   const newList = passwordList.filter(eachPassword =>
    //     eachPassword.website.toLowerCase().includes(searchList.toLowerCase()),
    //   )
    //   this.setState({passwordList: newList})
    // }

    return (
      <div className="password-manager-bg-container">
        <div>
          <img
            src="https://assets.ccbp.in/frontend/react-js/password-manager-logo-img.png"
            alt="app logo"
            className="appLogo"
          />
        </div>
        <div className="password-manager-container">
          <form className="add-password-container">
            <h1 className="add-password-heading">Add New Password</h1>
            <div className="input-field-container">
              <div className="input-field-logo-container">
                <img
                  src="https://assets.ccbp.in/frontend/react-js/password-manager-website-img.png"
                  alt="website"
                  className="input-field-logo"
                />
              </div>
              <input
                value={website}
                type="text"
                placeholder="Enter Website"
                className="inputField"
                onChange={this.onChangeWebsite}
              />
            </div>
            <div className="input-field-container">
              <div className="input-field-logo-container">
                <img
                  src="https://assets.ccbp.in/frontend/react-js/password-manager-username-img.png"
                  alt="username"
                  className="input-field-logo"
                />
              </div>
              <input
                value={username}
                type="text"
                placeholder="Enter Username"
                className="inputField"
                onChange={this.onChangeUsername}
              />
            </div>
            <div className="input-field-container">
              <div className="input-field-logo-container">
                <img
                  src="https://assets.ccbp.in/frontend/react-js/password-manager-password-img.png"
                  alt="password"
                  className="input-field-logo"
                />
              </div>
              <input
                value={password}
                type="password"
                placeholder="Enter Password"
                className="inputField"
                onChange={this.onChangePassword}
              />
            </div>
            <div className="add-button">
              <button
                type="submit"
                className="button"
                onClick={this.onAddWebsite}
              >
                Add
              </button>
            </div>
          </form>
          <div>
            <div>
              <img
                src="https://assets.ccbp.in/frontend/react-js/password-manager-lg-img.png"
                alt="password manager"
                className="password-manager-image"
              />
            </div>
          </div>
        </div>
        <div className="your-password-container">
          <div className="your-password-flex-container">
            <div className="count-container">
              <h1 className="your-password-heading">Your Passwords</h1>
              <p className="count-field">{count}</p>
            </div>
            <div className="search-field-container">
              <img
                src="https://assets.ccbp.in/frontend/react-js/password-manager-search-img.png"
                alt="search"
                className="search-image"
              />
              <input
                type="search"
                placeholder="search"
                className="search-container"
                onChange={this.onChangeSearch}
                value={searchList}
              />
            </div>
          </div>
          <hr />
          <div className="showPassword-container">
            <div>
              <input
                type="checkbox"
                id="check"
                className="check-box"
                onChange={this.showPasswords}
              />
              <label htmlFor="check" className="label-heading">
                Show passwords
              </label>
            </div>
          </div>
          {this.noPasswords(count)}
          {count !== 0 ? (
            <ul className="list-container">
              {passwordList.map(eachPassword => (
                <li className="eachPassword-container" key={eachPassword.id}>
                  <p className="username-title">{eachPassword.title}</p>
                  <div>
                    <p className="details">{eachPassword.website}</p>
                    <p className="details">{eachPassword.username}</p>
                    {isShow ? (
                      <p className="show-password">{eachPassword.password}</p>
                    ) : (
                      <img
                        src="https://assets.ccbp.in/frontend/react-js/password-manager-stars-img.png"
                        alt="stars"
                        className="stars-image"
                      />
                    )}
                  </div>
                  <img
                    src="https://assets.ccbp.in/frontend/react-js/password-manager-delete-img.png"
                    alt="delete"
                    className="delete-image"
                    onClick={() => this.onDelete(eachPassword.id)}
                  />
                </li>
              ))}
            </ul>
          ) : null}
        </div>
      </div>
    )
  }
}

export default App
