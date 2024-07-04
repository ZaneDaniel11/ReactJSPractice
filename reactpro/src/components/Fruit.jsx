export default function Fruits() {
  const names = ["Name1", "Name2", "Name3", "Name4"];
  return (
    <div>
      <ul>
        {names.map((name) => (
          <li>{name}</li>
        ))}
      </ul>
    </div>
  );
}
