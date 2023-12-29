import React, { useState } from 'react';
import {Divider, Form, Input, Button} from 'antd';
import { useDispatch, useSelector } from 'react-redux';
import { registration, login} from '../../slices/authThunk';

const RegisterForm = () => {
    const { token, loading, error } = useSelector((state) => state.auth);
    const dispatch = useDispatch();

    const onFinish = async (values) => {
        const response = dispatch(registration(values));  
        if(!response.ok){
            alert("This user is already exist. Try to login")
        }
    }

    return (
        <>
        <h2>Register</h2>
        <Divider/>
            <Form 
             name='basic'
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
              autoComplete="off">

            <Form.Item
                label="Name"
                name="name"
                rules={[
                    {
                    required: true,
                    message: "Please input your name!",
                    },
                ]}
            >
              <Input />  
            </Form.Item>

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
                label="Password"
                name="passwordRepeat"
                rules={[
                    {
                    required: true,
                    message: "Please repeat your password!",
                    },
                    ({getFieldValue})=>({
                        validator(_,value){
                            if(!value || getFieldValue('password') === value){
                                return Promise.resolve();
                            }
                            return Promise.reject("Passwords do not match")
                        }
                    })
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
                         Register
                    </Button>
                )}
            </Form.Item>
         </Form> 
        </>
    );
}

export default RegisterForm;
