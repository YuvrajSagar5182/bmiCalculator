import { useState } from "react";

import './Calculator.css';
import Selector from "./Selector";

const units = ["US UNITS", "METRIC UNITS"]

function Calculator() {
  const [weight, setWeight] = useState();
  const [height, setHeight] = useState();
  const [bmi, setBMI] = useState(0);
  const [message, setMessage] = useState('Enter Height and Weight Values to Get your BMI 😊');
  const [unit, setUnit] = useState(units[1]);

  const SI_UnitsBMI = (weightinKGs, heightInCMs) => {
    let bmi = (((weightinKGs) / (heightInCMs * heightInCMs)) * 10000).toFixed(2);
    setBMI(bmi);
    return bmi
  }
  const US_UnitsBMI = (weightinLBs, heightInINs) => {
    let bmi = (((weightinLBs) / (heightInINs * heightInINs)) * 703).toFixed(2);
    setBMI(bmi);
    return bmi
  }

  const messageUpdate = (BMI) => {
    if (BMI < 18) {
      setMessage(`You BMI states that you are UNDERWEIGHT 😥`)
    } else if (BMI >= 18 && BMI < 18.4) {
      setMessage('You BMI states that, You are THIN 👽')
    } else if (BMI >= 18.5 && BMI < 24.9) {
      setMessage('You BMI states that, You have a HEALTHY WEIGHT 😉.')
    } else if (BMI >= 25 && BMI < 29.5) {
      setMessage('You BMI states that, You are a slightly OVERWEIGHT 🙄.')
    } else if (BMI >= 19.5) {
      setMessage('You BMI states that, You are OBESE 😲')
    } 
  }
  const calcBmi = (event) => {
    let BMI;
    //prevent submitting
    event.preventDefault()

    if (!weight || !height) {
      setBMI(0)
      return alert('Please enter a valid weight and height')
    } 

    if (unit === units[0]){
      //Our US Units wala Code
      BMI = US_UnitsBMI(weight, height)
    } else if (unit === units[1]){
      BMI = SI_UnitsBMI(weight, height);
    }


    console.log('Your BMI is ', BMI);
    messageUpdate(BMI);
    //Two Way Binding...
    setWeight('');
    setHeight(''); 
  }

  const WeightUpdate = (e) => {
    setWeight(e.target.value)
  }

  const HeightUpdate = (e) => {
    setHeight(e.target.value)
  }

  return (
    <div>
      <Selector selectUnit={setUnit}></Selector>
      <form onSubmit={calcBmi}>
        <div className="input">
          <label> Weight {unit==="METRIC UNITS" ? '(KGs)' : '(LBs)' }</label>
          <input type="number" value={weight} onChange={WeightUpdate}  ></input>
        </div>
        <div className="input">
          <label> Height {unit==="METRIC UNITS" ? '(cm)' : '(in)' }</label>
          <input type='number' value={height} onChange={HeightUpdate}  />
        </div>
        <div>
          <button className='btn' type='Submit'>Submit</button>

        </div>
      </form>
      <div className='center'>
        {bmi ? 
        <h3>Your BMI is: <span id='span'>{bmi}</span> </h3> : ''
        }
        <p className="paragraph" >{message}</p>
      </div>
    </div>
  )
}

export default Calculator;