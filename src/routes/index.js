import React from "react";
import pathName from "./pathName";

const { base, login, home,register} = pathName;
export default {
  public : [
    { path: register, component: React.lazy(() => import('../views/pages/Login')) },
    { path: login, component: React.lazy(() => import('../views/pages/Login')) },
  ],
  strict : [
    { path: base, exact : true, component: React.lazy(() => import('../views/pages/Base')) },
    { path: home, exact : true, component: React.lazy(() => import('../views/pages/Base')) },
  ]
};