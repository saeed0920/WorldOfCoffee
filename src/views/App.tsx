import { Outlet, RouterProvider } from "react-router-dom";
import router from "../Router/router";
import { CoffeeProvider } from "@/Contexts/CoffeesContext";

function App() {
  return (
    <>
      <CoffeeProvider>
        <RouterProvider router={router} />
        <Outlet />
      </CoffeeProvider>
    </>
  );
}

export default App;
