// function testfunction() {
//   return "Testing";
// }
function Hello(props) {
  return (
    <div>
      <h1>
        {props.greatings} {props.name}
      </h1>
    </div>
  );
}
export default Hello;
