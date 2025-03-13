import React, { useState } from "react";

function App() {
  const [a, setA] = useState("");
  const [b, setB] = useState("");
  const [result, setResult] = useState("");

  const onA = (event) => {
    setA(event.target.value);
  };

  const onB = (event) => {
    setB(event.target.value);
  };

  const computeSum = () => {
    const numA = parseFloat(a);
    const numB = parseFloat(b);

    if (isNaN(numA) || isNaN(numB)) {
      setResult("Error: Invalid input");
    } else {
      setResult(numA + numB);
    }
  };
                             
  return (
    <main>
      <h1>Calculator</h1>

      <label>A =</label>
      <input onKeyUp={onA} />

      <label>B =</label>
      <input onKeyUp={onB} />

      <label>A + B =</label>

      {/* When Compute button is clicked, this input displays the sum of the 2 numbers, or the error message in RED */}
      <input value={result} disabled style={{ color: isNaN(result) ? "red" : "black" }} />
      <button onClick={computeSum}>Compute</button>
    </main>
  );
}

export default App;