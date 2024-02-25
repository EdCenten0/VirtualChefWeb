import React from "react";
import cross from "./../../assets/cross.svg";

const styles = {
  container: {
    position: "relative",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    border: "none",
    borderRadius: "32px",
    backgroundColor: "#c7c7c7",
    width: "100%",
    height: "15rem",
    cursor: "pointer",
  },
  placeholder: {
    position: "absolute",
    pointerEvents: "none",
    width: "3rem",
    transform: "rotate(45deg)",
  },
  input: {
    opacity: "0.0",
    position: "absolute",
    top: 0,
    left: 0,
    bottom: 0,
    right: 0,
    width: "100%",
    height: "100%",
    cursor: "pointer",
  },
};

const ImgInput = ({ register, isRequired, errors }) => {
  return (
    <>
      <div style={styles.container} className=''>
        <input
          {...register("img", { required: isRequired })}
          style={styles.input}
          type='file'
        />
        <img style={styles.placeholder} src={cross} alt='cross' />
      </div>
      {errors.img && (
        <span className='text-red-600 text-xl'>Este campo es requerido</span>
      )}
    </>
  );
};

export default ImgInput;
