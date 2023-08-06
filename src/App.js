import './index.css';
import Card from "./components/Card";
import Calculator from "./components/Calculator";

function App() {

  return (

    <div className="app">
      <Card className='Card'>
        <div className='containor'>
          <h2 className='center' >BMI Calculator</h2>
          <Calculator />
        </div>
      </Card>

    </div>



  );
}


export default App;
