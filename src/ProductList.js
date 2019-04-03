import React, { Component } from 'react';
import ProductDetails from './ProductDetails';


export default class ProductList extends Component{
    constructor(props){
super(props);
this.state={
    products:[
        {
            "itemId":426185816,
            "parentItemId":426185816,
            "name":"Best Choice Products 6V Kids ,Horn - Pink",
            "msrp":186.99,
            "salePrice":119.99,
            "upc":"842957111008",
            "categoryPath":"Toys/Kids' Bikes & Riding Toys/Ride Ons/Ride On Toys",
            "shortDescription":"Adventure awaits your children with this ride-on truck! Let them cruise along with in-car steering while they jam out to their favorite tunes. Kids can drive freely on their own, but parents can step in with a remote control to make sure they stay out of danger for peace of mind. Built large and scaled small for your little one's biggest adventures.FEATURES:Realistic driving experience with foot pedal acceleration and steering wheelPowerful 6V motor with 2.5 mph max speed and 3 speed modesIncludes remote control with speed selection and parking modeBuilt-in AUX jack, headlights, horn, and easy start/stop buttonRechargeable battery with charger allows for hour of playtimeRecommended for ages: 2+ yearsDIMENSIONS:Overall Dimensions: 37.5&quot;(L) x 24&quot;(W) x 19.5&quot;(H)Weight: 24 lbs.Weight Capacity: 44 lbs.SPECIFICATIONS:Material: Plastic, MetalMax Speed: 2.5 mphCharge Time: 8 - 12 hoursRun TIme: 1 - 2 hoursBattery Type: 6V 7AHCharger Type: DC 6V 700MAIncludes: Ride-on car, Remote control, ChargerAssembly required (with instructions)ASTM-certifiedBCP SKU: SKY4622",
            "longDescription":"Single child design with a realistic foot pedal accelerator, steering wheel, and a max speed of 2.5 mph that's perfect for children",
            "thumbnailImage":"https://i5.walmartimages.com/asr/164e191b-699f-47a8-94bf-ff5ba84196b8_1.ae5d714d508b8df2c8d041fc43280e0c.jpeg?odnHeight=100&odnWidth=100&odnBg=FFFFFF"
        },
        {
            "itemId":54987375,
            "parentItemId":54987375,
            "name":"Disney/Pixar Cars 3 Lightning McQueen 20-Inch Vehicle",
            "msrp":19.88,
            "salePrice":9.99,
            "upc":"887961437218",
            "categoryPath":"Toys/Remote Control & Play Vehicles/Play Vehicles",
            "shortDescription":"Disney/Pixar Cars fans get big action with this 20&quot; Lightning McQueen vehicle! The favorite leading character features iconic colors, race styling and comes ready for awesome push around play!",
            "longDescription":"Disney/Pixar Cars 3 Lightning McQueen 20-inch Vehicle",
            "thumbnailImage":"https://i5.walmartimages.com/asr/b2d1cedd-d595-492d-af13-f86c2e74717d_1.d57221fd05fb835f8d350d4ee95576a8.jpeg?odnHeight=100&odnWidth=100&odnBg=ffffff"
        },
        {
            "itemId":21984627,
            "parentItemId":21984627,
            "name":"Hot Wheels 9-Car Gift Pack Collection (Styles May Vary)",
            "msrp":11.99,
            "salePrice":9.47,
            "upc":"746775158767",
            "categoryPath":"Toys/Remote Control & Play Vehicles/Play Vehicles",
            "shortDescription":"Help expand your little one's toy collection with the Hot Wheels 9-Pack Cars set. Whether your boy is adding to his arsenal or just starting to build his own, this package features exclusive graphics and designs that will surely excite any fan. This Hot Wheels gift pack features an interesting mix of cars and trucks in a variety of colors. Each of the die-cast vehicles is 1:64 scale. Combine its contents with the other Hot Wheels merchandise and models for hours of fun. This item is suited for kids age three years and older. Makes a wonderful gift for any occasion.",
            "longDescription":"Hot Wheels 9-Car Gift Pack (Styles May Vary)",
            "thumbnailImage":"https://i5.walmartimages.com/asr/85384b98-5da2-48a8-9147-a3f59cb4a94d_1.7b8b27224a37320e92ea70dca2ee15ce.jpeg?odnHeight=100&odnWidth=100&odnBg=ffffff"
        }
        // {id:1,productName:'Jeans',image:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSL8Sa4SCVGP_6H3rnY4JuuXgH-EZD801S-NN607TVe6MWsqw9v',description:'Best jeans for girls.Give a modern Stylish look',quantity:'2',price:'1000'},
        // {id:2,productName:'Cars',image:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSr3NDq4N_Moc_CfnK-2cLdh76DZNgfAbziW2-oSLo-s_QhmOz8lw',description:'One of the best cars that is available in the market.Low price and runs on electricity and causes no pollution.So good for environment',quantity:'5',price:'500000'},
        // {id:3,productName:'Pen',image:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTn5EJrDnGEzNuMvEafO31kIrJbgW1cYb-tdO_pyQBBxOGSEgqb',description:'One of the best pens',quantity:'7',price:'500'},
        // {id:4,productName:'Shoes',image:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRgRRWg87NFfnw3UZpu2bYHGe_lWMUeWTMta-1erSFj8S-0Zmf9Uw',description:'Best running Shoes in the market.Longer lasting.',quantity:'4',price:'50000'},
        // {id:5,productName:'Sarees',image:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT-MkmKHR5NBbdzy8s10s5Av3ytUdgTcUpQPlxEx8RcVdx8qZmCoQ',description:'Best sarees in the market.Choose any colour and design',quantity:'4',price:'50000'},
        // {id:6,productName:'Watches',image:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQy-gm1pqe8UjYavQRrScZ0xcXFYcRQkhKoagSc3pvEJf4eFxTs0Q',description:'Best in Design and Water Resistance',quantity:'4',price:'50000'}
    ]
};
    }
    render(){
        
            let listOfProductsDisplayed='';
            if(this.props.search==''){
                listOfProductsDisplayed=this.state.products.map((product,index)=>{
                    return <ProductDetails key={index} details={product} add={this.props.add} remove={this.props.remove}/>
                })
            }
            else{
                let filterProducts=this.state.products.filter((product,index)=>{
                    return product.name.includes(this.props.search)
                });
                listOfProductsDisplayed=filterProducts.map((product,index)=>{
                    return <ProductDetails key={index} details={product} add={this.props.add} remove={this.props.remove}/>
                })
            }
          return(
              <div>{listOfProductsDisplayed}</div>
          )
    }
}