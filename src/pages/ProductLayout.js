import { Outlet } from "react-router-dom";

export default function ProductLayout() {
  return (
    <div>
      <h1>Product Page</h1>
      <Outlet />
    </div>
  );
}
