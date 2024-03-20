import React from 'react';
import { Button, Checkbox, Form, Input } from 'antd';

const onFinishFailed = (errorInfo) => {
    console.log('Failed:', errorInfo);
};
const SignupForm = ({ registerUser }) => (
    <Form
        name="basic"
        initialValues={{
            remember: true,
        }}
        onFinish={registerUser}
        onFinishFailed={onFinishFailed}
        autoComplete="off"
    >
        {/* <Form.Item
            label="Email"
            name="Email"
            rules={[
                {
                    required: true,
                    message: 'Please input your Email!',
                },
                {
                    // email regex 
                    pattern: /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,

                    message: 'Please enter correct Email!',
                },
            ]}
        >
            <Input />
        </Form.Item> */}

        <Form.Item
            label="Full name"
            name="full_name"
            rules={[
                {
                    required: true,
                    message: 'Please input your Email!',
                },
            ]}
        >
            <Input />
        </Form.Item>


        <Form.Item
            label="Username"
            name="username"
            rules={[
                {
                    required: true,
                    message: 'Please input your username!',
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
                    message: 'Please input your password!',
                },
            ]}
        >
            <Input.Password />
        </Form.Item>

        <Form.Item>
            <Checkbox>Remember me</Checkbox>
        </Form.Item>

        <Form.Item
            wrapperCol={{
                offset: 8,
                span: 16,
            }}
        >
            <Button type="primary" htmlType="submit">
                Submit
            </Button>
        </Form.Item>
    </Form>
);
export default SignupForm;