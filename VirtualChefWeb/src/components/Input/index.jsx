const Input = ({
  name,
  placeholder,
  register = () => {},
  isRequired = false,
  errors = {},
  type = "text",
  minLength = 10,
  containerClassName = "",
  inputClassName = "",
}) => {
  const replaceName = name.replace(/ /g, "_").toLowerCase();

  return (
    <>
      <div
        className={`${containerClassName} relative my-[1rem] flex gap-3 items-center`}
      >
        <div className='w-full'>
          <p
            className={` py-0 px-1 m-0 absolute -top-[12px] left-[10px] bg-white font-extralight text-[0.9rem] rounded-[5px]`}
          >
            {name}
          </p>
          <input
            {...register(replaceName, {
              required: isRequired,
              minLength: minLength,
            })}
            placeholder={placeholder}
            className={`${inputClassName} m-0 outline-black border-black rounded-[5px] border font-light w-full px-[.4rem] py-[.6rem] placeholder:text-gray-400 placeholder:font-thin`}
            type={`${type}`}
          />
          {errors[replaceName] && (
            <span className='text-red-600 text-xl'>
              Este campo es requerido
            </span>
          )}
        </div>
      </div>
    </>
  );
};

export default Input;
