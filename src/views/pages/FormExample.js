import React from 'react';
import BaseLayout from "../frame/Base";
import pathName from "../../routes/pathName";

export default (props) => {
  const { home } = pathName;
  console.log(props);

  const contentProps = {
    breadcrumb : [
      { text : 'Home', link : home },
      { text : 'Form' },
    ],
    title : 'Example Form',
    subtitle : 'This is example form input',
  }

  return(
    <BaseLayout {...contentProps}>
      <div className="content">
        asdasdas
      </div>
    </BaseLayout>
  )
}