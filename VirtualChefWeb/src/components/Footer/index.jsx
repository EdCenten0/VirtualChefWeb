import FooterImg from "../../assets/bg-footer.png";

const Footer = () => {
  return (
    <footer
      className="w-screen flex items-center justify-evenly flex-col text-white bg-cover bg-center"
      style={{ backgroundImage: `url(${FooterImg})` }}
    >
      <figure className=" z-10 text-white p-20 italic">
        <blockquote className="text-[40px] text-center">
          “Un cocinero se convierte en artista cuando tiene cosas que decir a través de sus plato, como un pintor en un cuadro.”
        </blockquote>
        <figcaption className="text-end text-[30px] ">- Joan Miró</figcaption>
      </figure>
      <h1 className="text-[20px] text-center ">@Virtual Chef</h1>
    </footer>
  );
};

export default Footer;
