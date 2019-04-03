import React, { Component } from 'react';


export default class Search extends Component {
    constructor(props){
      super(props);
     
    }
    render(){
      return(
        <div className="row">
         <input type="text"  id="usr" placeholder="search" onChange={(e)=>{this.props.searchText(e.target.value)}}></input>
         <button type="button" onClick={()=>{this.props.search("Hey I am clicked")}}>Search</button>
     </div>
      )
    }
}