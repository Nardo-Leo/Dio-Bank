
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import { LoginPage } from './Pages/LoginPage';
import { ChakraProvider } from '@chakra-ui/react';
import {ContaPage} from './Pages/ContaPage'
import { Layout } from './components/Layout';
import { ContaInfoPage } from './Pages/ContaInfoPage';
import { AppContext, AppContextProvider } from './components/AppContext';
import { MainRoutes } from './routes';
import { changeLocalStorage, createLocalStorage, getAllLocalStorage } from './services/storage';
import { useContext } from 'react';




function App() {

  const {isLoggedIn }= useContext(AppContext)
  
  console.log('Aqui o localStorage ' + getAllLocalStorage())
  console.log('Aqui o isLoggedIn ' + isLoggedIn )
  !getAllLocalStorage() && createLocalStorage()
  /*Se getAllLocalStorage retornar vazio ai chama-se a função createLocalStorage */
  
  
  return (
    <>
      <BrowserRouter>
        
        <AppContextProvider>

          <ChakraProvider>
            <Layout>

            <MainRoutes/>

            </Layout>
          </ChakraProvider>

        </AppContextProvider>
        
      </BrowserRouter>

    </>
  );
}

export default App;
