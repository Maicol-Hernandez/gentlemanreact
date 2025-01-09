import './App.css'
import { Button, ColorRed } from './components'

function App() {

  const handleClick = () => {
    console.log('uy me clickio todo :>> ');
  }

  const handleGreet = () => {
    alert('Hello!');
  };

  return (
    <>
      <ColorRed><Button perentMethod={handleGreet}>My Button/Red</Button></ColorRed>
      <Button perentMethod={handleClick}>My Button/Normal</Button>
    </>
  )
}

export default App
