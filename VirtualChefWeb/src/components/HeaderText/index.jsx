import React from "react";

const styles = {
  header: { fontWeight: "500", fontSize: "1.5rem" },
};

const HeaderText = ({ text }) => {
  return (
    <>
      <p style={styles.header}>{text}</p>
    </>
  );
};

export default HeaderText;
