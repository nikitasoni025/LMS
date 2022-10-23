import React from 'react';
import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
import "./suggestioncard.scss";

const Suggestioncard = (props) => {
    return (
        <div className='mycarousel'>
            <div className='carousel'>
                <h1>{props.heading}</h1>
                <div className='carouselwrapper'>
                    <OwlCarousel className='owl-theme' loop margin={10} nav animateOut animateIn mouseDrag items={5} center>
                        {console.log(props.cardData)}
                        {props.cardData.map((item, index) => {

                            return (<div className='item mysuggestioncard'>

                                <h1>{item.courseName}</h1>

                            </div>)


                        })}






                    </OwlCarousel>
                </div>

            </div>
        </div>
    )
}
export default Suggestioncard;
