import { ReactComponent as document } from "../Assets/icon/clipboard-list.svg";
import { ReactComponent as components } from "../Assets/icon/collection.svg";
import { ReactComponent as support } from "../Assets/icon/support.svg";
import Generic from "../Pages/Generic";

export const sidebarLinkDown = [
  { id: 1, path: "/docs", element: <Generic />, img: document, title: "Docs" },
  {
    id: 2,
    path: "/components",
    element: <Generic />,
    img: components,
    title: "Components",
  },
  { id: 3, path: "/help", element: <Generic />, img: support, title: "Help" },
];
