import React from 'react';
import { Layout} from "antd";
import Header from './Header';
import Footer from './Footer';
import Sidebar from './Siderbar';
import { connect } from 'react-redux';
import pathName from "../../routes/pathName";
import {setAuth} from "../../redux/auth/action";
import IsiContent from "../../components/Content";
import localStorageService from "../../services/localStorageService";
const {Content} = Layout;
const LayoutContext = React.createContext();

const Base = (props) => {
  const [state,setState] = React.useState({ mode : 'vertical', theme : 'light'});
  if(localStorageService('auth').getAccessToken()?.user){
    props.loggedIn(localStorageService('auth').getAccessToken());
  }else{
    window.location.replace(pathName.login);
  }
  return(
  <LayoutContext.Provider value={{state,setState}}>
    <Layout style={{ minHeight: '100vh' }}>
      <Header />
      <Layout>
        <Sidebar />
        <Layout>
          <Content style={{ margin: '0 16px' }}>
            <IsiContent {...props}>
              {props.children}
            </IsiContent>
          </Content>
          <Footer />
        </Layout>
      </Layout>
    </Layout>
  </LayoutContext.Provider>);
};
const mapDispatchToProps = (dispatch) => {
  return {
    loggedIn: values => dispatch(setAuth(values)),
  };
};
export default connect(null,mapDispatchToProps)(Base);