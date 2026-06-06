import { useNavigate } from "react-router-dom";
import MobileContainer from "../components/MobileContainer";

function Home() {
  const navigate = useNavigate();

  return (
    <MobileContainer>
      <div
        style={{
          position: "absolute",
          bottom: "40px",
          left: "10%",
          width: "80%"
        }}
      >
        <h2>Welcome to PopX</h2>

        <p>
          Lorem ipsum dolor sit amet,
          <br />
          consectetur adipiscing elit.
        </p>

        <button
          className="primary-btn"
          onClick={() => navigate("/create-account")}
        >
          Create Account
        </button>

        <br />
        <br />

        <button
          className="secondary-btn"
          onClick={() => navigate("/login")}
        >
          Already Registered? Login
        </button>
      </div>
    </MobileContainer>
  );
}

export default Home;