import { useState } from 'react';
import './App.css'

function App() {
  const [loanAmount, setLoanAmount]=useState("");
  const [interestRate, setInterestRate]=useState("");
  const [loanTerm, setLoanTerm]=useState("");
  const [error, setError]=useState("");
  const [results, setResult]=useState({
    monthlyPayment:null,
    totalPayment:null,
    totalInterest:null,
  });

  const calculateMortagage=(e)=>{
    e.preventDefault();
    setError("");

    //validateInput
    const principal=parseFloat(loanAmount);
    const annualRate=parseFloat(interestRate);
    const years=parseFloat(loanTerm);

    if(isNaN(principal) || isNaN(annualRate) || isNaN(years) || principal<=0 ||years<=0 || annualRate<=0){
      setError("Please enter valid Positive number for all fields");
      return;
    }

    const monthlyRate=annualRate/100/12; //convert annual rate to  monthly
    const totalPayments=years*12;//total number of payments

    const monthlyPayment=
    (principal*monthlyRate* Math.pow(1+monthlyRate, totalPayments))/
    (Math.pow(1+monthlyRate, totalPayments)-1);

    const totalPayment=monthlyPayment*totalPayments;
    const totalInterest=totalPayment-principal;

    setResult({
      monthlyPayment:monthlyPayment.toFixed(2),
      totalPayment:totalPayment.toFixed(2),
      totalInterest:totalInterest.toFixed(2),
    });
  };

  return (
    <div style={{maxWidth:"400px", margin:"0 auto", padding:"20px"}}>
      <h2>Mortgage Caluclator</h2>
      <form onSubmit={calculateMortagage}>
        <div>
          <label>Loan Amount ($): </label>
          <input
          type='text'
          value={loanAmount}
          onChange={(e)=>setLoanAmount(e.target.value)}
          />
        </div>
        <div>
          <label>Annual Interest Rate (%): </label>
          <input
          type='text'
          value={interestRate}
          onChange={(e)=>setInterestRate(e.target.value)}
          />
        </div>
        <div>
            <label>Loan Term (Years): </label>
            <input
            type='text'
            value={loanTerm}
            onChange={(e)=>setLoanTerm(e.target.value)}
            />
        </div>
        <button type="submit">Calculate</button>
      </form>
      {error && <p style={{color:"red"}}>{error}</p>}
      {results.monthlyPayment && (
        <div style={{marginTop:"20px"}}>
        <h3>Results</h3>
        <p>Monthly Payment: ${results.monthlyPayment}</p>
        <p>Total Payment: ${results.totalPayment}</p>
        <p>Total Interest: ${results.totalInterest}</p>
        </div>
      )}
    </div>
  );
}

export default App
