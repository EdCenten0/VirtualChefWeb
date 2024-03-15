import PocketBase from "pocketbase";

const pb = new PocketBase("http://127.0.0.1:8090");

const records = await pb.collection("recetas").getFullList({});

//  Credenciales
//  Correo: admin@gmail.com
//  password: admin123456

const adminData = await pb.admins.authWithPassword(
  "admin@gmail.com",
  "admin123456"
);

export { pb, records };
