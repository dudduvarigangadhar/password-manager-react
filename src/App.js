import {Component} from 'react'

import {v4 as uuidv4} from 'uuid'
import './App.css'

const colorList = ['yellow', 'green', 'orange', 'red', 'blue']

class App extends Component {
  state = {
    passwordList: [],
    website: '',
    username: '',
    password: '',
    searchList: '',
    isShow: false,
    isTrue: false,
  }

  onChangeWebsite = event => {
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
  }

  onAddWebsite = event => {
    event.preventDefault()
    const {website, username, password} = this.state
    const title = website.slice(0, 1).toUpperCase()
    const colorValue = colorList[Math.floor(Math.random() * 5)]
    console.log(colorValue)
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

  render() {
    const {
      website,
      username,
      password,
      passwordList,
      searchList,
      isShow,
    } = this.state
    let {isTrue} = this.state

    const count = passwordList.length

    const searchResult = passwordList.filter(eachPassword =>
      eachPassword.website.toLowerCase().includes(searchList.toLowerCase()),
    )
    console.log(searchResult.length)

    if (searchResult.length === 0) {
      isTrue = false
    } else {
      isTrue = true
    }

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
          <form className="add-password-container" onSubmit={this.onAddWebsite}>
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
                // onClick={this.onAddWebsite}
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
          {!isTrue && (
            <div className="no-password-image-container">
              <img
                src="https://assets.ccbp.in/frontend/react-js/no-passwords-img.png"
                alt="no passwords"
                className="no-password-image"
              />
              <p className="no-password-heading">No Passwords</p>
            </div>
          )}
          {isTrue && (
            <ul className="list-container">
              {searchResult.map(eachPassword => (
                <li className="eachPassword-container" key={eachPassword.id}>
                  <p className={`${eachPassword.color} username-title`}>
                    {eachPassword.title}
                  </p>
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
                  <button
                    type="button"
                    className="delete-button"
                    data-testid="delete"
                    onClick={() => this.onDelete(eachPassword.id)}
                  >
                    <img
                      src="https://assets.ccbp.in/frontend/react-js/password-manager-delete-img.png"
                      alt="delete"
                      className="delete-image"
                    />
                  </button>
                </li>
              ))}
            </ul>
          )}
        </div>
      </div>
    )
  }
}

export default App
