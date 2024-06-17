import { createBrowserRouter } from "react-router-dom";

import Root from "@pages/Root";
import Home from "@pages/Home";
import Error from "@pages/Error";

import Schedule from "@pages/Schedule";
import Trpg from "@pages/Trpg";
import Boardgames from "@pages/Boardgames";
import Library from "@pages/Library";
import Blog from "@pages/Blog";
import Guestbook from "@pages/Guestbook";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <Error />,
    children: [
      {
        path: "",
        element: <Home />,
      },
      {
        path: "schedule",
        element: <Schedule />,
      },
      {
        path: "trpg",
        element: <Trpg />,
      },
      {
        path: "boardgames",
        element: <Boardgames />,
      },
      {
        path: "library",
        element: <Library />,
      },
      {
        path: "blog",
        element: <Blog />,
      },
      {
        path: "guestbook",
        element: <Guestbook />,
      },
    ],
  },
]);

export default router;
