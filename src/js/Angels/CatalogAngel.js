import React from "react";
import ReactDOM from 'react-dom';
import { Link } from "react-router"
import ProductsAngelPage1 from "../data/ProductsAngelPage1.js";


let CatalogAngel = React.createClass({
    contextTypes: {
        router: React.PropTypes.object.isRequired
    },

    getInitialState() {
        return {
      ProductsAngelPage1 
            
        };
    },

    handlePreviewClick(productId) {
        this.context.router.push(`/angel/products/${productId}`);
    },

    render() {
        let {  ProductsAngelPage1 } = this.state;
        return (
            <div >
                <div className="TitleImage">
                    <img src="/image/catalog/angel/angel-title.png" />
                </div>
                <div >
                    {
                        ProductsAngelPage1.map(product =>
                            <ProductPreview
                                key={product.id}
                                onClick={this.handlePreviewClick.bind(null, product.id)}
                                imagePreview={product.imagePreview}
                                name={product.name}
                                text={product.text}
                            />
                        )
                    }
                </div>
				    <div>
					    <Link to ="/"><button>Back</button></Link>
	            	</div>

                <div >
                    {this.props.children}
                </div>
            </div>
        );
    }
});

let ProductPreview = React.createClass ({
	render () {
		let {name, text, imagePreview, onClick} = this.props;
		return (
		<div className="ProductPreview">
            <div>
                <img src={imagePreview} />
            </div>  
             
            <div className="NameProductPreview"onClick={onClick}>
                 <div className="TextNameProductPreview">{name}</div>
            </div>
            <div className="ButtonPreview" >
                <a onClick={onClick}> Подробнее/Заказать </a>
            </div>
            
		</div>
		)
	}
})



export default CatalogAngel ;