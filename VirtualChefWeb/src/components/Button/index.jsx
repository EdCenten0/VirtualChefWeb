// De Carlos para Carlos:
// Con este buttom se me ocurre lo mismo que con el input, ya que en algunos lugares de la aplicacion este deberia de ser mas largo o mas corto
// Aunque creo que probablemente sea mejor dejarle el width 100% y que esté dentro de un contenedor que dictamine su tamaño

const Button = ({ text }) => {
  return (
    <>
      <button className="p-[10px] bg-[#246C2C] rounded-[12px] w-full text-white font-bold text-[20px] h-[50px] text-center">{text}</button>
    </>
  );
};

export default Button;
