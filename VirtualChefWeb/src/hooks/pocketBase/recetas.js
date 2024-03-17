import { useState, useEffect } from "react";
import { pb } from "./pocketBase";

function useRecetas() {
  const [recetas, setRecetas] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    const fetchRecetas = async () => {
      try {
        const recetas = await getRecetas();
        setRecetas(recetas);
      } catch (error) {
        setError(true);
      } finally {
        setLoading(false);
      }
    };
    fetchRecetas();
  }, []);

  async function adjuntarReceta(receta) {
    setRecetas([...recetas, receta]);
  }

  async function getRecetas() {
    const recetas = await pb
      .collection("recetas")
      .getFullList({ expand: ["horarioId"] });
    return recetas;
  }

  async function searchReceta(idReceta) {
    const receta = await pb
      .collection("recetas")
      .getOne(idReceta, { expand: ["horarioId, creador"] });
    return receta;
  }

  const createNewReceta = async (data) => {
    try {
      const receta = await pb.collection("recetas").create(data);
      adjuntarReceta(receta);
    } catch (error) {
      setError(true);
    }
  };

  return { recetas, loading, error, createNewReceta, getRecetas, searchReceta };
}

export { useRecetas };
