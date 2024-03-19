import PocketBase from "pocketbase";

const pb = new PocketBase("http://127.0.0.1:8090");

// globally disable auto cancellation
pb.autoCancellation(false);

async function getHorario(tiempo) {
    try {
        const horario = await pb
            .collection("horario")
            .getFullList({ filter: `nombre = "${tiempo}"` });
        return horario;
    } catch (error) {
        console.log(error);
    }
}

export { getHorario };
