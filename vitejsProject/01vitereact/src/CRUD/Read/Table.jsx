import axios, { Axios } from "axios";
import React, { useEffect, useState } from "react";
import "./table.css";
import { Link } from "react-router-dom";
function Table() {
  const [apiData, setApiData] = useState([]);
  useEffect(() => {
    axios.get("https://jsonplaceholder.typicode.com/users").then((response) => {
      setApiData(response.data);
    });
  }, []);
  console.log(apiData);
  return (
    <div>
      <table className="table-data">
        <tr>
          <th>Id No.</th>
          <th>Name</th>
          <th>UserName</th>
          <th>Email</th>
          <th>Phone</th>
          <th>Company</th>
          <th>Button</th>
        </tr>
        {apiData.map((item) => {
          return (
            <tr>
              <td key={item.id}>{item.id}</td>
              <td>{item.name}</td>
              <td>{item.username}</td>
              <td>{item.email}</td>
              <td>{item.phone}</td>
              <td>{item.website}</td>
              <td>
                <Link to="/update">
                  <button>Edit</button>
                </Link>
                <button>Delete</button>
              </td>
            </tr>
          );
        })}
      </table>
    </div>
  );
}

export default Table;
