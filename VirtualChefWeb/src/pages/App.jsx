import { CrearReceta1, CrearReceta2, CrearReceta3 } from "./CrearReceta";
import { Registrar } from "./Login/Registrar";
import { useRoutes, BrowserRouter } from "react-router-dom";
import Login from "./Login/index";
import NotFound from "./Not_Found/Not_Found";
import Menu_Principal from "./Menu_Principal";
import About from "./About";

function App() {
  const AppRoutes = () => {
    let routes = useRoutes([
      { path: "*", element: <NotFound /> },
      { path: "/", element: <Login /> },
      { path: "/favoritos", element: <Login /> },
      { path: "/registrar", element: <Registrar /> },
      { path: "/home", element: <Menu_Principal /> },
      { path: "/crearReceta1", element: <CrearReceta1 /> },
      { path: "/crearReceta2", element: <CrearReceta2 /> },
      { path: "/crearReceta3", element: <CrearReceta3 /> },
      { path: "/about", element: <About /> },
    ]);

    return routes;
  };

  return (
    <>
      <BrowserRouter>
        <AppRoutes />
      </BrowserRouter>
    </>
  );
}

export default App;
