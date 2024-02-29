import FooterImg from "../../assets/bg-footer.png";

const Footer = () => {
  return (
    <footer
      className="w-screen flex items-center justify-evenly flex-col text-white bg-cover bg-center"
      style={{ backgroundImage: `url(${FooterImg})` }}
    >
      <figure className=" z-10 text-white p-20 italic">
        <blockquote className="text-[40px] text-center">
          “El exito no es un accidente. Es trabajo duro, perseverancia,
          aprendizaje, estudio, sacrificio y, sobre todo, amor por lo que estas
          haciendo o aprendiendo a hacer”
        </blockquote>
        <figcaption className="text-end text-[30px] ">- PELÉ</figcaption>
      </figure>
      <h1 className="text-[20px] text-center ">@Virtual Chef</h1>
    </footer>
  );
};

export default Footer;
