/**
 * Componente para crear una receta.
 *
 * @returns {JSX.Element} El componente de creación de receta.
 */

import React, { useContext, useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { Link, NavLink } from "react-router-dom";
import { isEmpty } from "lodash";
import Input from "../../components/Input";
import InputAgregarElemento from "../../components/Input/InputAgregarElemento";
import Button from "../../components/Button";
import HeaderText from "../../components/HeaderText";
import ImgInput from "../../components/ImgInput";
import Select from "../../components/Select";
import TextArea from "../../components/TextArea";
import ControladorPasos from "../../components/ControladorPasos";
import TarjetasAgregados from "../../components/TarjetasAgregados";
import {
  CrearRecetaContext,
  CrearRecetaProvider,
} from "../../contexts/CrearRecetaContext";

const CrearReceta1 = () => {
  const {
    register,
    handleSubmit,
    trigger,
    formState: { errors, dirtyFields },
  } = useForm();

  const { receta, setReceta } = useContext(CrearRecetaContext);
  const userId = JSON.parse(localStorage.getItem("user")).id;

  const pickHorarioId = (horario) => {
    switch (horario) {
      case "Desayuno":
        return "ggqdjlhxly7zono";
      case "Almuerzo":
        return "1dt3qs0viyl1w4l";
      case "Cena":
        return "i8d4cn28bw4o3vj";
      default:
        return "ggqdjlhxly7zono";
    }
  };

  const onSubmit = handleSubmit((data) => {
    setReceta({
      nombre: data.nombre,
      descripcion: data.Descripcion,
      creador: userId,
      imagen: data.imagen,
      tiempoPreparacion: data.tiempo,
      horarioId: pickHorarioId(data.horarioId),
      ingredientes: [],
      pasos: [],
    });
  });

  const renderLink = () => {
    if (isEmpty(errors) && Object.keys(dirtyFields).length >= 3) {
      return <Link to={"/CrearReceta2"}>Siguiente</Link>;
    } else {
      return <p className=''>Siguiente</p>;
    }
  };

  return (
    <>
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
                name={"imagen"}
                trigger={trigger}
              />
              <ControladorPasos paso={1} />

              <Button text={""}>
                <span onClick={onSubmit}>{renderLink()}</span>
              </Button>
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
                onChange={() => {
                  console.log(errors);
                }}
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
    </>
  );
};

const CrearReceta2 = () => {
  const { receta, setReceta } = React.useContext(CrearRecetaContext);

  const ingredientesIsEmpty = receta.ingredientes?.length === 0;

  const renderLink = () => {
    if (!ingredientesIsEmpty) {
      return <Link to={"/CrearReceta3"}>Siguiente</Link>;
    } else {
      return <p className=''>Siguiente</p>;
    }
  };

  console.log(receta);

  return (
    <>
      <main className='m-10'>
        <div className='mx-4 my-2'>
          <HeaderText text={"Agrega una receta"} />
          <div className='grid grid-cols-2 gap-10'>
            <div className='flex justify-start flex-col gap-8'>
              <InputAgregarElemento
                name={"Ingrediente"}
                placeholder={"Chiltoma con tomate"}
                nombreDelArreglo={"ingredientes"}
              />
              <ControladorPasos paso={2} />

              <Button text={""}>
                <span>{renderLink()}</span>
              </Button>
            </div>

            <div className=''>
              <HeaderText text={"Ingredientes"} />
              <p>Agrega algunos ingredientes para tu receta!</p>
              <div className='w-full min-h-10 bg-slate-400 p-2 rounded-lg my-5'>
                {receta.ingredientes?.map((ingrediente, index) => {
                  return (
                    <TarjetasAgregados
                      key={index}
                      elemento={ingrediente}
                      nombreDelArray={"ingredientes"}
                    />
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  );
};

const CrearReceta3 = () => {
  const { receta, setReceta } = React.useContext(CrearRecetaContext);

  const pasosIsEmpty = receta.pasos?.length === 0;

  const renderLink = () => {
    if (!pasosIsEmpty) {
      return <Link to={"/receta"}>Siguiente</Link>;
    } else {
      return <p className=''>Siguiente</p>;
    }
  };
  return (
    <>
      <main className='m-10'>
        <div className='mx-4 my-2'>
          <HeaderText text={"Agrega una receta"} />
          <div className='grid grid-cols-2 gap-10'>
            <div className='flex justify-start flex-col gap-8'>
              <InputAgregarElemento
                name={"Pasos"}
                placeholder={"Hornear por 10 minutos"}
                nombreDelArreglo={"pasos"}
              />
              <ControladorPasos paso={3} />
              <Button text={""}>
                <span>{renderLink()}</span>
              </Button>
            </div>

            <div className=''>
              <HeaderText text={"Pasos"} />
              <p>Agrega algunos pasos para tu receta!</p>
              <div className='w-full min-h-10 bg-slate-400 p-2 rounded-lg my-5'>
                {receta.pasos?.map((paso, index) => {
                  return (
                    <TarjetasAgregados
                      key={index}
                      elemento={paso}
                      nombreDelArray={"pasos"}
                    />
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  );
};

export { CrearReceta1, CrearReceta2, CrearReceta3 };
