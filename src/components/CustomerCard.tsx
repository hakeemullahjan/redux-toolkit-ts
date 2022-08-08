import React from "react";
import { useDispatch } from "react-redux";
import { addFoodToCustomer } from "../features/customerSlice";

interface CustomerCardProps {
  id: string;
  name: string;
  food: string[];
}

export default function CustomerCard({ id, name, food }: CustomerCardProps) {
  const dispatch = useDispatch();

  const [foodInput, setFoodInput] = React.useState<string>("");

  const handleAddFoodToCustomer = () => {
    if (!foodInput) return;
    dispatch(addFoodToCustomer({ id, food: foodInput }));
    setFoodInput("");
  };

  return (
    <div className="customer-food-card-container">
      <p>{name}</p>
      <div className="customer-foods-container">
        <div className="customer-food">
          {food.map((food: string) => (
            <p>{food}</p>
          ))}
        </div>
        <div className="customer-food-input-container">
          <input
            value={foodInput}
            onChange={(e) => setFoodInput(e.target.value)}
          />
          <button onClick={handleAddFoodToCustomer}>Add</button>
        </div>
      </div>
    </div>
  );
}
