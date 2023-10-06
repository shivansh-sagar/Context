import React, { useState, useContext } from "react";
import UserContext from "../context/UserContext";

useState;
const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const { setUser } = useContext(UserContext);

  const handleSubmit = (e) => {
    e.preventDefault();
    setUser({ username, password });
  };
  return (
    <div className="flex flex-col text-white items-center justify-center w-1/2 rounded-lg shadow-md shadow-gray-600 bg-gray-800">
      <h2 className="text-4xl m-4 ">login</h2>
      <input className="text-black outline-none p-2 w-1/2 m-1 rounded-md"
        type="text"
        placeholder="UserName"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
      />
      <input className="text-black outline-none p-2 w-1/2 m-1 rounded-md"
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <button className=" border-none m-2 w-1/3 py-2 rounded-full bg-blue-500" onClick={handleSubmit}>Submit</button>
    </div>
  );
};
export default Login;
