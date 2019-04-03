import React, { Component } from 'react';
import ProductDetails from './ProductDetails';


export default class ProductList extends Component{
    constructor(props){
super(props);
this.state={
    products:[
        {id:1,productName:'Jeans',image:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSL8Sa4SCVGP_6H3rnY4JuuXgH-EZD801S-NN607TVe6MWsqw9v',description:'Best jeans for girls.Give a modern Stylish look',quantity:'2',price:'1000'},
        {id:2,productName:'Cars',image:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSr3NDq4N_Moc_CfnK-2cLdh76DZNgfAbziW2-oSLo-s_QhmOz8lw',description:'One of the best cars that is available in the market.Low price and runs on electricity and causes no pollution.So good for environment',quantity:'5',price:'500000'},
        {id:3,productName:'Pen',image:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTn5EJrDnGEzNuMvEafO31kIrJbgW1cYb-tdO_pyQBBxOGSEgqb',description:'One of the best pens',quantity:'7',price:'500'},
        {id:4,productName:'Shoes',image:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRgRRWg87NFfnw3UZpu2bYHGe_lWMUeWTMta-1erSFj8S-0Zmf9Uw',description:'Best running Shoes in the market.Longer lasting.',quantity:'4',price:'50000'},
        {id:5,productName:'Sarees',image:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT-MkmKHR5NBbdzy8s10s5Av3ytUdgTcUpQPlxEx8RcVdx8qZmCoQ',description:'Best sarees in the market.Choose any colour and design',quantity:'4',price:'50000'},
        {id:6,productName:'Watches',image:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQy-gm1pqe8UjYavQRrScZ0xcXFYcRQkhKoagSc3pvEJf4eFxTs0Q',description:'Best in Design and Water Resistance',quantity:'4',price:'50000'}
    ]
};
    }
    render(){
        
            let listOfProductsDisplayed='';
            if(this.props.search==''){
                listOfProductsDisplayed=this.state.products.map((product,index)=>{
                    return <ProductDetails key={index} details={product}/>
                })
            }
            else{
                let filterProducts=this.state.products.filter((product,index)=>{
                    return product.productName.includes(this.props.search)
                });
                listOfProductsDisplayed=filterProducts.map((product,index)=>{
                    return <ProductDetails key={index} details={product}/>
                })
            }
          return(
              <div>{listOfProductsDisplayed}</div>
          )
    }
}