import React from 'react';
import { Layout,Button,Form, Card, Input } from "antd";

export default (props) => {
  console.log(props);
  const [form] = Form.useForm();

  const handleSubmit = async (e) => {
    try {
      const values = await form.validateFields();
      console.log(values);
    } catch (error) {
      console.log(error);
    }
  };
  return(
    <Layout.Content>
      <Layout className="site-layout-background" style={{ padding: '24px 0' }}>
        <Card>
          <h1>Login Pages</h1>
          <Form form={form} onFinish={handleSubmit}>
            <Input name="email" type="text" placeholder="Email" />
            <Input name="password" type="password" placeholder="Password" />
            <Button htmlType="submit" onClick={() => props.history.replace('/')}>Login</Button>
          </Form>
        </Card>
      </Layout>
    </Layout.Content>
  )
};