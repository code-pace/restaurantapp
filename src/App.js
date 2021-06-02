import './App.css';
import React, {useState, useEffect} from "react";
import Header from './components/Header';
import MealBody from './components/MealBody';
import FoodMenu from "./components/FoodMenu";
import Checkout from "./components/Checkout";
import {BrowserRouter as Router, Route, Switch, Link} from "react-router-dom";
const allCategories = ["All",...new Set(FoodMenu.map(foodlist => foodlist.category))];
console.log(allCategories)

function App() {
  const [food, setFood] = useState(FoodMenu);
  const [filterFood, setFilterFood] = useState(allCategories);
  const [order, setOrder] = useState([]);
  const [done, setDone] = useState(false);
  const setToTrue = () => {
    setDone(true);
  }
  const ordered =()=> {
    setToTrue();
  }
  useEffect(()=>{
    setTimeout(()=>{
      setDone(false);
    }, 5000);
  },[done]);
  const makeOrder = (name) => {
    const orders = food.filter(list => list.name === name);
    setOrder([...order,...orders]);
  }
  const checkOut =()=> {

  }
  const changeBtn = (btns) => {
    if(btns === "All") {
      setFood(FoodMenu)
    }
    else {
      const newFilter = FoodMenu.filter(list => list.category === btns);
      setFood(newFilter);}
  }
  return (
    <Router>
      <Switch>
        <Route exact path="/">
        <div className="App">
          <Header food={food} setFood={setFood} filterFood={filterFood} changeBtn={changeBtn} order={order} checkOut={checkOut} Link={Link}/>
          <MealBody food={food} makeOrder={makeOrder}/>
        </div>
        </Route>
        <Route exact path="/Checkout">
          <Checkout order={order} Link={Link} setOrder={setOrder} ordered={ordered} done={done}/>
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
