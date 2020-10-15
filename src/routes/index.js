import pathName from "./pathName";

const {base} = pathName;
export default [
  { path: base, component: React.lazy(() => import('../views/pages/Base')) },
];