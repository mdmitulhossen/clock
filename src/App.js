import './App.css';
import Calculate from './component/boil calculator/Calculate';
import Clock from './component/date/Clock';
import Fff from './component/Fff';
import Form from './component/form/Form';


function App() {
    return (
        <div> 
            
            <Clock></Clock>
            <br />
            <Form></Form>
            <br />
            <Fff></Fff>
            <br />
            <br />
            <Calculate></Calculate>


        </div>
        
    );
}

export default App;