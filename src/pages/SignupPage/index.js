import React, { Component } from "react";
import Button from "../../components/General/Button";
import css from "./style.module.css";

class Signup extends Component {
  state = {
    email: "",
    password1: "",
    password2: ""
  };

  changeEmail = e => {
    this.setState({ email: e.target.value });
  };

  changePassword1 = e => {
    this.setState({ password1: e.target.value });
  };

  changePassword2 = e => {
    this.setState({ password2: e.target.value });
  };

  signup = () => {
    alert("Signup... " + this.state.email + " : " + this.state.password1);
  };

  render() {
    return (
      <div className={css.Signup}>
        <h1>Бүртгэлийн форм</h1>
        <div>Та өөрийн мэдээллээ оруулна уу</div>
        <input
          onChange={this.changeEmail}
          type="text"
          placeholder="Имэйл хаяг"
        />
        <input
          onChange={this.changePassword1}
          type="password"
          placeholder="Нууц үгээ оруулна уу"
        />
        <input
          onChange={this.changePassword2}
          type="password"
          placeholder="Нууц үгээ давтан оруулна уу"
        />
        <Button text="Бүртгүүлэх" btnType="Success" daragdsan={this.signup} />
      </div>
    );
  }
}

export default Signup;
