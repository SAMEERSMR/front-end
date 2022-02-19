import React, { useEffect, useState } from "react";
import { connect } from "react-redux";

const TableComponent = (props) => {
  const { users } = props;
  const [localState, setLocalState] = useState([]);
  const [showUsers, setShowUsers] = useState([]);
  const [currentData, setCurrentData] = useState({
    start: 0,
    end: 9,
  });

  useEffect(() => {
    setLocalState(users || []);
  }, [props]);

  useEffect(() => {
    setShowUsers(localState.filter((item, index) => index <= 9));
  }, [localState]);

  const ChangePagginationonClick = (value) => {
    const filterData = localState.filter((item, index) => {
      return index < value * 10 && index >= (value - 1) * 10;
    });
    console.log(filterData);
    setShowUsers(filterData);
  };

  const onChangeSearch = (string) => {
    let filterd = localState.filter((item, index) => {
      return string === ""
        ? true
        : item.firstname.toLowerCase().includes(string.toLowerCase());
    });
    setShowUsers(filterd);
  };
  const Paggination = () => {
    let buttons = [...new Array(Math.ceil(localState.length / 10))].map(
      (i, _) => _ + 1
    );
    return (
      <div className="paggination">
        {buttons.map((item, index) => (
          <button
            key={index}
            onClick={(e) => ChangePagginationonClick(e.target.value)}
            value={item}
          >
            {item}
          </button>
        ))}
      </div>
    );
  };

  return (
    <div className="table-container">
      <div>
        <div className="search">
          <input
            placeholder="Search Here"
            onChange={(e) => onChangeSearch(e.target.value)}
          />
        </div>
        <div className="table">
          <table>
            <thead>
              <tr>
                <th>First Name</th>
                <th>Last Name</th>
                <th>Email</th>
                <th>Created At</th>
              </tr>
            </thead>
            <tbody>
              {showUsers.map((item) => (
                <tr key={item._id}>
                  <td>{item.firstname}</td>
                  <td>{item.lastname}</td>
                  <td>{item.email}</td>
                  <td>{item.createdAt}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <Paggination />
      </div>
    </div>
  );
};

const mapStateToProps = (state) => {
  const { userReducer } = state;
  const users = state.userReducer;

  return users;
};

export default connect(mapStateToProps, null)(TableComponent);
