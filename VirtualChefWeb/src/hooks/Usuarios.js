import PocketBase from "pocketbase";

const pb = new PocketBase("http://127.0.0.1:8090");

const ALL_USERS = await pb.collection("users").getFullList({});

let validacion = true;

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

        existeUsuario(datos.email, datos.username)

        if (validacion) {
            await pb.collection('users').create(datos);
        } else {
            console.log("Existe usuario")
        }

    } catch (error) {
        console.log(error);
    }

}

async function findUser(email, password) {
    // No funciona
    try {
        console.log(email);
        console.log(password);
        await pb.collection('users').authWithPassword(email, password);
        // after the above you can also access the auth data from the authStore
        console.log(pb.authStore.isValid);
        console.log(pb.authStore.token);
        return pb.authStore.isValid;

    } catch (error) {
        console.log(error);
    }
}

async function existeUsuario(email, username) {
    try {
        // Buscar usuario y correo en la base de datos (funciona pero la contraseña no se puede comparar en la base de datos)
        const user = await pb.collection("users").getFullList({}, {
            filter: `email = "${email}" || username = "${username}"`,
        });

        console.log(user.length)

        if (user.length === 1) {
            alert("Usuario ya existe, intente con otro correo o nombre de usuario");
            validacion = false;
        } else {
            alert("Usuario creado con exito");
            validacion = true;
        }

        return validacion;
    } catch (error) {
        console.log(error);
    }
}



export { ALL_USERS, findUser };
