import "./styles.css";

document.getElementById("app").innerHTML = `
<h1>Debounce in JavaScript</h1>
`;

let input = document.querySelector("#input")
function inputHandler(event){
  console.log(event.target.value)
}
function debounce(cb , delay){
  let timerId;
 return function(...args){
   clearTimeout(timerId)
  const timerId = setTimeout(()=>{
    cb(...args)
  },delay)
 };

}
const debouncedInput = debounce(inputHandler, 800);

input.addEventListener('keyup', debouncedInput)