import React, { useState } from "react";
import { Button, Input } from "antd";
import axios from "axios";
import { connect } from "react-redux";
import { signin } from "../redux/action/auth";

const Signin = (props) => {
  const [data, setData] = useState({});
  const { signin, history } = props;

  const handelSubmit = async () => {
    axios({
      url: `${process.env.REACT_APP_API_URL}/signin`,
      method: "POST",
      data: data,
    })
      .then((res) => {
        signin(res.data);
        localStorage.setItem("user", res.data.id);
        localStorage.setItem("token", res.data.token);
        history.push("/dashboard");
      })
      .catch((err) => console.log(err));
  };

  return (
    <div className="container">
      <div className="form">
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
            Login
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

export default connect(mapStateToProps, mapDispatchToProps)(Signin);
