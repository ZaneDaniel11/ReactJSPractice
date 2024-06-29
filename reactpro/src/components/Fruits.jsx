export default function Fruits({ name, price, soldout }) {
  return (
    <>
      <li>
        {name},{price},{soldout ? "soldout" : ""}
      </li>
    </>
  );
}
