const handleClick = () => {
  alert("Proximamente...");
};

const InputIcon = ({ placeholder, icon }) => {
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
        onClick={handleClick}
      />
    </label>
  );
};

export default InputIcon;
