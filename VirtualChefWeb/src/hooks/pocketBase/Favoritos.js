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
        console.log(favoritosUser);

        pb.authStore.clear();
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


export { ALL_FAVORITOS, findFavoritos, getFavoritos };
