import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import { setallUser } from "../redux/action/user";
import axios from "axios";
import { Table } from "antd";

const Dashboard = (props) => {
  const { setallUser } = props;
  const [userList, setUserlist] = useState();

  useEffect(() => {
    getAllUserData();
  }, []);

  const getAllUserData = async () => {
    await axios({
      url: `${process.env.REACT_APP_API_URL}/alluser`,
      method: "GET",
      headers: {
        authorization: localStorage.getItem("token"),
      },
    })
      .then((res) => {
        setallUser(res.data);
        setUserlist(res.data.users);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  console.log(userList);

  const columns = [
    {
      title: "First Name",
      dataIndex: "firstname",
      key: "firstname",
    },
    {
      title: "Last Name",
      dataIndex: "lastname",
      key: "lastname",
    },
    {
      title: "Email",
      dataIndex: "email",
      key: "email",
    },
    {
      title: "Crated At",
      dataIndex: "createdAt",
      key: "createdAt",
    },
  ];

  return (
    <div className="container">
      <Table columns={columns} dataSource={userList} />
    </div>
  );
};

const mapDispatchToProps = { setallUser };

export default connect(null, mapDispatchToProps)(Dashboard);
