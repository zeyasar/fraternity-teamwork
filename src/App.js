import './App.css';
import ProductContextProvider from './context/ProductContext';
import AppRouter from './router/AppRouter'


function App() {
  return (
    <div className="App">
      <ProductContextProvider>
        <AppRouter/>
      </ProductContextProvider>
      
    </div>
  );
}

export default App;

