import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./Component/Home";
import About from "./Component/About";
import { lazy, Suspense } from "react";
// import Product from "./Component/Product";
// import Error from "./Component/Error";
// import StyledLayout from "./pages/StyledLayout";
import ViewProduct from "./Component/ViewProduct";
import ProductLayout from "./pages/ProductLayout";
import SingleProduct from "./Component/SingleProduct";
import Login from "./Component/Login";
// import DashBoard from "./Component/DashBoard";
import { useState } from "react";
import ProtectedRoute from "./Component/ProtectedRoute";
const StyledLayout = lazy(() => import("./pages/StyledLayout"));
const DashBoard = lazy(() => import("./Component/DashBoard"));
const Error = lazy(() => import("./Component/Error"));
function App() {
  const [userInfo, setUserInfo] = useState(null);

  return (
    <div className="App">
      <Router>
        <Suspense fallback={<h1>Loading....</h1>}>
          <Routes>
            <Route path="/" element={<StyledLayout />}>
              <Route index element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="product" element={<ProductLayout />}>
                <Route index element={<SingleProduct />} />
                <Route path=":productId" element={<ViewProduct />} />
              </Route>
              <Route path="login" element={<Login setUser={setUserInfo} />} />
            </Route>
            <Route
              path="dashboard"
              element={
                <ProtectedRoute user={userInfo}>
                  <DashBoard user={userInfo} />
                </ProtectedRoute>
              }
            />

            <Route path="*" element={<Error />} />
          </Routes>
        </Suspense>
      </Router>
    </div>
  );
}

export default App;
