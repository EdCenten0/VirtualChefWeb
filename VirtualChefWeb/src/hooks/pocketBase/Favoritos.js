import PocketBase from "pocketbase";

const pb = new PocketBase("http://127.0.0.1:8090");

// globally disable auto cancellation
pb.autoCancellation(false);

const ALL_FAVORITOS = await pb.collection("usuario_recetas_favoritas").getFullList({});

async function findFavoritos(usuarioId, recetasId) {
    try {
        const favoritosUser = await pb.collection("usuario_recetas_favoritas").getFullList({}, {
            filter: `recetasId = "${recetasId}" && usuarioId = "${usuarioId}"`,
        });
        const validar = favoritosUser.length > 0 ? true : false;
        return validar;

    } catch (error) {
        alert(error);
    }
}

const getFavoritos = async (id_user) => {
    // Primero se obtiene el id del usuario con las recetas que ha marcado como favoritas
    const favoritosUser = await pb
        .collection("usuario_recetas_favoritas")
        .getFullList({ filter: `usuarioId = "${id_user}"`, expand: ["recetasId"] });

    return favoritosUser;
}

const guardarFavorito = async (id_user, id_receta) => {
    try {
        const favorito = await pb.collection("usuario_recetas_favoritas").create({
            usuarioId: id_user,
            recetasId: id_receta,
        });
        console.log(favorito);
    } catch (error) {
        alert(error);
    }
}

const eliminarFavorito = async (id_user, id_receta) => {
    try {
        const favoritosUser = await pb.collection("usuario_recetas_favoritas").getFullList({}, {
            filter: `recetasId = "${id_receta}" && usuarioId = "${id_user}"`,
        });
        const favorito = await pb.collection("usuario_recetas_favoritas").delete(favoritosUser[0].id);
        console.log(favorito);
    } catch (error) {
        alert(error);
    }
}


export { ALL_FAVORITOS, findFavoritos, getFavoritos, guardarFavorito, eliminarFavorito };
