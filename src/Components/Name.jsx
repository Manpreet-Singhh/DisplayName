import React, { useState } from "react";

const Name = () => {
  const [firstname, setFirstname] = useState("");
  const [lastname, setLastname] = useState("");
  const [fullname, setFullname] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    if (firstname !== "" && lastname !== "") {
      setFullname(`${firstname} ${lastname}`);
    }
  };

  return (
    <div>
      <h1>Full Name Display</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="firstname">First Name: </label>
          <input
            type="text"
            id="firstname"
            value={firstname}
            onChange={(e) => setFirstname(e.target.value)}
            required
          />
        </div>
        <div>
          <label htmlFor="lastname">Last Name: </label>
          <input
            type="text"
            id="lastname"
            value={lastname}
            onChange={(e) => setLastname(e.target.value)}
            required
          />
        </div>
        <button type="submit">Submit</button>
      </form>
      {fullname && <p>Full Name: {fullname}</p>}
    </div>
  );
};

export default Name;
