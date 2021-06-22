import { BrowserRouter, Route } from 'react-router-dom';
import { createContext, useState } from 'react';
import { Home } from './pages/Home';
import { NewRoom } from './pages/NewRoom';

export const TestContext = createContext({} as any); 

function App() {
  const [value, setValue] = useState('Test')
  return (
    <BrowserRouter>
      <TestContext.Provider value={{value, setValue}}>
        <Route path="/" exact component={Home} />
        <Route path="/rooms/new" component={NewRoom} />
      </TestContext.Provider>
    </BrowserRouter>
  );
}

export default App;
