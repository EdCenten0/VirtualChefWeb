import React from "react";
import Header from "../../components/Header";
import ProfileCard from "../../components/ProfileCard";

const About = () => {
  return (
    <>
      <Header />
      <main className='flex justify-center items-center flex-col m-10'>
        <section className='bg-slate-100 w-[100vw] p-10 '>
          <div className='w-full'>
            <h2 className='text-center font-bold text-xl my-4'>
              ¿Qué es Virtual Chef?
            </h2>
            <p className='my-2 text-center font-normal'>
              Virtual Chef es una aplicación web que te permite buscar recetas
              de comida, guardar tus recetas favoritas, y crear tus propias
              recetas.
            </p>
          </div>
        </section>
        <section className='bg-slate-200 w-[100vw] pb-20'>
          <div className=''>
            <h2 className='text-center font-bold text-xl my-4'>
              ¿Quiénes somos?
            </h2>
            <div className='flex gap-3 justify-around'>
              {/* <div className='w-72 h-96 bg-[#0e3d12] flex flex-col gap-10 p-5 rounded-lg  justify-center items-center hover:scale-110 transition-all cursor-pointer'>
                <img
                  className='w-52 h-52 rounded-full  '
                  src='https://avatars.githubusercontent.com/u/101136485?v=4'
                  alt='Isabel'
                />
                <p className='text-white text-center font-bold text-'>
                  Isabel Denisse Aguilar Vilchez
                </p>
              </div>
              <div className='w-72 h-96 bg-[#0e3d12] flex flex-col gap-10 p-5 rounded-lg  justify-center items-center hover:scale-110 transition-all cursor-pointer'>
                <img
                  className='w-52 h-52 rounded-full  '
                  src='https://avatars.githubusercontent.com/u/90741749?v=4'
                  alt='Carlos'
                />
                <p className='text-white text-center font-bold text-'>
                  Carlos Eduardo Chavarria Centeno
                </p>
              </div>
              <div className='w-72 h-96 bg-[#0e3d12] flex flex-col gap-10 p-5 rounded-lg  justify-center items-center hover:scale-110 transition-all cursor-pointer'>
                <img
                  className='w-52 h-52 rounded-full  '
                  src='https://avatars.githubusercontent.com/u/104796963?v=4'
                  alt='Francisco'
                />
                <p className='text-white text-center font-bold text-'>
                  Francisco de Jesús Meléndez Simplina
                </p>
              </div>
              <div className='w-72 h-96 bg-[#0e3d12] flex flex-col gap-10 p-5 rounded-lg  justify-center items-center hover:scale-110 transition-all cursor-pointer'>
                <img
                  className='w-52 h-52 rounded-full  '
                  src='https://avatars.githubusercontent.com/u/101136508?v=4'
                  alt='Ana'
                />
                <p className='text-white text-center font-bold text-'>
                  Ana Marbell Zepeda Alméndarez
                </p>
              </div> */}
              <ProfileCard
                pattern={1}
                nombre={"Isabel Denisse Aguilar Vilchez"}
                descripcion={"Web developer"}
                imgUrl={"https://avatars.githubusercontent.com/u/101136485?v=4"}
                link={"https://github.com/denisseaguilar"}
              />
              <ProfileCard
                pattern={2}
                nombre={"Carlos Eduardo Chavarria Centeno"}
                descripcion={"Web developer"}
                imgUrl={"https://avatars.githubusercontent.com/u/90741749?v=4"}
                link={"https://github.com/EdCenten0"}
              />
              <ProfileCard
                pattern={3}
                nombre={"Francisco de Jesús Meléndez Simplina"}
                descripcion={"Web developer"}
                imgUrl={"https://avatars.githubusercontent.com/u/104796963?v=4"}
                link={"https://github.com/FranciscoMelen10"}
              />
              <ProfileCard
                pattern={4}
                nombre={"Ana Marbell Zepeda Alméndarez"}
                descripcion={"Web developer"}
                imgUrl={"https://avatars.githubusercontent.com/u/101136508?v=4"}
                link={"https://github.com/marbell04"}
              />
            </div>
          </div>
        </section>
      </main>
    </>
  );
};

export default About;
