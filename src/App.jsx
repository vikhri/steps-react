import {useState} from "react";

const messages = [
  "Learn",
  "Apply for job",
  "Invest your new inncome",
];

function App() {
const  [step, setStep] = useState(1)
const [isOpen, setIsOpen] = useState(true)

function handlePrevious() {
  if (step > 1) setStep((s) => s - 1 );
}
  function handleNext() {
    if (step < 3) setStep((s) => s + 1)
  }


  return (
    <>
      <button className='close' onClick={() => setIsOpen((is) => !is)}>&times;
      </button>
      {
        isOpen && (
      <div className='steps'>
        <div className='numbers'>
          <div className={step >= 1 ? 'active' : ''}>1</div>
          <div className={step >= 2 ? 'active' : ''}>2</div>
          <div className={step >= 3 ? 'active' : ''}>3</div>
        </div>

        <p className='message'> Step {step}: {messages[step - 1]}</p>
        <div className='buttons'>
          <button
            style={step === 1 ? {backgroundColor: "#7950f299", color: "#ffffff", cursor: "none"} : {backgroundColor: "#7950f2", color: '#FFFFFF'}}
            onClick={ handlePrevious }

          >Prev</button>
          <button
            style={ step === 3 ? {backgroundColor: "#7950f299", color: "#ffffff", cursor: "none"} : {backgroundColor: "#7950f2", color: '#FFFFFF'}}
            onClick={handleNext}>
              Next </button>
        </div>
      </div> )}
    </>
  );
}

export default App
