import {useState} from "react";

function Counter () {
  const [Step, setStep] = useState(1);
  const [Count, setCount] = useState(0);

  const date = new Date();
  date.setDate(date.getDate() + Count);


  function DecreaseStep() {
    if (Step > 1) setStep((curStep) => curStep - 1)
  }
  function IncreaseStep() {
    if (Step < 10) setStep((curStep) => curStep + 1)
  }

  function DecreaseCount() {
    setCount((curCount) => curCount - Step)
  }

  function IncreaseCount() {
    setCount((curCount) => curCount + Step)
  }

  return (
  <>
  <div>
    <button onClick={ DecreaseStep }>-</button>
    <span>Step: {Step}</span>
    <button onClick={ IncreaseStep }>+</button>
  </div>
    <div>
      <button onClick={ DecreaseCount }>-</button>
      <span>Count: {Count}</span>
      <button onClick={ IncreaseCount }>+</button>
    </div>
    <div>
      <span>
        {Count === 0 ?
          "Today is "
          : Count > 0 ?
            `${Count} days from today is `
            : `${Math.abs(Count)} days ago was `}
      </span>
      <span>{date.toDateString()}</span>
    </div>
  </>
  )
}

export default Counter