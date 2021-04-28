import logo from './logo.svg';
import './App.css';
import HelloCGU from './cguhello'
import MultiButton from './multibutton'


function App() {
  return (

    <div className="App" >
      <div>
        {HelloCGU()}
      </div>
      <div>
        {MultiButton(10)}
      </div >
    </div>
  );
}


export default App;
