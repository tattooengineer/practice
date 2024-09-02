const CreditCard = (props) => {
    return (
        <div className="cc-box">
            <div className="cc-img-box"><img src={props.data.card} alt="cc" width="100%" /></div>
            <div className="cc-content">
                <p className="cc-name">{props.data.cardname}</p>
                <div className="travel-cc-box">
                    <div>TRAVEL</div>
                    <div>ONLINE SHOPPING</div>
                </div>
                <p className="Cashback-cc">50% Cashback</p>
                <p className="Cashback-cc-cont">High cashback on online and <br /> offline spends</p>
                <div className="btn-c">     <button className="cc-btn">Apply Now</button>
                    <div className="btn-ar">   <img src="https://d22ueo28hfk252.cloudfront.net/Content/versioned/2.0.0.1/images/version4/promotion_september_24/zenrik_images/Arrow---Right-3-17252664666010.png?v=1725266467" alt="arrow"  /></div>
                </div>

            </div>

        </div>
    )
}

export default CreditCard;