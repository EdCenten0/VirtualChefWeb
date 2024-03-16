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

  async function getRecetas() {
    const recetas = await pb
      .collection("recetas")
      .getFullList({ expand: ["horarioId"] });
    return recetas;
  }

  const createNewReceta = async (data) => {
    try {
      const receta = await pb.collection("recetas").create(data);
      setRecetas([...recetas, receta]);
    } catch (error) {
      setError(true);
    }
  };

  return { recetas, loading, error, createNewReceta, getRecetas };
}

export { useRecetas };
