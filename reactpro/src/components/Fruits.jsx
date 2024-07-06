export default function Fruits({ name, price }) {
  return (
    <>
      {price > 5 ? (
        <li>
          {name}
          {price}
        </li>
      ) : (
        ""
      )}
    </>
  );
}
