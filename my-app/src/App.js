import ShopList from './components/ShopList';
import ShopContextProvider from './contexts/ShopContext';

function App() {
  return (
    <div className="container-xl">
      <div className="table-responsive">
        <div className="table-wrapper">
          <ShopContextProvider >
          <ShopList />
          </ShopContextProvider>
        </div>
      </div>
    </div>
  );
}

export default App;
