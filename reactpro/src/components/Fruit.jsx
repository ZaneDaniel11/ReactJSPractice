import Fruits from "./Fruits";
export default function Fruit() {
  const fruits = [
    { name: "Apple", price: 10, soldout: true },
    { name: "Orange", price: 20, soldout: true },
    { name: "Pineapple", price: 30, soldout: true },
    { name: "Pineapple", price: 3, soldout: false },
    { name: "Shesh", price: 5, soldout: false },
  ];
  return (
    <div>
      <ul>
        {fruits.map((fruit) => (
          <Fruits
            key={fruit.name}
            name={fruit.name}
            price={fruit.price}
            soldout={fruit.soldout}
          />
        ))}
      </ul>
    </div>
  );
}
