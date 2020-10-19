import React from 'react';
import { Breadcrumb, PageHeader, Button} from "antd";
import { Link } from "react-router-dom";

const Container = ({children,title,subtitle,extra}) => (<PageHeader
  onBack={() => window.history.back()}
  title={title || ''}
  subTitle={subtitle || ''}
  className="contenpage__header"
  {...extra}
>
  {children}
</PageHeader>);

export default (props) => {
  const {breadcrumb,children,title,subtitle,extra = {}} = props;
  const propsContainer = {children,title,subtitle,extra};

  if(breadcrumb){
    return(<>
      <Breadcrumb>
        {
          breadcrumb.map((x,idx) => {
            return(<React.Fragment key={idx}>
              <Breadcrumb.Item>
                {x.link ? 
                  <Link to={x.link}>{x.text}</Link>
                  :
                  <Button type="text" >{x.text}</Button>
                }
              </Breadcrumb.Item>
            </React.Fragment>)
          })
        }
      </Breadcrumb>
      <Container {...propsContainer} />
    </>);
  }

  return (<Container {...propsContainer} />);
}