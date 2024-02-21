import React from "react";

const styles = {
  container: {
    position: "relative",
    margin: "1rem 0",
  },
  text: {
    padding: "0 1rem 0 1px",
    fontSize: "0.7rem",
    margin: 0,
    position: "absolute",
    top: -7,
    left: 10,
    backgroundColor: "white",
    fontWeight: 200,
  },
  textArea: {
    margin: 0,
    outline: "black",
    width: "100%",
    border: "1px solid #000",
    borderRadius: "5px",
    padding: ".4rem 1rem .4rem .4rem ",
    color: "black",
    fontWeight: 300,
  },
};

const TextArea = ({ name, placeholder }) => {
  return (
    <>
      <div style={styles.container}>
        <p style={styles.text}>{name}</p>
        <textarea style={styles.textArea} placeholder={placeholder} />
      </div>

      <style>
        {` ::placeholder { 
                color: gray; 
                font-weight: 200;
            }`}
      </style>
    </>
  );
};

export default TextArea;
