import { CrearReceta1, CrearReceta2, CrearReceta3 } from "./CrearReceta";
import { Registrar } from "./Login/Registrar";
import { useRoutes, BrowserRouter } from "react-router-dom";
import Login from "./Login/index";
import NotFound from "./Not_Found/Not_Found";
import Menu_Principal from "./Menu_Principal";
import About from "./About";
import Favoritos from "./Favoritos/index";
import VistaReceta from "./VIstaReceta";
import { UserProvider } from "../contexts/UserContext";
import { CrearRecetaProvider } from "../contexts/CrearRecetaContext";
import Perfil from "./Perfil/index"; 

function App() {
  const AppRoutes = () => {
    let routes = useRoutes([
      { path: "*", element: <NotFound /> },
      { path: "/", element: <Login /> },
      { path: "/favoritos", element: <Favoritos /> },
      { path: "/registrar", element: <Registrar /> },
      { path: "/home", element: <Menu_Principal /> },
      { path: "/crearReceta1", element: <CrearReceta1 /> },
      { path: "/crearReceta2", element: <CrearReceta2 /> },
      { path: "/crearReceta3", element: <CrearReceta3 /> },
      { path: "/receta", element: <VistaReceta /> },
      { path: "/about", element: <About /> },
      { path: "/perfil", element: <Perfil /> },
    ]);

    return routes;
  };

  return (
    <>
      <UserProvider>
        <CrearRecetaProvider>
          <BrowserRouter>
            <AppRoutes />
          </BrowserRouter>
        </CrearRecetaProvider>
      </UserProvider>
    </>
  );
}

export default App;
