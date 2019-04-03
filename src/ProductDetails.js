import React, { Component } from 'react';
import { generateKeyPair } from 'crypto';

export default class ProductDetails extends Component{
    constructor(props){
        super(props);
    }
    render(){
        return(
            <div className="List" >
           <h1 > {this.props.details.name}</h1><br/>
          
            <img src={this.props.details.thumbnailImage}></img><br/>
<p ><span>Description:</span>{this.props.details.longDescription}</p><br/>
{/* <li ><span >Quantity in Stock:</span>{this.props.details.quantity}</li><br/>
<li ><span >Rs.</span>{this.props.details.price}</li> */}

<button onClick={() =>this.props.add()}>Add to Cart</button>
<button onClick={() =>this.props.remove()}>Remove from Cart</button>

            </div>
        )
    }
}