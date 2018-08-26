import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import FoodBox from './components/FoodBox';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {foods: props.foods, value: ''};

    this.handleChange = this.handleChange.bind(this);
  }

  handleClick = (foodChild, quantity, isAdd) => {
    //console.log(foodChild)
    const copyFoods = this.state.foods;
    
    copyFoods.forEach((food) =>{
      if(foodChild === food)
      {
        if(isAdd)
        {
          food.quantity += parseInt(quantity);
        }
        else
        {
          food.quantity -= parseInt(quantity);
        }
      }
    })
    
    this.setState({ foods: copyFoods});
    //console.log(index);
  }

  handleChange(event) {
    
    this.setState({
      value: event.target.value
    });

    console.log("value state:" + this.state.value);
    console.log("value event:" + event.target.value);

    // if(event.target.value !== '')
    // {
      console.log('entro');

      var copyFoods = this.state.foods;

      copyFoods.forEach((food) =>{

        if(food.name.toLocaleLowerCase().indexOf(event.target.value.toLocaleLowerCase()) >= 0)
        {
          food.show = true;
        }
        else
        {
          food.show = false;
        }
      });

      this.setState({
        foods: copyFoods
      });
    //}
  }

  render() {
    let copyFoods = this.state.foods.filter((food) => food.show);
    let copyFoodsTotal = this.state.foods;
    
    const listItems = copyFoodsTotal.map((item, index) => {
      if(item.quantity > 0)
      {
        return <li key={index}>{item.quantity} {item.name} = {item.calories} cal</li>
      }
    });

    let totalCalories = copyFoodsTotal.reduce((sum, food) => {
      return sum + (parseInt(food.quantity) * parseInt(food.calories));
    },0);

    return (
      <div className="App">

        <form>

          <div className="field">
            <div className="control">
              <input className="input is-success" type="text" 
                     placeholder="Search" value={this.state.value} 
                     onChange={this.handleChange} />
            </div>
          </div>

        </form>

        <div className="columns">
          <div className="column">
            {copyFoods.map((element, index) =>{
              return  <FoodBox food={element} handleClick={this.handleClick} key={index} />
            })}
          </div>
          <div className ="column">
            <h1 className="title">Today's foods</h1>
            <ul>{listItems}</ul>
            <h1 className="subtitle">Total: {totalCalories} cal</h1>
          </div>
        </div>
        
      </div>
    );
  }
}

export default App;
