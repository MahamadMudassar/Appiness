import React from "react";
import { Link, Redirect } from "react-router-dom";
import { connect } from "react-redux";

class Employees extends React.Component {
  constructor(props) {
    super(props);
    let token = localStorage.getItem("token");
    let loggedIn = true;
    if (token == null) {
      loggedIn = false;
    }
    this.state = {
      loggedIn
    };
  }
  render() {
    if (this.state.loggedIn === false) {
      return <Redirect to="/" />;
    }

    let userdata = this.props.dbdata.user;
    console.log(userdata[0]);
    return (
      <div>
        <header style={{ backgroundColor: "black", height: "80px" }}>
          <div style={{ float: "left}", paddingTop: "25px", color: "pink" }}>
            {" "}
            <h2>My Company Employees page</h2>
          </div>
          <div style={{ float: "right" }}>
            <Link className="logOut" to="/Logout">
              Logout
            </Link>
          </div>
        </header>
        <div className="listOfCards">
          {userdata.map(item => {
            return (
              <div className="UserCard" key={item.id}>
                <div className="UserCardTop">
                  <img src="https://img.icons8.com/plasticine/2x/user.png" />
                </div>
                <div className="UserCardBottom">
                  <h1>{item.name}</h1>
                  <h4>Age : {item.age}</h4>
                  <h4>Gender : {item.gender}</h4>
                  <h5>Email : {item.email}</h5>
                  <h5>Phone No : {item.phoneNo}</h5>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    );
  }
}
const mapStateToProps = state => ({
  data: state.data,
  dbdata: state.dbdata
});

export default connect(mapStateToProps)(Employees);
