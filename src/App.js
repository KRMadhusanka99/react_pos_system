import './App.css';
import FoodTileContainer from './components/FoodTypeTile/FoodTileContainer';
import ItemTileContainer from './components/ItemTittle/ItemTileContainer';
import UpperNavBar from './components/NavBar/UpperNavBar';
import RecentOrdersContainer from './components/RecentOrders/RecentOrderContainer';

function App() {
  return (
    <div className="App">
      <UpperNavBar />
        <FoodTileContainer />
        <ItemTileContainer />
      <RecentOrdersContainer />
    </div>
  );
}

export default App;
