import { useState, useEffect } from "react";
import { pb } from "./pocketBase";

function useIngredientes() {
  const [ingredientes, setIngredientes] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  useEffect(() => {
    const fetchIngredientes = async () => {
      try {
        const ingredientes = await getIngredientes();
        setIngredientes(ingredientes);
      } catch (error) {
        setError(true);
      } finally {
        setLoading(false);
      }
    };
    fetchIngredientes();
  }, []);
  async function adjuntarIngrediente(ingrediente) {
    setIngredientes([...ingredientes, ingrediente]);
  }

  async function getIngredientes(idReceta) {
    try {
      const ingredientes = await pb
        .collection("ingredientes")
        .getFullList({ filter: `recetasId = "${idReceta}"` });
      console.log("Console log desde useIngredientes");
      console.log(ingredientes);
      return ingredientes;
    } catch (error) {
      console.log(error);
    }

    return {};
  }
  async function searchIngrediente(idIngrediente) {
    const ingrediente = await pb
      .collection("ingredientes")
      .getOne(idIngrediente);
    return ingrediente;
  }
  const createNewIngrediente = async (data) => {
    try {
      const ingrediente = await pb.collection("ingredientes").create(data);
      adjuntarIngrediente(ingrediente);
    } catch (error) {
      setError(true);
    }
  };

  return {
    ingredientes,
    loading,
    error,
    createNewIngrediente,
    getIngredientes,
    searchIngrediente,
  };
}

export { useIngredientes };
