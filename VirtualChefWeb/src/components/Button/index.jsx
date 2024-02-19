// De Carlos para Carlos:
// Con este buttom se me ocurre lo mismo que con el input, ya que en algunos lugares de la aplicacion este deberia de ser mas largo o mas corto
// Aunque creo que probablemente sea mejor dejarle el width 100% y que esté dentro de un contenedor que dictamine su tamaño

import React from "react";

const styles = {
  button: {
    padding: 10,
    backgroundColor: "#246C2C",
    borderRadius: 12,
    width: "100%",
    height: 50,
    color: "#fff",
    fontWeight: "bold",
    textAlign: "center",
    fontSize: 20,
    border: "none",
  },
};

const Button = ({ text }) => {
  return (
    <>
      <button style={styles.button}>{text}</button>
    </>
  );
};

export default Button;
