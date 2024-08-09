import { createRoutesFromElements, createBrowserRouter, Route } from "react-router-dom";
import Home from "@/views/home/Home";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Home />} errorElement={<div>Ops!</div>}>
      {/* Child Elements */}
    </Route>,
  ),
) as ReturnType<typeof createBrowserRouter>;

export default router;
