import { useState } from "react";
import DisplayUserInfo from "./DisplayUserInfo";

const UserForm = () => {
  const [userData, setUserData] = useState([
    { userName: "", userRollNumber: 0 },
  ]);
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(e);
    console.log(e.target[0].value);
    const name = e.target[0].value;
    const rollNumber = e.target[1].value;
    setUserData((prev) => [
      ...prev,
      {
        userName: name,
        userRollNumber: rollNumber,
      },
    ]);
    console.log(userData);
    e.target.reset();
  };
  const handleDelete = (index) => {
    setUserData((prev) => prev.filter((i) => userData.indexOf(i) !== index));
  };
  const handleUpdate = (index, name, rollNum) => {
    setUserData((prevData) => [
      ...prevData,
      (userData[index].userName = name),
      (userData[index].userRollNumber = rollNum),
    ]);
  };
  return (
    <div className="form-container">
      <form onSubmit={handleSubmit} className="user-form">
        <h1>User Form</h1>

        <label>
          <span>Enter Name</span>
          <input type="text" id="userName" placeholder="Enter your name" />
        </label>
        <label>
          <span>Enter RollNumber</span>
          <input
            type="number"
            id="userRollNo"
            placeholder="Enter your Roll Number"
          />
        </label>
        <button type="submit">Add User</button>
      </form>
      <div>
        <DisplayUserInfo
          data={userData}
          onDelete={handleDelete}
          onUpdate={handleUpdate}
        />
      </div>
    </div>
  );
};

export default UserForm;
