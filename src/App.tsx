
import { BrowserRouter } from 'react-router-dom';
import './App.css';

import { ChakraProvider } from '@chakra-ui/react';

import { Layout } from './components/Layout';

import { AppContext, AppContextProvider } from './components/AppContext';
import { MainRoutes } from './routes';
import { createLocalStorage, getAllLocalStorage } from './services/storage';
import { useContext } from 'react';




function App() {

  const { isLoggedIn } = useContext(AppContext)

  console.log('Aqui o localStorage ' + getAllLocalStorage())
  console.log('Aqui o isLoggedIn ' + isLoggedIn)
  !getAllLocalStorage() && createLocalStorage()
  /*Se getAllLocalStorage retornar vazio ai chama-se a função createLocalStorage */


  return (
    <>
      <BrowserRouter>

        <AppContextProvider>

          <ChakraProvider>
            <Layout>

              <MainRoutes />

            </Layout>
          </ChakraProvider>

        </AppContextProvider>

      </BrowserRouter>

    </>
  );
}

export default App;
