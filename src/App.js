import {Component} from 'react'

import {v4 as uuidv4} from 'uuid'
import './App.css'

class App extends Component {
  state = {
    passwordList: [],
    website: '',
    username: '',
    password: '',
    initialState: false,
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

  onAddWebsite = event => {
    event.preventDefault()
    const {website, username, password} = this.state
    const newPassword = {
      id: uuidv4(),
      website,
      username,
      password,
    }
    this.setState(prevState => ({
      passwordList: [...prevState.passwordList, newPassword],
      website: '',
      username: '',
      password: '',
      initialState: true,
    }))
  }

  render() {
    const {website, username, password, passwordList, initialState} = this.state
    const count = passwordList.length
    const title = username[0]
    // console.log(title.toUpperCase())

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
            <h1 className="your-password-heading">Your Passwords</h1>
            <p>{count}</p>
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
              />
            </div>
          </div>
          <hr />
          <div className="showPassword-container">
            <div>
              <input type="checkbox" id="checkbox" className="check-box" />
              <label htmlFor="checkBox" className="label-heading">
                Show passwords
              </label>
            </div>
          </div>
          {!initialState && (
            <div className="no-password-image-container">
              <img
                src="https://assets.ccbp.in/frontend/react-js/no-passwords-img.png"
                alt="no passwords"
                className="no-password-image"
              />
              <p className="no-password-heading">No Passwords</p>
            </div>
          )}
          {initialState && (
            <ul className="list-container">
              {passwordList.map(eachPassword => (
                <li className="eachPassword-container">
                  <p className="username-title">{title}</p>
                  <div>
                    <p className="details">{eachPassword.website}</p>
                    <p className="details">{eachPassword.username}</p>
                    <img
                      src="https://assets.ccbp.in/frontend/react-js/password-manager-stars-img.png"
                      alt="stars"
                      className="stars-image"
                    />
                  </div>
                  <img
                    src="https://assets.ccbp.in/frontend/react-js/password-manager-delete-img.png"
                    data-testid="delete"
                    className="delete-image"
                  />
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
