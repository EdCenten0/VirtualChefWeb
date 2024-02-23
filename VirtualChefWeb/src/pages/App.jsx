import { CrearReceta1, CrearReceta2 } from "./CrearReceta";
import { Registrar } from "./Login/Registrar";
import { useRoutes, BrowserRouter } from "react-router-dom";
import Login from "./Login/index";
import Menu_Principal from "./Menu_Principal";

function App() {
  const AppRoutes = () => {
    let routes = useRoutes([
      {
        path: "/login",
        element: <Login />,
      },
      { path: "/favoritos", element: <Login /> },
      { path: "/registrar", element: <Registrar /> },
      { path: "/home", element: <Menu_Principal /> },
      { path: "/about" },
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
