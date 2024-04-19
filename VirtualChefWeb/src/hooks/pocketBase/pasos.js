import { useState, useEffect } from "react";
import { pb } from "./pocketBase";

function usePasos() {
  const [pasos, setPasos] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    const fetchPasos = async () => {
      try {
        const pasos = await getPasos();
        setPasos(pasos);
      } catch (error) {
        setError(true);
      } finally {
        setLoading(false);
      }
    };
    fetchPasos();
  }, []);

  async function adjuntarPaso(paso) {
    setPasos([...pasos, paso]);
  }

  async function getPasos(idReceta) {
    try {
      const pasos = await pb
        .collection("pasos")
        .getFullList({ filter: `recetaId = "${idReceta}"` });

      return pasos;
    } catch (error) {
      console.log(error);
    }

    return {};
  }

  async function searchPaso(idPaso) {
    const paso = await pb.collection("pasos").getOne(idPaso);
    return paso;
  }

  const createNewPaso = async (data) => {
    try {
      pb.collection("pasos").create(data);
      console.log("Paso creado con exito");
    } catch (error) {
      console.log(error);
    }
  };

  return { pasos, loading, error, createNewPaso, getPasos, searchPaso };
}

export { usePasos };
