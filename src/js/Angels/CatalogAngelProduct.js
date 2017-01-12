import React from "react";
import ReactDOM from 'react-dom';
import { Link, hashHistory } from 'react-router';
import ProductsAngelPage1 from "../Data/ProductsAngelPage1.js";
var Carousel = require('react-responsive-carousel').Carousel;



let ProductAngel = React.createClass({
    
    getInitialState() {
        let { productId } = this.props.params;

        return {
            product: ProductsAngelPage1.find(product => product.id === productId)
        };
    },


	render() {
        let { product } = this.state;

        function openClick(e) {
            e.preventDefault();
            document.getElementById("b-popup").style="display:table"
  }

            function closeClick(e) {
            e.preventDefault();
            document.getElementById("b-popup").style="display:none"
  }




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
                

               <div className="b-container">
	                <div className="Download">
                        <img  src="../image/button-donwload.png" onClick={openClick} />
                    </div>
              </div>

              <div id="b-popup">
                <div className="b-popup-content">
                
                                <img src="../image/form-close.png" onClick={closeClick} />
                
                                <form id="myform" method="post">
                                <p className="myform-title">Заказать / Уточнить детали</p>
                                

                                 <div>
                                    <input className="myform-id" type="text" name="id"  readonly  value={product.id}/> <br />

                                     <label>Название:</label>
                                    <input type="text" name="product" readonly value={product.name}/> <br />
                                    
                                    <label>Ваше имя:</label>
                                    <input type="text" name="name" required /> <br />

                                    <label>Ваш e-mail:</label>
                                    <input type="email" name="email" required /> <br />

                                
                                    <label>Кол-во</label>
                                    <input type="number" name="quantity" required /> <br />

                                     <label>Доп. информация:</label>
                                    <input type="text" id="info" name="info" required /> 
                                      
                                    

                                 </div>  
                                 
                                    <button>Отправить</button>
                                </form>
                               


        

                                
                </div>
             
             </div>




                </div>
            </div>
                
               
        );
    }
});




export  default ProductAngel;

