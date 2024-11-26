import OrderConfirmed from "./components/OrderConfirmed";
import IsConfirmedProvider from "./IsConfirmedProvider";
import ItemsInCartProvider from "./ItemsInCartProvider";
import MainPage from "./MainPage";
import { createBrowserRouter, RouterProvider } from "react-router";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainPage />,
  },
  {
    path: "/orderconfirmed",
    element: <OrderConfirmed />,
  },
]);
function App() {
  return (
    <IsConfirmedProvider>
      <ItemsInCartProvider>
        <RouterProvider router={router} />
      </ItemsInCartProvider>
    </IsConfirmedProvider>
  );
}

export default App;
