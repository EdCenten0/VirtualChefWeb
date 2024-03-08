import PocketBase from "pocketbase";

const pb = new PocketBase("http://127.0.0.1:8090");

const records = await pb.collection("users").getFullList({});

// Contraseña: casimiro1234

const adminData = await pb.admins.authWithPassword(
  "cchavarriacenteno8@gmail.com",
  "dsadasdasd"
);

export { pb, records };
