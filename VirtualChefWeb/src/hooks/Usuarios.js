import PocketBase from "pocketbase";

const pb = new PocketBase("http://127.0.0.1:8090");

const ALL_USERS = await pb.collection("users").getFullList({});

export async function createUser(data) {

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
            rolID: "f4acubm0hg9tipi" // ID del rol de usuario
        }

        await pb.collection('users').create(datos);
    } catch (error) {
        alert("El correo electronico y el nombre de usuario ya existen en la base de datos.");
    }

}

export { ALL_USERS };
