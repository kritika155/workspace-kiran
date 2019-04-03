import React, { Component } from 'react';
import './Header.css'
export default class Header extends Component 
{
    constructor(props){
        super(props);

    }
    render(){
        return(<div>
            <div className="container-fluid">
            <div className="row header">
            <div className="col-md-8">
<h1>Welcome to Shopping</h1></div>
<div className="col-md-4">

                <button >Items in cart:{this.props.count}</button>
                </div>
                </div>
            </div>
            </div>
        )
    }
}