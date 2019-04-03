import React, { Component } from 'react';
import { generateKeyPair } from 'crypto';

export default class ProductDetails extends Component{
    constructor(props){
        super(props);
    }
    render(){
        return(
            <div className="List" >
           <h1 > {this.props.details.productName}</h1><br/>
           <ul >
            <li ><img src={this.props.details.image}></img></li><br/>
<li  ><span>Description:</span>{this.props.details.description}</li><br/>
<li ><span >Quantity in Stock:</span>{this.props.details.quantity}</li><br/>
<li ><span >Rs.</span>{this.props.details.price}</li>
</ul>
<button onClick={() =>this.props.add()}>Add to Cart</button>
<button onClick={() =>this.props.remove()}>Remove from Cart</button>

            </div>
        )
    }
}