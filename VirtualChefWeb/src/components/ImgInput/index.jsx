import React, { useState } from "react";
import cross from "./../../assets/cross.svg";
import { set } from "react-hook-form";

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
    height: "45vh",
    cursor: "pointer",
  },
  placeholder: {
    position: "absolute",
    pointerEvents: "none",
    width: "3rem",
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
  img: {
    width: "100%",
    height: "100%",
    objectFit: "cover",
    borderRadius: "32px",
  },
};

const ImgInput = ({ register, isRequired, errors, name, trigger }) => {
  const [image, setImage] = useState(null);

  const replaceName = name.replace(/ /g, "_").toLowerCase();

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    setImage(URL.createObjectURL(file));
    trigger(replaceName);
  };

  return (
    <>
      <div style={styles.container} className=''>
        <input
          {...register(replaceName, { required: isRequired })}
          style={styles.input}
          type='file'
          accept='image/*'
          onChange={handleImageChange}
        />
        <img
          style={image == null ? styles.placeholder : styles.img}
          src={image == null ? cross : image}
          alt='cross'
        />
      </div>
      {errors[replaceName] && (
        <span className='text-red-600 text-xl'>Este campo es requerido</span>
      )}
    </>
  );
};

export default ImgInput;
