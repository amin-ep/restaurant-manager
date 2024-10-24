import { IMeal } from "../../interfaces/IMeals";
import Button from "../../ui/Button";

function MealsCard({ meal }: { meal: IMeal }) {
  return (
    <div className="grid grid-cols-[160px_1fr] bg-white p-3 rounded-md">
      <div className="relative">
        {meal.soldOut && (
          <div className="z-10 top-0 left-0 bottom-0 right-0 bg-transparent absolute overflow-hidden">
            <span className="absolute top-3 -left-10 bg-red-600 text-white font-semibold px-10 text-sm py-1 border-2 border-dashed border-white -rotate-45 ring-[5px] ring-red-600">
              Sold out
            </span>
          </div>
        )}
        <img
          src={meal.imageUrl}
          alt={meal.name}
          className={`h-full w-full object-cover rounded-md ${
            meal.soldOut && "grayscale"
          }`}
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
          {!meal.soldOut && <Button variation="secondary">Add To Cart</Button>}
        </div>
      </div>
    </div>
  );
}

export default MealsCard;
