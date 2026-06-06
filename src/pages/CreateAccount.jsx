import { useState } from "react";
import { useNavigate } from "react-router-dom";
import MobileContainer from "../components/MobileContainer";

function CreateAccount() {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    fullName: "",
    phone: "",
    email: "",
    password: "",
    company: ""
  });

  const handleSubmit = () => {
    navigate("/account", {
      state: formData
    });
  };

  return (
    <MobileContainer>
      <div style={{ padding: "20px" }}>
        <h1
          style={{
            fontSize: "28px",
            fontWeight: "700",
            marginBottom: "30px"
          }}
        >
          Create your
          <br />
          PopX account
        </h1>

        <div className="field-container">
          <label className="field-label">
            Full Name<span className="required">*</span>
          </label>

          <input
            className="field-input"
            placeholder="Marry Doe"
            value={formData.fullName}
            onChange={(e) =>
              setFormData({
                ...formData,
                fullName: e.target.value
              })
            }
          />
        </div>

        <div className="field-container">
          <label className="field-label">
            Phone Number<span className="required">*</span>
          </label>

          <input
            className="field-input"
            placeholder="Marry Doe"
            value={formData.phone}
            onChange={(e) =>
              setFormData({
                ...formData,
                phone: e.target.value
              })
            }
          />
        </div>

        <div className="field-container">
          <label className="field-label">
            Email Address<span className="required">*</span>
          </label>

          <input
            className="field-input"
            placeholder="Marry Doe"
            value={formData.email}
            onChange={(e) =>
              setFormData({
                ...formData,
                email: e.target.value
              })
            }
          />
        </div>

        <div className="field-container">
          <label className="field-label">
            Password<span className="required">*</span>
          </label>

          <input
            type="password"
            className="field-input"
            placeholder="Marry Doe"
            value={formData.password}
            onChange={(e) =>
              setFormData({
                ...formData,
                password: e.target.value
              })
            }
          />
        </div>

        <div className="field-container">
          <label className="field-label">
            Company Name
          </label>

          <input
            className="field-input"
            placeholder="Marry Doe"
            value={formData.company}
            onChange={(e) =>
              setFormData({
                ...formData,
                company: e.target.value
              })
            }
          />
        </div>

        <div style={{ marginTop: "20px" }}>
          <p style={{ marginBottom: "10px" }}>
            Are you an Agency?
            <span className="required">*</span>
          </p>

          <label>
            <input
              type="radio"
              name="agency"
              defaultChecked
            />
            Yes
          </label>

          <label style={{ marginLeft: "20px" }}>
            <input
              type="radio"
              name="agency"
            />
            No
          </label>
        </div>

        <button
          className="primary-btn"
          style={{ marginTop: "120px" }}
          onClick={handleSubmit}
        >
          Create Account
        </button>
      </div>
    </MobileContainer>
  );
}

export default CreateAccount;