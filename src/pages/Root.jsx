import { Outlet } from "react-router-dom";
import Template from "@components/Template";

const Root = () => {
  return (
    <>
      <Template>
        <Outlet />
      </Template>
    </>
  );
};

export default Root;
