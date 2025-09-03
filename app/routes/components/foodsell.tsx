export default function FoodSell({ food }: { food: any }) {
  return (
    <div key={food.Code} className="bg-white shadow-md rounded-lg overflow-hidden p-4">
      <img
        src={food.Photo}
        alt={food.Name}
        className="w-full h-48 object-cover bg-gray-100 rounded-md"
      />
      <h2 className="text-xl font-semibold text-gray-800 mt-3">{food.Name}</h2>
      <p className="text-gray-600 text-sm mt-1">{food.Description}</p>

      <div className="mt-3 text-sm text-gray-700 space-y-1">
        <p><span className="font-semibold">ร้านค้า:</span> {food.Restaurant}</p>
        <p><span className="font-semibold">ราคา:</span> ฿{food.Price}</p>
        <p><span className="font-semibold">ขายดี:</span> {food.Bestseller ? "✅" : "❌"}</p>
        <p><span className="font-semibold">แนะนำ:</span> {food.Suggestion ? "⭐" : "—"}</p>
        <p><span className="font-semibold">อ้างอิง: </span><a href={food.References} target="_blank"> {food.References}</a></p>
      </div>
    </div>
  );
}
