import PocketBase from "pocketbase";

const pb = new PocketBase("http://127.0.0.1:8090");

// globally disable auto cancellation
pb.autoCancellation(false);

const ALL_FAVORITOS = await pb.collection("usuario_recetas_favoritas").getFullList({});

// Sin probar
// export async function createFavoritos(data) {

//     try {
//         // Tabla de usuarios en pocketbase
//         const datos = {
//             recetasId: data.recetasId,
//             usuarioId: data.usuarioId
//         }

//         await pb.collection('usuario_recetas_favoritas').create(datos);
//     } catch (error) {
//         alert(".");
//     }

// }

async function findFavoritos(usuarioId, recetasId) {
    try {
        const favoritosUser = await pb.collection("usuario_recetas_favoritas").getFullList({}, {
            filter: `recetasId = "${recetasId}" && usuarioId = "${usuarioId}"`,
        });
        console.log(favoritosUser);

        pb.authStore.clear();
    } catch (error) {
        alert(error);
    }
}

export { ALL_FAVORITOS, findFavoritos };
