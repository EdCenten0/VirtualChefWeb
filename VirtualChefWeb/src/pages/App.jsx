import { useRoutes, BrowserRouter } from "react-router-dom";
import { Suspense, lazy } from "react";

// Páginas
import { CrearReceta1, CrearReceta2, CrearReceta3 } from "./CrearReceta";
import { Registrar } from "./Login/Registrar";
import { useRoutes, BrowserRouter } from "react-router-dom";
import Login from "./Login/index";
import NotFound from "./Not_Found/Not_Found";
import Menu_Principal from "./Menu_Principal";
import About from "./About";
import Favoritos from "./Favoritos/index";
import VistaReceta from "./VIstaReceta";
import { CrearRecetaProvider } from "../contexts/CrearRecetaContext";
import { UserProvider } from "../contexts/UserContext";
const Login = lazy(() => import("./Login/index"));
const NotFound = lazy(() => import("./Not_Found/Not_Found"));
const Menu_Principal = lazy(() => import("./Menu_Principal"));
const About = lazy(() => import("./About"));
const Favoritos = lazy(() => import("./Favoritos/index"));
const VistaReceta = lazy(() => import("./VIstaReceta"));
const Perfil = lazy(() => import("./Perfil/index"));
const Buscar = lazy(() => import("./Buscar/index"));

// Componentes
import Loader from "../components/Icons/Loader";

//Contextos
import { UserProvider } from "../contexts/UserContext";
import { CrearRecetaProvider } from "../contexts/CrearRecetaContext";

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
      { path: "/buscar", element: <Buscar /> },
    ]);

    return routes;
  };

  return (
    <>
      <UserProvider>
        <CrearRecetaProvider>
          <Suspense
            fallback={
              <div className='w-screen h-screen flex justify-center items-center'>
                <Loader></Loader>
              </div>
            }
          >
            <BrowserRouter>
              <AppRoutes />
            </BrowserRouter>
          </Suspense>
        </CrearRecetaProvider>
      </UserProvider>
    </>
  );
}

export default App;
