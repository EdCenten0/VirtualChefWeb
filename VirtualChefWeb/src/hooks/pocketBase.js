import PocketBase from "pocketbase";

const pb = new PocketBase("http://127.0.0.1:8090");

const records = await pb.collection("users").getFullList({});

const adminData = await pb.admins.authWithPassword(
  "admin@gmail.com",
  "admin12345"
);

export { pb, records };
