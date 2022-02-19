import React, { useState } from "react";
import { Button, Input } from "antd";
import axios from "axios";
import { connect } from "react-redux";
import { signin } from "../redux/action/auth";

const Signup = (props) => {
  const [data, setData] = useState({});
  const { signin, history } = props;
  console.log(props);

  const handelSubmit = async () => {
    axios({
      url: `${process.env.REACT_APP_API_URL}/signup`,
      method: "POST",
      data: data,
    })
      .then((res) => {
        signin(res.data);
        localStorage.setItem("user", res.data.id);
        history.push("/dashboard");
      })
      .catch((err) => console.log(err));
  };

  return (
    <div className="container">
      <div className="form">
        <div className="firstname">
          <p>First Name</p>
          <Input
            value={data.firstname}
            onChange={(e) => setData({ ...data, firstname: e.target.value })}
          />
        </div>
        <div className="lastname">
          <p>Last Name</p>
          <Input
            value={data.lastname}
            onChange={(e) => setData({ ...data, lastname: e.target.value })}
          />
        </div>
        <div className="email">
          <p>Email</p>
          <Input
            value={data.email}
            onChange={(e) => setData({ ...data, email: e.target.value })}
          />
        </div>
        <div className="password">
          <p>Password</p>
          <Input.Password
            value={data.password}
            onChange={(e) => setData({ ...data, password: e.target.value })}
          />
        </div>
        <div className="submit">
          <Button type="primary" onClick={() => handelSubmit()}>
            Signup
          </Button>
        </div>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {};
};

const mapDispatchToProps = { signin };

export default connect(mapStateToProps, mapDispatchToProps)(Signup);
