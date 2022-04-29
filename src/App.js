import './App.css';
import AuthContextProvider from './context/AuthContext';
import ProductContextProvider from './context/ProductContext';
import AppRouter from './router/AppRouter'

function App() {
  return (
    <div className="App">
      <AuthContextProvider>
      <ProductContextProvider>
        <AppRouter/>
      </ProductContextProvider>
      </AuthContextProvider>

      
    </div>
  );
}

export default App;

