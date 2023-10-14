import React, { useEffect, useState } from "react";
import "./create.css";
import axios from "axios";

function Create() {
  const [name, setName] = useState("");
  const [UserName, setUserName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [company, setCompany] = useState("");
  const submitData = async (e) => {
    e.preventDefault();
    useEffect(() => {
      axios.post("https://jsonplaceholder.typicode.com/users", {
        name,
        UserName,
        email,
        phone,
        company,
      });
    }, []);
  };

  return (
    <div>
      <form onSubmit={submitData}>
        <div className="input-field">
          <label>Name :</label>
          <input
            type="text"
            placeholder="Enter name"
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <div className="input-field">
          <label>UserName</label>
          <input
            type="text"
            placeholder="Enter username"
            onChange={(e) => setUserName(e.target.value)}
          />
        </div>
        <div className="input-field">
          <label>Email</label>
          <input
            type="text"
            placeholder="Enter Email: "
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div className="input-field">
          <label>Phone</label>
          <input
            type="text"
            placeholder="Enter Phone:"
            onChange={(e) => setPhone(e.target.value)}
          />
        </div>
        <div className="input-field">
          <label>Company</label>
          <input
            type="text"
            placeholder="Enter Company name :"
            onChange={(e) => setCompany(e.target.value)}
          />
        </div>
        <button>Submit Data</button>
      </form>
    </div>
  );
}

export default Create;
