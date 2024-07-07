export default function Conditional() {
  const display = false;
  let message;
  if (display) {
    message = <h1>True</h1>;
  } else {
    message = <h2>False</h2>;
  }
  return message;
}
