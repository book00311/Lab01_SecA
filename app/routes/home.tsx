import { foods } from "./data/food";
import FoodSell from "./components/foodsell";

export default function Home() {
  return (
    <div className="p-6">
      <h1 className="text-3xl bg-blue-100 font-bold text-center text-orange-500">🍽️ เมนูอาหารแนะนำ</h1>

      <div className="min-h-screen bg-blue-100 py-10 px-10 mx-auto">
        <div className="grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-6">
          {foods.map((item) => {
            return <FoodSell key={item.Code} food={item} />;
          })}
        </div>
      </div>
    </div>
  );
}
