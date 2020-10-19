import React from 'react';
import { Form } from "antd";
import BaseLayout from "../frame/Base";
import pathName from "../../routes/pathName";
import { InputForm } from "../../components";

export default () => {
  const { home } = pathName;
  const [form] = Form.useForm();
  const [,setState] = React.useState({})

  const contentProps = {
    breadcrumb : [
      { text : 'Home', link : home },
      { text : 'Form' },
    ],
    title : 'Example Form',
    subtitle : 'This is example form input',
  };

  const inputs = [
    { propsFormItem : { 
      name : 'identifier', rules: [{required : true, message : 'Username harus diisi'}] }, propsInput : { placeholder : 'Username', autoFocus: true} },
    { type : 'password', propsFormItem : { 
      name : 'password', rules: [{required : true, message : 'Password harus diisi'}] }, propsInput : { placeholder : 'Password'} },
    { type : 'button', text : 'Login', propsBtn : { ...process, type: 'primary', htmlType : 'submit', block:true,} },
  ];

  const handleSubmit = async (value) => {
    try {
      const values = await form.validateFields();
      setState(values);
    } catch (error) {
      console.log(error?.message);
    }
  }

  return(
    <BaseLayout {...contentProps}>
      <Form form={form} 
        onFinish={handleSubmit} 
        initialValues={{identifier: 'riventus',password : 'qweqwe123'}}
      >
        <InputForm inputs={inputs} />
      </Form>
    </BaseLayout>
  )
}