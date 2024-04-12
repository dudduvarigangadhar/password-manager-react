import {Component} from 'react'

import './App.css'

class App extends Component {
  render() {
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
          <div className="add-password-container">
            <p className="add-password-heading">Add New Password</p>
            <div className="input-field-container">
              <div className="input-field-logo-container">
                <img
                  src="https://assets.ccbp.in/frontend/react-js/password-manager-website-img.png"
                  alt="website"
                  className="input-field-logo"
                />
              </div>
              <input
                type="text"
                placeholder="Enter Website"
                className="inputField"
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
                type="text"
                placeholder="Enter Username"
                className="inputField"
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
                type="text"
                placeholder="Enter Password"
                className="inputField"
              />
            </div>
          </div>
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
            <p className="your-password-heading">Your Password</p>
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
              <input type="checkbox" id="myCheckbox" className="check-box" />
              <label htmlFor="myCheckBox" className="label-heading">
                Show passwords
              </label>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default App
