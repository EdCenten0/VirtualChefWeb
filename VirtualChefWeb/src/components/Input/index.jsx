import cross from "./../../assets/cross-green.svg";

const Input = ({
  name,
  placeholder,
  addIcon = false,
  register = () => {},
  isRequired = false,
  errors = {},
}) => {
  const renderAddIcon = () => {
    if (addIcon) {
      return (
        <>
          <div className='w-12 h-full flex items-center justify-center bg-white border border-black rounded-lg cursor-pointer'>
            <img
              className='rotate-45 w-7 cursor-pointer'
              src={cross}
              alt='cross'
            />
          </div>
        </>
      );
    }
  };

  return (
    <>
      <div className='relative my-[1rem] flex gap-3 items-center'>
        <div className='w-full'>
          <p
            className={`py-0 px-1 m-0 absolute -top-[12px] left-[10px] bg-white font-extralight text-[0.9rem] rounded-[5px]`}
          >
            {name}
          </p>
          <input
            {...register(name, { required: isRequired, maxLength: 1 })}
            placeholder={placeholder}
            className='m-0 outline-black border-black rounded-[5px] border font-light w-full px-[.4rem] py-[.6rem] placeholder:text-gray-400 placeholder:font-thin'
          />
          {errors[name] && (
            <span className='text-red-600 text-xl'>
              Este campo es requerido
            </span>
          )}
        </div>

        {renderAddIcon()}
      </div>
    </>
  );
};

export default Input;
