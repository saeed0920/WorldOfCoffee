import { createRoutesFromElements, createBrowserRouter, Route } from "react-router-dom";
import Home from "@/Views/Home/Home";
import notfound from "../Views/NotFound";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Home />} errorElement={notfound()}>
     
     
    </Route>,
  ),
) as ReturnType<typeof createBrowserRouter>;

export default router;
