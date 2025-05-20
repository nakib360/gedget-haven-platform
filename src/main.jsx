import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { ToastContainer } from "react-toastify";
import { createBrowserRouter, RouterProvider } from "react-router";
import Root from "./Components/Root/Root.jsx";
import Content from "./Components/Content/Content.jsx";
import All_Product from "./Components/All Product/All_Product.jsx";
import Laptops from "./Components/Laptops/Laptops.jsx";
import Smart_Watches from "./Components/Smart-Watches/Smart_Watches.jsx";
import MacBook from "./Components/MacBook/MacBook.jsx";
import Iphone from "./Components/Iphone/Iphone.jsx";
import Phones from "./Components/Phones/Phones.jsx";
import Error from "./Components/Error/Error.jsx";
import Accessories from "./Components/Accessories/Accessories.jsx";
import GetgetDetail from "./Components/GedgetDetail/GetgetDetail.jsx";
import Statistics from "./Components/Statistics/Statistics.jsx";
import Dashboard from "./Components/Dashboard/Dashboard.jsx";
import Cart from "./Components/Cart/Cart.jsx";
import Wishlist from "./Components/Wishlist/Wishlist.jsx";
import { HelmetProvider } from "react-helmet-async";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <Error />,
    children: [
      {
        path: "/",
        element: <Content />,
        children: [
          {
            path: "/",
            element: <All_Product />,
          },
          {
            path: "/Laptops",
            element: <Laptops />,
          },
          {
            path: "/Accessories",
            element: <Accessories />,
          },
          {
            path: "/Smart-Watches",
            element: <Smart_Watches />,
          },
          {
            path: "/MacBook",
            element: <MacBook />,
          },
          {
            path: "/Iphone",
            element: <Iphone />,
          },
          {
            path: "/Phones",
            element: <Phones />,
          },
        ],
      },
      {
        path: "/gadgets/:gadgetId",
        element: <GetgetDetail />,
        loader: () => fetch("/All-Products.json"),
      },
      {
        path: "/Statistics",
        element: <Statistics />,
        loader: () => fetch("/All-Products.json"),
      },
      {
        path: "/Dashboard",
        element: <Dashboard />,
        children: [
          {
            index: true,
            element: <Cart />,
            loader: () => fetch("/All-Products.json"),
          },
          {
            path: "cart",
            element: <Cart />,
            loader: () => fetch("/All-Products.json"),
          },
          {
            path: "wishlist",
            element: <Wishlist />,
            loader: () => fetch("/All-Products.json"),
          },
        ],
      },
    ],
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <HelmetProvider>
      <RouterProvider router={router} />
      <ToastContainer />
    </HelmetProvider>
  </StrictMode>
);
