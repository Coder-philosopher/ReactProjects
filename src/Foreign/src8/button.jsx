let count = 0;
let text = document.querySelector(".text");
import "./Button.css";

// alert("Enjoy the Counter Game")
function CallPlus() {
  count = count + 1;

  if (count > 12) {
    text.innerText = `You have reached the UpperLimit(Only 12 count allowed)`;
  } else {
    text.innerText = `Total Count: ${count}`;
  }
}
function CallMinus() {
  count = count - 1;
  if (count < -12) {
    text.innerText = `You have reached the LowerLimit(Only -12 count allowed)`;
  } else {
    text.innerText = `Total Count: ${count}`;
  }
}
function Button() {
  return (
    <>
      <button
        className="CounterButton"
        onClick={() => {
          CallPlus();
        }}
      >
        Counter++
      </button>
      <button
        className="CounterButton"
        onClick={() => {
          CallMinus();
        }}
      >
        Counter--
      </button>
    </>
  );
  //it is said that we should give reference to the function to be called not to call function directly
  //hence instead of CallPlus() we should give CallPlus
  //but idk why it is not working
}

export default Button;
