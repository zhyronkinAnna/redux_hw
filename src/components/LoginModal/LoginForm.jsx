import { Button, Divider, Form, Input } from "antd";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { login } from "../../slices/authThunk";
import { Navigate, useNavigate } from "react-router-dom";
import { getToken } from "../../utils/helperFunctions";

import './Login.css';

const LoginForm = () => {
  const { token, loading, error } = useSelector((state) => state.auth);
  const dispatch = useDispatch();
  const name = "Login";

  if (token || getToken()) {
    return <Navigate to="/" />;
  }

  const onFinish = async (values) => {
    dispatch(login(values));
  };

  return (
    <div>
      <h2>{name}</h2>
      {error}
      <Divider/>
      
      <Form title="name"
        labelCol={{
          span: 4,
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
              Login
            </Button>
          )}
        </Form.Item>
      </Form>
    </div>
  );
}

export default LoginForm;
