// function testfunction() {
//   return "Testing";
// }
function Hello(props) {
  // You can also destructure a prop on Function
  // Destructuring props
  // const { name, greatings } = props;
  return (
    <div>
      <h1>
        {/* {name} {greatings} */}
        {props.greatings} {props.name}
      </h1>
    </div>
  );
}
export default Hello;
