import PocketBase from "pocketbase";

const pb = new PocketBase("http://127.0.0.1:8090");

// globally disable auto cancellation
pb.autoCancellation(false);

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

async function findUser(username, email) {
    try {

        // Buscar usuario y correo en la base de datos (funciona pero la contraseña no se puede comparar en la base de datos)
        const user = await pb.collection("users").getFullList( {} ,{
            filter : `username = "${username}" || email = "${email}"`,
        });
        console.log(user);

        // Autenticacion de usuario (No funciona)
        // const userData = await pb.collection('users').authWithPassword(username, password);
        // console.log(userData);
    } catch (error) {
        alert(error);
    }
}

export { ALL_USERS, findUser };
