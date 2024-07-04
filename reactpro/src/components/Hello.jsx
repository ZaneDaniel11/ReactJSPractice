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
        {props.data.message} {props.data.name}
      </h1>
    </div>
  );
}
export default Hello;
