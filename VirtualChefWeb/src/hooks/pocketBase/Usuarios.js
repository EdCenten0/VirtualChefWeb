import PocketBase from "pocketbase";

const pb = new PocketBase("http://127.0.0.1:8090");

const ALL_USERS = await pb.collection("users").getFullList({});

// globally disable auto cancellation
pb.autoCancellation(false);

export async function createUser(data) {

    // Buscar el ID del rol de "usuario"
    const idRol = await pb.collection("roles").getFullList({}, {
        filter: `nombre = "usuario"`,
    });

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
            rolID: idRol[0].id// ID del rol de usuario
        }

        // Comprueba si hay un usuario con el mismo correo o nombre de usuario
        const user = await existeUsuario(datos.email, datos.username)

        if (user) {
            alert("Usuario ya existe, intente con otro correo o nombre de usuarios");
            return false;
        } else {
            // Crea el usuario, porque no existe
            await pb.collection('users').create(datos);
            alert("Usuario creado con éxito")
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
    alert("Usuario no encontrado, intente de nuevo");
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
        return user.length != 0 ? true : false

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

export {
  ALL_USERS,
  loginUsuario,
  existeUsuario,
  buscarInfoUsuario,
  editarUsuario,
};
