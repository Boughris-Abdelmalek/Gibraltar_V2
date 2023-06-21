import React from "react";
import { useLoginMutation } from "../../features/auth/AuthApiSlice";
import { useAppDispatch } from "../../app/hooks";
import { setCredentials } from "../../features/auth/AuthSlice";
import TextField from "../../components/TextField/TextField";
import { Container } from "./styles";
import Form from "../../components/Form/Form";

const Login: React.FC = () => {
  const [login] = useLoginMutation();
  const dispatch = useAppDispatch();

  const handleSubmit = (values) => {
    /* const data = await login(values).unwrap();
    dispatch(setCredentials(data)); */
    console.log(values);
  };

  const formFields = [
    { name: "email", label: "Email", type: "email" },
    { name: "password", label: "Password", type: "password" },
  ];

  return (
    <Container>
      <TextField variant="h3" transform="capitalize" className="title">login</TextField>
      <Form inputs={formFields} onSubmit={handleSubmit} className="form-container" />
    </Container>
  );
};

export default Login;
