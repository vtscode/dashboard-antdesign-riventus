import React from 'react';
import { Layout} from "antd";
import Header from './Header';
import Footer from './Footer';
import Sidebar from './Siderbar';
import { connect } from 'react-redux';
import styled from 'styled-components';
import pathName from "routes/pathName";
import {setAuth} from "redux/auth/action";
import IsiContent from "components/Content";
import localStorageService from "services/localStorageService";

const {Content} = Layout;
const WrapperLayout = styled(Layout)`
  min-height: 100vh;
  background-color : ${props => props.colorBgLayout}
`;
const ContentStyled = styled(Content)`
  margin: 1rem 1rem 0 1rem;
`;
const LayoutStyled = styled(Layout)`
  box-shadow:#d971275e 0 1rem 2.5rem 0;
  border-radius : 1rem;
`;

const Base = (props) => {
  const colorBgLayout = props.theme.theme === 'light' ? 'inherit' : '#1e2020';
  if(localStorageService('auth').getAccessToken()?.user){
    props.loggedIn(localStorageService('auth').getAccessToken());
  }else{
    window.location.replace(pathName.login);
  }
  return(
    <WrapperLayout colorBgLayout={colorBgLayout}>
      <Header />
      <ContentStyled>
        <LayoutStyled>
          <Sidebar />
          <Content style={{ margin: '0 1rem'}}>
            <IsiContent {...props}>
              {props.children}
            </IsiContent>
            <Footer />
          </Content>
        </LayoutStyled>
      </ContentStyled>
    </WrapperLayout>
  );
};
const mapStateToProps = ({theme}) => ({theme});
const mapDispatchToProps = (dispatch) => {
  return {
    loggedIn: values => dispatch(setAuth(values)),
  };
};
export default connect(mapStateToProps,mapDispatchToProps)(Base);