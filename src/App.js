import logo from './logo.svg';
import './App.css';
import { ChakraProvider } from '@chakra-ui/react'
import { Main } from './pages/main';
import { Register } from './pages/register';
import { Home } from './pages/home';
function App() {
  return (
    <div>
    <ChakraProvider>
      <Home />
    </ChakraProvider>
    </div>
  );
}

export default App;
