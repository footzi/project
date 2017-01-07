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


                                <form id="myform" method="post">

                                <label>ID заказа</label>
                                    <input type="text" name="id" readonly  value={product.id}/> <br />

                                     <label>Название изделия:</label>
                                    <input type="text" name="product" readonly value={product.name}/> <br />
                                    
                                    <label>Введите e-mail</label>
                                    <input type="text" name="email" required /> <br />

                                
                                    <label>Ваше Имя</label>
                                    <input type="text" name="name" required /> <br />

                                    <label>Ваша Фамилия</label>
                                    <input type="text" name="surname" required /> <br />

                                    

                                    <button className="button-popup">Отправить</button>
                                </form>

                                <button className="button-popup" onClick={closeClick}> Закрыть </button>
                </div>
             
             </div>




                </div>
            </div>
                
               
        );
    }
});




export  default ProductAngel;

