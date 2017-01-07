import React from "react";
import ReactDOM from 'react-dom';
import { Link } from "react-router"
import ProductsWatchPage2 from "../Data/ProductsWatchPage2.js";



let CatalogWatchPage2 = React.createClass({
    contextTypes: {
        router: React.PropTypes.object.isRequired
    },

    getInitialState() {
        return {
      ProductsWatchPage2 
            
        };
    },

    handlePreviewClick(productId) {
        this.context.router.push(`/watch-page2/products/${productId}`);
    },

    render() {
        let {  ProductsWatchPage2 } = this.state;
        return (
            <div >
                <div className="TitleImage">
                    <img src="/image/catalog/watch/watch-title.png" />
                </div>
                <div >
                    {
                        ProductsWatchPage2.map(product =>
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
                    <ul className="pages">
                        Страница
                        <li><Link to="/watch-page1">1</Link></li>
                        <li><Link to="/watch-page2">2</Link></li>
                        <li><Link to="/watch-page3">3</Link></li>
                        <li><Link to="/watch-page4">4</Link></li>
                        <li><Link to="/watch-page5">5</Link></li>
                    </ul>
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

export default CatalogWatchPage2 ;