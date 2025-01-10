import './App.css'
import { Button, ColorRed } from './components'
import { GlobalProvider } from './context/global.provider';

function App() {

  const handleClick = () => {
    console.log('uy me clickio todo :>> ');
  }

  const handleGreet = () => {
    alert('Hello!');
  };

  return (
    <GlobalProvider>
      <ColorRed><Button perentMethod={handleGreet}>My Button/Red</Button></ColorRed>
      <Button perentMethod={handleClick}>My Button/Normal</Button>
    </GlobalProvider>
  )
}

export default App
