import { Button, Form, Input } from "antd";
import axios from "axios";
import React from "react";
import api from "../api";
import { useDispatch, useSelector } from "react-redux";
import { login } from "../slices/authThunk";
import { Navigate, useNavigate } from "react-router-dom";
import { getToken } from "../utils/helperFunctions";

const Login = () => {
  const { token, loading, error } = useSelector((state) => state.auth);
  const dispatch = useDispatch();

  if (token || getToken()) {
    return <Navigate to="/" />;
  }

  const onFinish = async (values) => {
    dispatch(login(values));
  };

  return (
    <div>
      <h1>Login</h1>
      {error}
      <Form
        name="basic"
        labelCol={{
          span: 8,
        }}
        wrapperCol={{
          span: 16,
        }}
        style={{
          maxWidth: 600,
        }}
        initialValues={{}}
        onFinish={onFinish}
        autoComplete="off"
      >
        <Form.Item
          label="Email"
          name="email"
          rules={[
            {
              required: true,
              message: "Please input your email!",
            },
          ]}
        >
          <Input />
        </Form.Item>

        <Form.Item
          label="Password"
          name="password"
          rules={[
            {
              required: true,
              message: "Please input your password!",
            },
          ]}
        >
          <Input.Password />
        </Form.Item>

        <Form.Item
          wrapperCol={{
            offset: 8,
            span: 16,
          }}
        >
          {loading ? (
            "Loading..."
          ) : (
            <Button type="primary" htmlType="submit">
              Submit
            </Button>
          )}
        </Form.Item>
      </Form>
    </div>
  );
};

export default Login;
