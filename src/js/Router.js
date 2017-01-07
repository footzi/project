import React from "react"; 
import ReactDOM from 'react-dom';
import { Link } from 'react-router';


let CatalogApp = React.createClass ({
    render () {
        return (
            <div className="CatalogApp">
               <div className="column-left">
                  <img src="../image/catalog/title1.png" />
                  <Link to="/angel"> <img className="CatalogApp-item" src="../image/catalog/1.png" /></Link>
                  <img className="CatalogApp-item" src="../image/catalog/3.png" />
                  <Link to="/watch-page1"><img className="CatalogApp-item" src="../image/catalog/5.png" /></Link>
               </div>
               <div className="column-right">
                   <img src="../image/catalog/title2.png" />
                   <img className="CatalogApp-item" src="../image/catalog/2.png" />
                   <img className="CatalogApp-item" src="../image/catalog/4.png" />
                   <img className="CatalogApp-item" src="../image/catalog/6.png" />
               </div>
            
            </div>
        )
    }
})



export default CatalogApp;