import React from 'react';
import { Layout, Button} from "antd";
const {Footer} = Layout;

export default (props) => (
  <Footer style={{ textAlign: 'center' }}>
    Baked with <span role="img" aria-label="&#x1F49C;">&#x1F49C;</span> by <Button type="text" onClick={() => window.location.replace('https://rhivent.github.io')}>Riventus</Button>
  </Footer>
);