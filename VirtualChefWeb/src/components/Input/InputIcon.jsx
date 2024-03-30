// fun: es una funcion que se ejecuta al hacer click en el icono
// icon: es la imagen del icono
// placeholder: texto que aparece en el input

const InputIcon = ({ placeholder, icon, fun }) => {
  return (
    <label className="flex items-center justify-between w-full border border-black rounded-md px-2 my-6">
      <input
        placeholder={placeholder}
        className="w-full p-1  focus:outline-none "
        style={{ flex: 1 }}
      />
      <img
        src={icon}
        alt="Icon"
        className="w-4 h-4 hover:cursor-pointer"
        onClick={fun}
      />
    </label>
  );
};

export default InputIcon;
