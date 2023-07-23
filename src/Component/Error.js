import { Link } from "react-router-dom";

export default function Error() {
  return (
    <div>
      <h1>404 Page not found 😔</h1>
      <Link to="/">Back to Home</Link>
    </div>
  );
}
