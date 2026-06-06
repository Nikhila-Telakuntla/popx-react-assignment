const MobileContainer = ({ children }) => {
  return (
    <div className="wrapper">
      <div className="mobile">
        {children}
      </div>
    </div>
  );
};

export default MobileContainer;
