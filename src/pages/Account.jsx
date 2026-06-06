import MobileContainer from "../components/MobileContainer";
import { useLocation } from "react-router-dom";

function Account() {
  const location = useLocation();

  const data = location.state || {};

  const fullName =
    data.fullName || "Marry Doe";

  const email =
    data.email || "marrydoe@gmail.com";

  return (
    <MobileContainer>
      <div>

        <div className="account-header">
          Account Settings
        </div>

        <div className="account-body">

          <div className="profile-section">

            <div className="image-wrapper">

              <img
                src="https://randomuser.me/api/portraits/women/44.jpg"
                alt="profile"
                className="profile-image"
              />

              <div className="camera-icon">
                📷
              </div>

            </div>

            <div className="profile-info">
              <h3>{fullName}</h3>
              <p>{email}</p>
            </div>

          </div>

          <p className="description">
            Lorem Ipsum Dolor Sit Amet,
            Consetetur Sadipscing Elitr,
            Sed Diam Nonumy Eirmod Tempor
            Invidunt Ut Labore Et Dolore
            Magna Aliquyam Erat.
          </p>

          <div className="divider"></div>

          <div className="bottom-divider"></div>

        </div>

      </div>
    </MobileContainer>
  );
}

export default Account;