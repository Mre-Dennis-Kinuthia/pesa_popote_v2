import React, { Component } from "react";
import Section from "./components/Section";
import LoginPage from './pages/LoginPage';
import RegisterPage from './pages/RegisterPage';
import NavigationBar from './components/NavigationBar';
import dummyText from "./DummyText";


class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showLoginPage: false,
      showRegisterPage: false
    };
  }

  // Function to toggle the login page state
  toggleLoginPage = () => {
    this.setState((prevState) => ({
      showLoginPage: !prevState.showLoginPage
    }));
  };

  // Function to toggle the register page state
  toggleRegisterPage = () => {
    this.setState((prevState) => ({
      showRegisterPage: !prevState.showRegisterPage
    }));
  };


  render() {
    const { showLoginPage, showRegisterPage } = this.state;

    return (
      <div className="App">
        <NavigationBar
          toggleLoginPage={this.toggleLoginPage}
          toggleRegisterPage={this.toggleRegisterPage}
        />
    {showLoginPage ? (
          <LoginPage onCancel={this.toggleLoginPage} />
        ) : showRegisterPage ? (
          <RegisterPage onCancel={this.toggleRegisterPage} />
        ) : (
      <>
        <Section
          title="Home"
          subtitle={dummyText}
          dark={true}
          id="Home"
        />
        <Section
          title="About Us"
          subtitle={dummyText}
          dark={false}
          id="About Us"
        />
        <Section
          title="How It Works"
          subtitle={dummyText}
          dark={true}
          id="How It Works"
        />
        <Section
          title="Contact Us"
          subtitle={dummyText}
          dark={true}
          id="Contact Us"
        />
        </>
      )}
      {/* Add a button to toggle the login page */}
      </div>
    );
  }
}

export default App;