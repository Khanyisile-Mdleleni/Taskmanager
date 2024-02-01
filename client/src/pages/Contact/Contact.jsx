import React, { useState } from "react";
import { Form, Input, Button, message } from "antd";
import "./contact.scss";
import Sidebar from "../../components/sidebar/Sidebar";

const { TextArea } = Input;

function Contact() {
  const [form] = Form.useForm();

  const onFinish = (values) => {
    console.log("Received values of form: ", values);
    message.success("Message sent successfully");
    form.resetFields(); // Reset the form fields
  };

  const formItemLayout = {
    labelCol: {
      span: 24,
    },
    wrapperCol: {
      span: 24,
    },
  };

  return (
    <>
      <div className="dashboard">
        <div className="dashboard__left">
          <Sidebar />
        </div>
        <div className="dashboard__right">
          <h1 className="title">Contact Us</h1> <br />
          <p className="text-area">
            Need assistance? Submit a request below and we will get to work!
          </p>{" "}
          <br />
          <div className="contact">
            <div className="form">
              <Form
                form={form}
                name="register"
                onFinish={onFinish}
                style={{ maxWidth: 400 }}
              >
                <Form.Item
                  {...formItemLayout}
                  label="E-mail"
                  name="email"
                  rules={[
                    {
                      type: "email",
                      message: "Please enter a valid email address.",
                    },
                    {
                      required: true,
                      message: "Please input your E-mail.",
                    },
                  ]}
                >
                  <Input />
                </Form.Item>
                <Form.Item
                  {...formItemLayout}
                  label="Message"
                  name="message"
                  rules={[
                    {
                      required: true,
                      message: "Please input your message.",
                    },
                  ]}
                >
                  <TextArea rows={4} />
                </Form.Item>
                <Form.Item>
                  <Button type="primary" htmlType="submit">
                    Send Message
                  </Button>
                </Form.Item>
              </Form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Contact;
