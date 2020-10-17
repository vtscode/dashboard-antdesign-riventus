import React from 'react';
import { connect } from 'react-redux';
import { noImagePath } from "../../utils";
import { Layout,Form,Card, Image } from "antd";
import { setAuth } from "../../redux/auth/action";
import InputForm from "../../components/InputForm";
import network from "../../services/network";
import pathName from "../../routes/pathName";
import localStorageService from "../../services/localStorageService";

const adminUserName = ['riventus'];
const Login = (props) => {
  const { auth,loggedIn } = props;
  const [form] = Form.useForm();
  const { endpoint,base } = pathName;
  const [process,setprocess] = React.useState({loading : false, disabled : false });

  const handleSubmit = async (e) => {
    setprocess({ loading : true, disabled : true });
    let loginpath;
    try {
      const values = await form.validateFields();
      if(adminUserName.includes(values.identifier)){
        loginpath = endpoint.loginAdmin;
      }else{
        loginpath = endpoint.login;
      }
      const resp = await network.post(loginpath,values);
      if(resp){
        await loggedIn(resp);
        props.history.replace(base);
      }
      setprocess({ loading : false, disabled : false });
    } catch (error) {
      setprocess({ loading : false, disabled : false });
      console.log(error);
    }
  };

  const inputs = [
    { propsFormItem : { 
      name : 'identifier', rules: [{required : true, message : 'Username harus diisi'}] }, propsInput : { placeholder : 'Username', autoFocus: true} },
    { type : 'password', propsFormItem : { 
      name : 'password', rules: [{required : true, message : 'Password harus diisi'}] }, propsInput : { placeholder : 'Password'} },
    { type : 'button', text : 'Login', propsBtn : { ...process, type: 'primary', htmlType : 'submit', block:true,} },
  ];

  React.useEffect(() => {
    if(localStorageService('auth').getAccessToken()?.user){
      if(auth?.user){
        props.history.replace(base);  
      }else{
        loggedIn(localStorageService('auth').getAccessToken());
      }
    }
  },[auth?.user]);

  return(
    <Layout.Content>
      <Card className="login__card">
        <center>
          <Image src={noImagePath} alt="nothing" />
          <h1>Login Pages</h1>
        </center>
        <Form form={form} onFinish={handleSubmit} initialValues={{identifier: 'riventus',password : 'qweqwe123'}}>
          <InputForm inputs={inputs} />
        </Form>
      </Card>
    </Layout.Content>
  )
};

const mapStateToProps = ({auth}) => ({auth});
const mapDispatchToProps = (dispatch) => {
  return {
    loggedIn: values => dispatch(setAuth(values)),
  };
};
export default connect(mapStateToProps,mapDispatchToProps)(Login);