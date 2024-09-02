import { useState } from 'react';
import '../Styling/CreditCardContainer.css'
import CreditCard from './CreditCard';
const CreditCardContainer = () => {
    const [activeButton, setActiveButton] = useState(0);

    const handleButtonClick = (index) => {
        setActiveButton(index);
    };
    const buttonNames = ['Featured', 'Cashback', 'Rewards', 'Fuel', 'Business'];

    const creditDetails = [
        {
card : "https://d22ueo28hfk252.cloudfront.net/Content/versioned/2.0.0.1/images/version4/promotion_september_24/zenrik_images/output-onlinepngtools-(3)-17252656908009.png?v=1725265691",
cardname : "HDFC Regalia",

    },
    {
        card : "https://d22ueo28hfk252.cloudfront.net/Content/versioned/2.0.0.1/images/version4/promotion_september_24/zenrik_images/output-onlinepngtools-(4)-17252669165298.png?v=1725266917",
        cardname : "Axis Bank Ace Credit Card",
        
            },
    
            {
                card : "https://d22ueo28hfk252.cloudfront.net/Content/versioned/2.0.0.1/images/version4/promotion_september_24/zenrik_images/output-onlinepngtools-(7)-17252671351041.png?v=1725267136",
                cardname : "Indian Oil HDFC Credit Card",
                
                    },
                    
    

]

    return (
        <div className="credit-card-container">

            <div className="credit-card-upper">
                <img src="https://d22ueo28hfk252.cloudfront.net/Content/versioned/2.0.0.1/images/version4/promotion_september_24/zenrik_images/Vector-(1)-17252628248778.png?v=1725262825" className="left-cc-img" alt="background" />

                <p className="cc_p">Popular credit cards for every<br /> dedicated category</p>

                <div className="button-container">
                    {buttonNames.map((name, index) => (
                        <button
                            key={index}
                            className={`button ${activeButton === index ? 'active' : ''}`}
                            onClick={() => handleButtonClick(index)}
                        >
                            {name}
                        </button>
                    ))}
                </div>


                <img src="https://d22ueo28hfk252.cloudfront.net/Content/versioned/2.0.0.1/images/version4/promotion_september_24/zenrik_images/Vector-(2)-17252628603711.png?v=1725262861" className="right-cc-img" alt="background" />
            </div>

            <div className='credit-card-bottom'>
            {creditDetails.map((elem, index) => (
                <CreditCard data={elem} key={index} />
            ))}

            </div>


        </div>
    )
}
export default CreditCardContainer;