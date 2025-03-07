import { Ingredient } from "@/interfaces";
import React, { createContext, useContext, useState } from "react";
import * as Haptics from "expo-haptics";

// Define the context type
interface IngredientContextType {
  ingredients: Ingredient[];
  addIngredient: (name: string) => void;
  removeIngredient: (id: number) => void;
}

// Create the context
const IngredientContext = createContext<IngredientContextType | undefined>(
  undefined
);

// Create the provider component
export const IngredientProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [ingredients, setIngredients] = useState<Ingredient[]>([]);

  const addIngredient = (name: string) => {
    setIngredients([...ingredients, { id: Date.now(), name }]);
    Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Medium);
  };

  const removeIngredient = (id: number) => {
    setIngredients(ingredients.filter((item) => item.id !== id));
    Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Medium);
  };

  return (
    <IngredientContext.Provider
      value={{ ingredients, addIngredient, removeIngredient }}
    >
      {children}
    </IngredientContext.Provider>
  );
};

// Custom hook to use the context
export const useIngredient = () => {
  const context = useContext(IngredientContext);
  if (!context) {
    throw new Error("useIngredient must be used within an IngredientProvider");
  }
  return context;
};
