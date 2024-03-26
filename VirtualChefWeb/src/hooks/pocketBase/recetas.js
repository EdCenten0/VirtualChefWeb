import { useState, useEffect } from "react";
import { pb } from "./pocketBase";
import { getHorario } from "./Horario";

// globally disable auto cancellation
pb.autoCancellation(false);

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

  const getRecetasMenu = async (horario) => {
    const tiempo = await getHorario(horario);
    const recetasMenu = await pb
      .collection("recetas")
      .getFullList({ filter: `horarioId = "${tiempo[0].id}"` });
    return recetasMenu;
  } 

  return { recetas, loading, error, createNewReceta, getRecetas, searchReceta, getRecetasMenu };
}

export { useRecetas };
