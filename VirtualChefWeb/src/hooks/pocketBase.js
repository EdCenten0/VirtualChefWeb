import PocketBase from "pocketbase";

const pb = new PocketBase("http://127.0.0.1:8090");

const records = await pb.collection("users").getFullList({});

//  Credenciales
//  Correo: admin@gmail.com
//  password: admin123456

const adminData = await pb.admins.authWithPassword(
  "cchavarriacenteno8@gmail.com",
  "dsadasdasd"
);

export { pb, records };
