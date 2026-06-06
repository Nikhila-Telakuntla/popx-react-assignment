import { useState } from "react";
import { useNavigate } from "react-router-dom";
import MobileContainer from "../components/MobileContainer";

function Login() {
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = () => {
    navigate("/account", {
      state: {
        fullName: email
          ? email.split("@")[0]
          : "Marry Doe",
        email: email || "marrydoe@gmail.com"
      }
    });
  };

  return (
    <MobileContainer>
      <div style={{ padding: "20px" }}>
        <h1>
          Signin to your
          <br />
          PopX account
        </h1>

        <p
          style={{
            color: "#666",
            marginBottom: "30px"
          }}
        >
          Lorem ipsum dolor sit amet,
          consectetur adipiscing elit.
        </p>

        <div className="field-container">
          <label
            className="field-label"
            htmlFor="email"
          >
            Email Address
          </label>

          <input
            id="email"
            name="email"
            className="field-input"
            placeholder="Enter email address"
            value={email}
            onChange={(e) =>
              setEmail(e.target.value)
            }
          />
        </div>

        <div className="field-container">
          <label
            className="field-label"
            htmlFor="password"
          >
            Password
          </label>

          <input
            id="password"
            name="password"
            type="password"
            className="field-input"
            placeholder="Enter password"
            value={password}
            onChange={(e) =>
              setPassword(e.target.value)
            }
          />
        </div>

        <button
          className="login-btn"
          onClick={handleLogin}
        >
          Login
        </button>
      </div>
    </MobileContainer>
  );
}

export default Login;