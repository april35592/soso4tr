import { Global } from "@emotion/react";
import { RouterProvider } from "react-router-dom";

import GlobalStyle from "@commons/GlobalStyle";
import router from "@commons/router";

function App() {
  return (
    <>
      <Global styles={GlobalStyle} />
      <RouterProvider router={router} />
    </>
  );
}

export default App;
