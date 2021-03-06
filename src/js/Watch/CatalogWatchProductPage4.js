import React from "react";
import ReactDOM from 'react-dom';
import { Link, hashHistory } from 'react-router';

import ProductsWatchPage4 from "../Data/ProductsWatchPage4.js";
var Carousel = require('react-responsive-carousel').Carousel;



let ProductWatchPage4= React.createClass({
    
    getInitialState() {
        let { productId } = this.props.params;

        return {
            product: ProductsWatchPage4.find(product => product.id === productId)
        };
    },


	render() {
        let { product } = this.state;


        return (
            <div>
                <div className="NameProduct">
                        {product.name}
                </div>
                
                <div className="ProductImages">
                <Carousel>
                        <div>
                            <img src={product.image1} />
                            <p className="legend">{product.name}</p>
                        </div>
                        <div>
                            <img src={product.image2} />
                            <p className="legend">{product.name}</p>
                        </div>
                        <div>
                            <img src={product.image3} />
                            <p className="legend">{product.name}</p>
                        </div>
                        <div>
                            <img src={product.image4} />
                            <p className="legend">{product.name}</p>
                        </div>
                        <div>
                            <img src={product.image5} />
                            <p className="legend">{product.name}</p>
                        </div>
                        
                </Carousel>

                <div className="ProductText">
                    {product.text}
                </div>

                <div className="Download">
                    <img src="../image/button-donwload.png" />
                </div>
                    
                </div>
            </div>
                
               
        );
    }
});




export  default ProductWatchPage4;

