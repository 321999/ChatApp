import logo from './logo.svg';
import './App.css';
import { ChakraProvider } from '@chakra-ui/react'
import { Button, ButtonGroup } from '@chakra-ui/react'
import { Route } from 'react-router-dom/cjs/react-router-dom.min';
import Homepage from "./pages/homepage";
function App() {
  return (
    <div className="App">

      <Route path="/k" component={Homepage} />
    </div>
  );
}

export default App;
