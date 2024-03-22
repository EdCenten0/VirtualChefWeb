/**
 * Componente para crear una receta.
 *
 * @returns {JSX.Element} El componente de creación de receta.
 */

import React from "react";
import { useForm } from "react-hook-form";
import { Link, NavLink } from "react-router-dom";
import Input from "../../components/Input";
import InputAgregarElemento from "../../components/Input/InputAgregarElemento";
import Button from "../../components/Button";
import HeaderText from "../../components/HeaderText";
import ImgInput from "../../components/ImgInput";
import Select from "../../components/Select";
import TextArea from "../../components/TextArea";
import ControladorPasos from "../../components/ControladorPasos";
import TarjetasAgregados from "../../components/TarjetasAgregados";
import { CrearRecetaProvider } from "../../contexts/CrearRecetaContext";

const CrearReceta1 = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = handleSubmit((data) => {
    console.log(data);
    location.href = "/CrearReceta2";
  });

  return (
    <>
      <CrearRecetaProvider>
        <main className='m-10'>
          <div className='mx-4 my-2'>
            <HeaderText text={"Agrega una receta"} />
          </div>

          <form onSubmit={onSubmit}>
            <div className='grid grid-cols-3 grid-rows-2 gap-7 m-3'>
              <div className='flex flex-col justify-between gap-10'>
                <ImgInput
                  errors={errors}
                  register={register}
                  isRequired={true}
                />
                <ControladorPasos paso={1} />
                <Link to={"/CrearReceta2"}>
                  <Button text={"Siguiente"} />
                </Link>
              </div>

              <div className='col-span-2 row-span-2'>
                <Input
                  errors={errors}
                  isRequired={true}
                  register={register}
                  name={"Nombre"}
                  placeholder={"Nombre de la receta"}
                />

                <TextArea
                  errors={errors}
                  isRequired={true}
                  register={register}
                  name={"Descripcion"}
                  placeholder={"Agrega una descripcion"}
                />

                <div className='flex gap-14'>
                  <div>
                    <p className='text-2xl'>Tiempo de preparacion</p>
                    <div className='flex gap-3'>
                      <Input
                        errors={errors}
                        isRequired={true}
                        register={register}
                        name={"Tiempo"}
                        placeholder={"10 minutos"}
                        type='number'
                        minLength={1}
                      />
                      <p className='flex justify-center items-center'>
                        Minutos....
                      </p>
                    </div>
                  </div>
                  <div className='flex flex-col gap-3'>
                    <p className='text-2xl'>Tiempo de comida</p>
                    <Select
                      errors={errors}
                      isRequired={true}
                      register={register}
                      name={"mealTime"}
                      valores={["Desayuno", "Almuerzo", "Cena"]}
                    />
                  </div>
                </div>
              </div>
            </div>
          </form>
        </main>
      </CrearRecetaProvider>
    </>
  );
};

const CrearReceta2 = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  return (
    <>
      <CrearRecetaProvider>
        <main className='m-10'>
          <div className='mx-4 my-2'>
            <HeaderText text={"Agrega una receta"} />
            <div className='grid grid-cols-2 gap-10'>
              <div className='flex justify-center flex-col gap-8'>
                <InputAgregarElemento
                  errors={errors}
                  register={register}
                  name={"Ingrediente"}
                  placeholder={"Chiltoma con tomate"}
                  addIcon={true}
                />
                <ControladorPasos paso={2} />

                <NavLink to={"/CrearReceta3"}>
                  <Button text={"Siguiente"} />
                </NavLink>
              </div>

              <div>
                <HeaderText text={"Ingredientes"} />
                <div className='w-full bg-slate-400 p-2 rounded-lg my-5'>
                  <TarjetasAgregados />
                  <TarjetasAgregados />
                  <TarjetasAgregados />
                  <TarjetasAgregados />
                  <TarjetasAgregados />
                  <TarjetasAgregados />
                </div>
              </div>
            </div>
          </div>
        </main>
      </CrearRecetaProvider>
    </>
  );
};

const CrearReceta3 = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  return (
    <>
      <CrearRecetaProvider>
        <main className='m-10'>
          <div className='mx-4 my-2'>
            <HeaderText text={"Agrega una receta"} />
            <div className='grid grid-cols-2 gap-10'>
              <div className='flex justify-center flex-col gap-8'>
                <Input
                  register={register}
                  name={"Pasos"}
                  placeholder={"Hornear 10 minutos"}
                  addIcon={true}
                  errors={errors}
                />
                <ControladorPasos paso={3} />
                <Button text={"Siguiente"} />
              </div>

              <div>
                <HeaderText text={"Pasos"} />
                <div className='w-full bg-slate-400 p-2 rounded-lg my-5'>
                  <TarjetasAgregados />
                  <TarjetasAgregados />
                  <TarjetasAgregados />
                  <TarjetasAgregados />
                  <TarjetasAgregados />
                  <TarjetasAgregados />
                </div>
              </div>
            </div>
          </div>
        </main>
      </CrearRecetaProvider>
    </>
  );
};

export { CrearReceta1, CrearReceta2, CrearReceta3 };
