import logo from './logo.svg';
import './App.css';
import HelloCGU from './cguhello'
import MultiButton from './multibutton'
import Button from '@material-ui/core/Button'
import TextField1 from '@material-ui/core/TextField'
function App() {

  return (
    <div>
      <TextField1 placeholder="請輸入帳號"></TextField1>
      <p></p>
      <TextField1 type="password" placeholder="請輸入密碼"></TextField1>
      <p></p>
      <Button variant="contained" co color="secondary" type="button">登入</Button>
    </div>
  );
}


export default App;
