import React from "react";
import ReactDOM from 'react-dom';
import { Link } from 'react-router';


let Carousel = React.createClass ({
    render () {
        return (
         <div className="carousel-mat">
             <a className="carousel-item" href="#one!"><img src="image/Gallery/1.png" /></a>
             <a className="carousel-item" href="#two!"><img src="image/Gallery/2.png" /></a>
             <a className="carousel-item" href="#three!"><img src="image/Gallery/3.png" /></a>
             <a className="carousel-item" href="#four!"><img src="image/Gallery/4.png" /></a>
             <a className="carousel-item" href="#five!"><img src="image/Gallery/5.png" /></a>
         </div>
        )
    }
})

ReactDOM.render (
    <Carousel />,
    document.getElementById("frame-news")
)

$('.carousel-mat').carousel({
    padding:100
})
autoplay() 
function autoplay() {
    $(".carousel-mat").carousel("next");
    setTimeout(autoplay,5000);
}
      
      
      
   