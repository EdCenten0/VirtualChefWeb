import { useContext } from "react";
import Header from "../../components/Header";
import ProfileCard from "../../components/ProfileCard";
import NoLogged from "../../components/Card/NoLogged";
import { UserContext } from "../../contexts/UserContext";

const About = () => {
  const { user } = useContext(UserContext);
  return user.id == "" ? (
    <NoLogged></NoLogged>
  ) : (
    <>
      <div className="w-screen p-10 flex justify-center ">
        <div className="w-screen flex flex-col  max-w-[1200px]">
          <Header />
        </div>
      </div>

      <main className="flex justify-center items-center flex-col m-10">
        <section className="bg-slate-100 w-[99vw] p-10 ">
          <div className="w-full">
            <h2 className="text-center font-bold text-xl my-4">
              ¿Qué es Virtual Chef?
            </h2>
            <p className="my-2 text-center font-normal">
              Virtual Chef es una aplicación web que te permite buscar recetas
              de comida, guardar tus recetas favoritas, y crear tus propias
              recetas.
            </p>
          </div>
        </section>
        <section className=" bg-slate-200 w-[99vw] pb-20">
          <div className="">
            <h2 className="text-center font-bold text-xl my-4">
              ¿Quiénes somos?
            </h2>
            <div className="flex gap-3 justify-around">
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
