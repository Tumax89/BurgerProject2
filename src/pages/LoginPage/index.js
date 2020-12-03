import React, { Component } from "react";
import Button from "../../components/General/Button";
import css from "./style.module.css";

class Login extends Component {
  state = {
    email: "",
    password: ""
  };

  changeEmail = e => {
    this.setState({ email: e.target.value });
  };

  changePassword = e => {
    this.setState({ password: e.target.value });
  };

  login = () => {
    alert("login..." + this.state.password);
  };

  render() {
    return (
      <div className={css.Login}>
        <input
          onChange={this.changeEmail}
          type="text"
          placeholder="Имэйл хаяг"
        />
        <input
          onChange={this.changePassword}
          type="password"
          placeholder="Нууц үг"
        />
        <Button text="ЛОГИН" btnType="Success" daragdsan={this.login} />
      </div>
    );
  }
}

export default Login;
