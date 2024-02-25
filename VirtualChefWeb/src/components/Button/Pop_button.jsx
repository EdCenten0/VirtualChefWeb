import { NavLink } from "react-router-dom";
import "./Pop_button.css";

function Pop_button({Icon, text}) {
  return (
    <NavLink className="Btn" to="/crearReceta1">
      <div className="sign">
        <img src={Icon} alt="Icon" />
      </div>
      <div className="text">{text}</div>
    </NavLink>
  );
}

export default Pop_button;
