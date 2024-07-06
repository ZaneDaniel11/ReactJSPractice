import Fruits from "./Fruits";
export default function Fruit() {
  const fruits = [
    { name: "Apple", price: 10 },
    { name: "Orange", price: 20 },
    { name: "Pineapple", price: 30 },
    { name: "Pineapple", price: 3 },
    { name: "Pineapple", price: 5 },
  ];
  return (
    <div>
      <ul>
        {fruits.map((fruit) => (
          <Fruits key={fruit.name} name={fruit.name} price={fruit.price} />
        ))}
      </ul>
    </div>
  );
}
