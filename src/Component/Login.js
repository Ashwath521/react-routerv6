import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Login({ setUser }) {
  const [user, setUserName] = useState("");
  const [email, setEmail] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!user || !email) return;
    setUser({ name: user, email: email });
    navigate("/dashboard");
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Enter user name"
          value={user}
          onChange={(e) => {
            setUserName(e.target.value);
          }}
        />
        <br />
        <input
          type="email"
          placeholder="Enter user email"
          value={email}
          onChange={(e) => {
            setEmail(e.target.value);
          }}
        />
        <br />
        <button type="submit">submit</button>
      </form>
    </div>
  );
}
