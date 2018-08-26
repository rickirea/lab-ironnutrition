import React, {Component} from 'react';

class FoodBox extends Component
{
  constructor(props) {
    super(props);
    this.state = {value: 0}
  }

  addFood = () => {
    //console.log("remove: " + contact.name);
    this.props.handleClick(this.props.food, this.state.value,true);
    this.setState({
      value:0
    });
  }

  lessFood = () => {
    //console.log("remove: " + contact.name);
    this.props.handleClick(this.props.food, this.state.value,false);
    this.setState({
      value:0
    });
  }

  handleInput = (event) =>{
    //console.log("changed: " + event.target.value);
    this.setState({ value: event.target.value});
  }

  render (){

  return(
    <div className="box">
      <article className="media">
        <div className="media-left">
          <figure className="image is-64x64">
            <img src={this.props.food.image} />
          </figure>
        </div>
        <div className="media-content">
          <div className="content">
            <p>
              <strong>{this.props.food.name}</strong> <br />
              <small>{this.props.food.calories} cal</small> <br />
              <small>Qty: {this.props.food.quantity}</small>
            </p>
          </div>
        </div>
        <div className="media-right">
          <div className="field has-addons">
            <div className="control">
              <input
                onChange={this.handleInput}
                className="input"
                type="number" 
                min="0"
                value={this.state.value}
              />
            </div>
            <div className="control">
              <button className="button is-info" onClick={this.addFood} >
                +
              </button>
            </div>
            &nbsp;
            <div className="control">
              <button className="button is-info" onClick={this.lessFood} >
                --
              </button>
            </div>
          </div>
        </div>
      </article>
    </div>
  );
}
}

export default FoodBox;