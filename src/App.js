import React, { Component } from 'react';
import Heading from './heading';
import ProductList from './ProductList';
import Search from './Search';
import Header from './Header';

export default class App extends Component {
  constructor(props){
    super(props);
    this.state={
      counter:0,
      searchQuery:''
  };
  this.handleSearchClick=this.handleSearchClick.bind(this);
this.handleChange=this.handleChange.bind(this);
this.addtocart=this.addtocart.bind(this);
this.removecart=this.removecart.bind(this);

  }
  addtocart(data){
    console.log(data);
    let currentState=this.state;
    currentState.counter++;
    this.setState(currentState);
  }
  removecart(data){
    console.log(data);
    let currentState=this.state;
    if(currentState.counter==0){
      this.setState(currentState);
    }
    else{
    currentState.counter--;
    this.setState(currentState);
  }
  }
  handleSearchClick(data){
    console.log(data);
    let currentState=this.state;
    currentState.counter++;
    this.setState(currentState);
  }
  handleChange(data){
    console.log(data);
    let currentState=this.state;
    currentState.searchQuery=data;
    this.setState(currentState);
  }
  render() {
    return (
      <div className="container">
      {/* <h1>{this.state.counter}</h1> */}
      <Header count={this.state.counter}/>
      
    <Search searchText={this.handleChange} search={this.handleSearchClick}/>
    {/* <label className="badge">Items in Cart:{this.state.counter}</label> */}
    <ProductList search={this.state.searchQuery}
    add={this.addtocart}
    remove={this.removecart}/>
    
     </div>
    );
  }
}


