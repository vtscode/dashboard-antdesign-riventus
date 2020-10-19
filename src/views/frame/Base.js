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

const Base = (props) => {
  const colorBgLayout = props.theme.theme === 'light' ? 'inherit' : '#1e2020';
  if(localStorageService('auth').getAccessToken()?.user){
    props.loggedIn(localStorageService('auth').getAccessToken());
  }else{
    window.location.replace(pathName.login);
  }
  return(
    <Layout style={{ minHeight: '100vh', backgroundColor : colorBgLayout }}>
      <Header />
      <Content style={{ margin: '1rem 1rem 0 1rem' }}>
        <Layout>
          <Sidebar />
          <Content style={{ margin: '0 1rem', }}>
            <IsiContent {...props}>
              {props.children}
            </IsiContent>
            <Footer />
          </Content>
        </Layout>
      </Content>
    </Layout>
  );
};
const mapStateToProps = ({theme}) => ({theme});
const mapDispatchToProps = (dispatch) => {
  return {
    loggedIn: values => dispatch(setAuth(values)),
  };
};
export default connect(mapStateToProps,mapDispatchToProps)(Base);