import PocketBase from "pocketbase";

const pb = new PocketBase("http://127.0.0.1:8090");

const records = async () => await pb.collection("recetas").getFullList({});

async function authAsAdmin() {
  await pb.admins.authWithPassword("admin@gmail.com", "admin123456");
}

//  Credenciales
//  Correo: admin@gmail.com
//  password: admin123456

function getImagen({ collectionId, id, imagen }) {
  return `http://127.0.0.1:8090/api/files/${collectionId}/${id}/${imagen}`;
}

export { pb, records, getImagen, authAsAdmin };
