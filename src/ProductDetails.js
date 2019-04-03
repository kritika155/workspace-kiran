import React, { Component } from 'react';
import { generateKeyPair } from 'crypto';

export default class ProductDetails extends Component{
    constructor(props){
        super(props);
    }
    render(){
        return(
            <div className="List" style={{listStyle:'none'}}>
           <h1 style={{textAlign:'center'}}> {this.props.details.productName}</h1><br/>
           <ul style={{display:'inline'}}>
            <li  style={{listStyleType: "none"}}><img src={this.props.details.image}></img></li><br/>
<li  style={{listStyleType: "none",fontSize:15}}><span style={{color:'red',fontSize:20}}>Description:</span>{this.props.details.description}</li><br/>
<li  style={{listStyleType: "none",fontSize:15}}><span style={{color:'red',fontSize:20}}>Quantity in Stock:</span>{this.props.details.quantity}</li><br/>
<li  style={{listStyleType: "none",fontSize:15}}><span style={{color:'red',fontSize:20}}>Rs.</span>{this.props.details.price}</li>
</ul>
<button onClick={(e) =>this.props. addToCart(e)} style={{textAlign:'center',backgroundColor:'blue'}}>Add to Cart</button>
            </div>
        )
    }
}