import { ReactComponent as chart } from "../Assets/icon/chart-pie.svg";
import { ReactComponent as documents } from "../Assets/icon/document-report.svg";
import { ReactComponent as shopping } from "../Assets/icon/shopping-bag.svg";
import { ReactComponent as messages } from "../Assets/icon/inbox-in.svg";
import { ReactComponent as locked } from "../Assets/icon/lock-closed.svg";
import Generic from "../Pages/Generic";
import Home from "../Pages/Home";
import Messages from "../Pages/Messages";

export const sidebarLink = [
  {
    id: 1,
    path: "/overview",
    element: <Home />,
    img: chart,
    title: "Overview",
  },
  {
    id: 2,
    path: "/pages",
    element: <Generic />,

    img: documents,
    title: "Pages",
    options: [
      { title: "Doashboard", path: "/pages/overview", element: <Generic /> },
      { title: "Messages", path: "/pages/messages", element: <Generic /> },
    ],
  },
  {
    id: 3,
    path: "/sales",
    element: <Generic />,

    img: shopping,
    title: "Sales",
    options: [
      {
        title: "Product List",
        path: "/sales/produc-list",
        element: <Generic />,
      },
      { title: "Billing", path: "/sales/billing", element: <Generic /> },
      { title: "Invoice", path: "/sales/invoice", element: <Generic /> },
    ],
  },
  {
    id: 4,
    path: "/messages",
    element: <Messages />,
    img: messages,
    title: "Messages",
  },
  {
    id: 5,
    path: "/authentication",
    element: <Generic />,

    img: locked,
    title: "Authentication",
    options: [
      {
        title: "About Me",
        path: "/authentication/about",
        element: <Generic />,
      },
    ],
  },
];
