import { IMeal } from "../../interfaces/IMeals";
import Button from "../../ui/Button";

function MealsCard({ meal }: { meal: IMeal }) {
  return (
    <div className="grid grid-cols-[160px_1fr] bg-white p-3 rounded-md">
      <div>
        <img
          src={meal.imageUrl}
          alt={meal.name}
          className="h-full w-full object-cover rounded-md"
        />
      </div>
      <div className="px-6 grid grid-cols-1 grid-rows-[1fr_auto] justify-between w-full">
        <div className="pt-4 w-full">
          <h3 className="text-dark-navy font-semibold text-xl">{meal.name}</h3>
          <p className="italic text-stone-800">
            ingredients: {meal.ingredients.join(", ")}
          </p>
        </div>
        <div className="flex justify-between items-end w-full">
          <p className="bg-pantone font-dancing-script px-3 rounded-md text-white">
            {meal.unitPrice.toFixed(2)} $
          </p>
          <Button variation="secondary">Add To Cart</Button>
        </div>
      </div>
    </div>
  );
}

export default MealsCard;
