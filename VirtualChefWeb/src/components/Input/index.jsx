// De Carlos para Carlos:
// En el caso de las paginas donde el input es un text area, podria hacer que este
// componente sea mas generico y pueda recibir un parametro que tenga las siguientes posibilidades:
// 1: En un render conditional podria generar un input o un text area
// 2: Aumento el tamaño del input para que se convierta en un textarea
// Otra cosa que podria hacer es un componente aparte que sea un textarea, pero siento que se puede evitar y yap
// Por otro lado, se me ocurre que para hacerlo mas responsive podria hacer que por defecto el width y height sean del 100%
// y asi hacer que el componente solamente necesite estar dentro de una etiqueta padre que va a ser la que determine el tamaño del componente
// Yap, eso es todo, espero que te sirva, saludos!

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
    top: -6,
    left: 10,
    backgroundColor: "white",
    fontWeight: 200,
  },
  input: {
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

const Input = ({ name, placeholder }) => {
  return (
    <>
      <div style={styles.container}>
        <p style={styles.text}>{name}</p>
        <input placeholder={placeholder} style={styles.input} />
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

export default Input;
