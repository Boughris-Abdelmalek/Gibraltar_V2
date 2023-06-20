import React, { useState } from "react";
import { useLoginMutation } from "../../features/auth/AuthApiSlice";
import { useAppDispatch } from "../../app/hooks";
import { setCredentials } from "../../features/auth/AuthSlice";

const Login: React.FC = () => {
  const [login] = useLoginMutation();
  const dispatch = useAppDispatch();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async (event) => {
    event.preventDefault();

    const data = await login({ email, password }).unwrap();
    dispatch(setCredentials(data));
    console.log(data);
  };

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  return (
    <div>
      Login
      <form onSubmit={handleSubmit}>
        <input type="email" value={email} onChange={handleEmailChange} />
        <input type="password" value={password} onChange={handlePasswordChange} />
        <button type="submit">login</button>
      </form>
    </div>
  );
};

export default Login;
