import React from "react";
import { Redirect } from "react-router-dom";
import { connect } from "react-redux";
import "./style.css";

class Login extends React.Component {
  constructor(props) {
    super(props);
    let loggedIn = false;
    this.state = {
      username: "",
      password: "",
      loggedIn
    };

    this.onChange = this.onChange.bind(this);
    this.submitForm = this.submitForm.bind(this);
  }
  submitForm(e) {
    e.preventDefault();
    const { username, password } = this.state;
    const value = this.props.data;
    localStorage.setItem("token", "jdhfjkljklcklmcklj");
    if (username === value.username && password === value.password) {
      this.setState({ loggedIn: true });
    } else {
      alert("Please Enter correct credentials");
    }
  }

  onChange(e) {
    this.setState({
      [e.target.name]: e.target.value
    });
  }
  render() {
    if (this.state.loggedIn) {
      return <Redirect to="/employees" />;
    }

    console.log(this.props.data);
    console.log(this.props.dbdata.user);
    return (
      <div style={{ display: "flex" }}>
        <section className="login" id="login">
          <div class="head">
            <h1 className="company">Appiness Login</h1>
          </div>
          <div className="form">
            <form onSubmit={this.submitForm}>
              <input
                type="text"
                value={this.state.username}
                name="username"
                onChange={this.onChange}
                placeholder="Username"
                className="text"
                id="username"
                required
              />
              <br />
              <input
                type="password"
                value={this.state.password}
                name="password"
                onChange={this.onChange}
                placeholder="••••••••••••••"
                class="password"
              />
              <br />
              <input
                type="submit"
                className="btn-login"
                id="do-login"
                value="Login"
              />
            </form>
          </div>
        </section>
        <footer />
      </div>
    );
  }
}

const mapStateToProps = state => ({
  data: state.data,
  dbdata: state.dbdata
});

export default connect(mapStateToProps)(Login);
