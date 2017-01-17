import React from "react"; 
import ReactDOM from 'react-dom';
import CatalogApp from "./Router.js";
import CatalogAngel from "./Angels//CatalogAngel.js";
import ProductAngel from "./Angels/CatalogAngelProduct.js"; 

import CatalogWatchPage1 from "./Watch/CatalogWatchPage1.js";
import ProductWatchPage1   from "./Watch/CatalogWatchProductPage1.js"    
import CatalogWatchPage2 from "./Watch/CatalogWatchPage2.js";
import ProductWatchPage2  from "./Watch/CatalogWatchProductPage2.js" 
import CatalogWatchPage3 from "./Watch/CatalogWatchPage3.js";
import ProductWatchPage3  from "./Watch/CatalogWatchProductPage3.js" 
import CatalogWatchPage4 from "./Watch/CatalogWatchPage4.js";
import ProductWatchPage4  from "./Watch/CatalogWatchProductPage4.js" 
import CatalogWatchPage5 from "./Watch/CatalogWatchPage5.js";
import ProductWatchPage5  from "./Watch/CatalogWatchProductPage5.js" 


import "./Carousel.js";  
import "./HashChange.js";
import "./PopUpNotAviable.js";


import { Router, Route, IndexRoute, hashHistory } from 'react-router';

ReactDOM.render (

    <Router history={hashHistory}>
       <Route path="/" component={CatalogApp} />
       <Route path="/angel" component={CatalogAngel} />
       <Route path='/angel/products/:productId' component={ProductAngel} />

       
       <Route path="/watch-page1" component={CatalogWatchPage1} />
       <Route path='/watch-page1/products/:productId' component={ProductWatchPage1} />

       <Route path="/watch-page2" component={CatalogWatchPage2} />
       <Route path='/watch-page2/products/:productId' component={ProductWatchPage2} />

       <Route path="/watch-page3" component={CatalogWatchPage3} />
       <Route path='/watch-page3/products/:productId' component={ProductWatchPage3} />

       <Route path="/watch-page4" component={CatalogWatchPage4} />
       <Route path='/watch-page4/products/:productId' component={ProductWatchPage4} />

       <Route path="/watch-page5" component={CatalogWatchPage5} />
       <Route path='/watch-page5/products/:productId' component={ProductWatchPage5} />


    </Router>,
    document.getElementById("content")
)