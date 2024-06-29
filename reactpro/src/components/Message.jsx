export default function Message() {
  function Mess() {
    console.log("Button Click");
  }
  return (
    <div>
      <button onClick={Mess}>Click Me</button>
    </div>
  );
}
