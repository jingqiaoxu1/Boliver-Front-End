import React from 'react';

import {
    Form, Input, Button
  } from 'antd';
  
import { API_ROOT } from '../constants';

  class RegistrationForm extends React.Component {
    state = {
      confirmDirty: false,
      autoCompleteResult: [],
    };
  
    handleSubmit = (e) => {
      e.preventDefault();
      this.props.form.validateFieldsAndScroll((err, values) => {
        if (!err) {
          console.log('Received values of form: ', values);
          fetch(`${API_ROOT}/register`, {
            method: 'POST',
            body: JSON.stringify({
                username: values.username,
                password: values.password,
                email: values.email,
                first_name: values.firstname,
                last_name: values.lastname,
            }),
          }).then((response) => {
            if (response.ok) {
              return response;
            }
            throw new Error(response.statusText);
          })
          .then((response) => {
              if (response.ok) {
                  return response
              }
              throw new Error(response.statusText)
          })
          .then((response) => response.text())
          .then ((response) => console.log(response))
          .catch((err) => console.log(err))
        }
      });
    }
  
    handleConfirmBlur = (e) => {
      const value = e.target.value;
      this.setState({ confirmDirty: this.state.confirmDirty || !!value });
    }
  
    compareToFirstPassword = (rule, value, callback) => {
      const form = this.props.form;
      if (value && value !== form.getFieldValue('password')) {
        callback('Two passwords that you enter is inconsistent!');
      } else {
        callback();
      }
    }
  
    validateToNextPassword = (rule, value, callback) => {
      const form = this.props.form;
      if (value && this.state.confirmDirty) {
        form.validateFields(['confirmPassword'], { force: true });
      }
      callback();
    }

    compareToFirstEmail = (rule, value, callback) => {
        const form = this.props.form;
        if (value && value !== form.getFieldValue('email')) {
          callback('Two emails that you enter is inconsistent!');
        } else {
          callback();
        }
      }

    validateToNextEmail = (rule, value, callback) => {
    const form = this.props.form;
    if (value && this.state.confirmDirty) {
        form.validateFields(['confirmEmail'], { force: true });
    }
    callback();
    }

    render() {
      const { getFieldDecorator } = this.props.form;

      const formItemLayout = {
        labelCol: {
          xs: { span: 24 },
          sm: { span: 8 },
        },
        wrapperCol: {
          xs: { span: 24 },
          sm: { span: 16 },
        },
      };
      const tailFormItemLayout = {
        wrapperCol: {
          xs: {
            span: 24,
            offset: 0,
          },
          sm: {
            span: 16,
            offset: 8,
          },
        },
      };
  
      return (
        <Form {...formItemLayout} onSubmit={this.handleSubmit} className="register">
       
         <Form.Item
            label="Username"
          >
            {getFieldDecorator('username', {
              rules: [{
                required: true, message: 'Please input your username!',
              }],
            })(
              <Input />
            )}
          </Form.Item>

          <Form.Item
            label="Password"
          >
            {getFieldDecorator('password', {
              rules: [{
                required: true, message: 'Please input your password!',
              }, {
                validator: this.validateToNextPassword,
              }],
            })(
              <Input type="password" />
            )}
          </Form.Item>

          <Form.Item
            label="Confirm Password"
          >
            {getFieldDecorator('confirmPassword', {
              rules: [{
                required: true, message: 'Please confirm your password!',
              }, {
                validator: this.compareToFirstPassword,
              }],
            })(
              <Input type="password" onBlur={this.handleConfirmBlur} />
            )}
          </Form.Item>
          
          <Form.Item
            label="First name"
          >
            {getFieldDecorator('firstname', {
              rules: [{
                required: true, message: 'Please input your first name!',
              }],
            })(
              <Input />
            )}
          </Form.Item>

          <Form.Item
            label="Last name"
          >
            {getFieldDecorator('lastname', {
              rules: [{
                required: true, message: 'Please input your last name!',
              }],
            })(
              <Input />
            )}
          </Form.Item>

          <Form.Item
            label="E-mail"
          >
            {getFieldDecorator('email', {
              rules: [{
                required: true, message: 'Please input your email!',
              }, {
                validator: this.validateToNextEmail,
              }],
            })(
              <Input type="email" />
            )}
          </Form.Item>
          
          <Form.Item
            label="Confirm E-mail"
          >
            {getFieldDecorator('confirmEmail', {
              rules: [{
                required: true, message: 'Please confirm your email!',
              }, {
                validator: this.compareToFirstEmail,
              }],
            })(
              <Input type="email" onBlur={this.handleConfirmBlur} />
            )}
          </Form.Item>
          <Form.Item {...tailFormItemLayout}>
            <Button type="primary" htmlType="submit">Register</Button>
          </Form.Item>
        </Form>
      );
    }
  }
  

  
  export const Register = Form.create({ name: 'register' })(RegistrationForm);  