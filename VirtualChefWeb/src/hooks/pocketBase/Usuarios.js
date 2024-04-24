import { pb } from "./pocketBase";
import toast from "react-hot-toast";

const ALL_USERS = await pb.collection("users").getFullList({});

// globally disable auto cancellation
pb.autoCancellation(false);

export async function createUser(data) {
  // Buscar el ID del rol de "usuario"
  const idRol = await pb.collection("roles").getFullList(
    {},
    {
      filter: `nombre = "usuario"`,
    }
  );

  try {
    // Tabla de usuarios en pocketbase
    const datos = {
      username: data.nombre_de_usuario,
      email: data.correo_electronico,
      emailVisibility: true,
      password: data.contraseña,
      passwordConfirm: data.confirmar_contraseña,
      nombre: data.nombre,
      apellido: data.apellido,
      rolID: idRol[0].id, // ID del rol de usuario
    };

    // Comprueba si hay un usuario con el mismo correo o nombre de usuario
    const user = await existeUsuario(datos.email, datos.username);

    if (user) {
      toast.error(
        "Este usuario ya existe, intente con otro correo o nombre de usuario",
        {
          duration: 5000,
          position: "bottom-right",
          className: "bg-red-500 p-5 text-white font-bold",
        }
      );
      return false;
    } else {
      // Crea el usuario, porque no existe
      await pb.collection("users").create(datos);
      return true;
    }
  } catch (error) {
    console.log(error);
    return false;
  }
}

async function loginUsuario(email, password) {
  try {
    const authData = await pb
      .collection("users")
      .authWithPassword(`${email}`, `${password}`);
    return authData;
  } catch (error) {
    console.log(error);
    toast.error("Usuario no encontrado, intente de nuevo", {
      duration: 5000,
      position: "bottom-right",
      className: "bg-red-500 p-5 text-white font-bold",
    });
  }
}

async function existeUsuario(email, username, id) {
  try {
    // Busca si hay un usuario con el mismo correo o nombre de usuario
    const user = await pb.collection("users").getFullList(
      {},
      {
        filter: `email = "${email}" || username = "${username}" || id = "${id}"`,
      }
    );

    // Devuelve un arreglo con los usuarios que coinciden con el correo o nombre de usuario
    return user.length != 0 ? true : false;
  } catch (error) {
    console.log(error);
  }
}

async function buscarInfoUsuario(id) {
  try {
    const user = await pb
      .collection("users")
      .getFullList({ filter: `id = "${id}"` });
    return user;
  } catch (error) {
    console.log(error);
  }
}

async function editarUsuario(id, data) {
  try {
    await pb.collection("users").update(`${id}`, data);
    return true;
  } catch (error) {
    console.log(error);
    return false;
  }
}

async function registroUsuario(id) {
  try {
    // Busca si hay un usuario con el mismo correo o nombre de usuario
    const user = await pb.collection("users").getFullList(
      {},
      {
        filter: `id = "${id}"`,
      }
    );

    // Devuelve un arreglo con los usuarios que coinciden con el correo o nombre de usuario
    return user;
  } catch (error) {
    console.log(error);
  }
}

export {
  ALL_USERS,
  loginUsuario,
  existeUsuario,
  buscarInfoUsuario,
  editarUsuario,
  registroUsuario,
};
