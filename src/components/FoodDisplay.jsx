import { StoreContext } from "../context/StoreContext";
import { useContext } from "react";
import FoodItem from "./FoodItem";

const FoodDisplay = ({category}) => {
  const { food_list } = useContext(StoreContext);
  return (
    <div className="px-6 mt-10">
      <h2 className="font-bold text-3xl mb-6">Top dishes near you</h2>

      <div className="grid gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        {food_list
          .filter((item) => category === "All" || item.category === category)
          .map((item, index) => {
            return (
              <FoodItem
                key={index}
                id={item._id}
                name={item.name}
                price={item.price}
                description={item.description}
                image={item.image}
              />
            );
          })}
      </div>
    </div>
  );
   
};

export default FoodDisplay;
