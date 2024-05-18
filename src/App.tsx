import { useState } from "react";
import ButtonWhite from "./components/ButtonWhite";

function App() {
  const [count, setCount] = useState(0);
  const [step, setStep] = useState(1);

  function handleCountAdd() {
    setCount((c) => c + step);
  }
  function handleCountSub() {
    setCount((c) => c - step);
  }

  function getDate(days: number) {
    const currentDate = new Date();
    currentDate.setDate(currentDate.getDate() + days);
    return currentDate.toLocaleDateString("en-US", {
      weekday: "long",
      year: "numeric",
      month: "long",
      day: "numeric",
    });
  }

  function setDateMessage() {
    if (count == 0) {
      return `today is`;
    } else if (count > 0) {
      return `${count} days from now is`;
    } else {
      return `${Math.abs(count)} days ago was`;
    }
  }

  function handleReset() {
    setCount(0);
    setStep(1);
  }

  return (
    <>
      <div className="flex justify-center items-center h-screen">
        <div className="h-[50%] w-[70%] max-h-[300px] max-w-[600px] bg-neutral-700 rounded-md p-2 overflow-auto">
          <header className="text-center font-bold text-lg text-white underline mb-2">
            Date counter
          </header>
          <div className="flex justify-center items-center space-x-4">
            <label htmlFor="step-count" className="text-white">
              Step
            </label>
            <input
              title="step-count"
              id="step-count"
              type="range"
              className="my-2"
              min={1}
              max={20}
              value={step}
              onChange={(e) => setStep(Number(e.target.value))}
            />
            <span className="text-white">{step}</span>
          </div>
          <div className="flex justify-center items-center space-x-4">
            <ButtonWhite onClick={handleCountSub} text="-"></ButtonWhite>
            <input
              title="count-value"
              type="text"
              className=" px-2 my-2"
              value={count}
              onChange={(e) => setCount(Number(e.target.value))}
            />
            <ButtonWhite onClick={handleCountAdd} text="+"></ButtonWhite>
          </div>
          <div className="text-center text-white my-2">
            {setDateMessage()}
            <p>{getDate(count)}</p>
          </div>
          {(count != 0 || step != 1) && (
            <div className="flex justify-center">
              <button
                type="button"
                className="text-center w-[200px]  my-2  transition text-white bg-red-500 hover:bg-red-400"
                onClick={handleReset}
              >
                Reset
              </button>
            </div>
          )}
        </div>
      </div>
    </>
  );
}

export default App;
