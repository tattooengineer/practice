import '../Styling/OfferSection.css'
import Offer from './Offer';
const OfferSection = () => {

    const offerdata = [
        {
            image: "https://d22ueo28hfk252.cloudfront.net/Content/versioned/2.0.0.1/images/version4/promotion_august_24/zenrik_images/Chart-17250197198884.png?v=1725019720",
            heading: "Personalised Offers",
            content: "Find best Credit Card based on your spend pattern"
        }
        ,
        {
            image: "https://d22ueo28hfk252.cloudfront.net/Content/versioned/2.0.0.1/images/version4/promotion_august_24/zenrik_images/Percent-17250210789689.png?v=1725021079",
            heading: "Earn Rewards",
            content: "Earn Rewards for every successful Credit Card approval"
        }
        ,
        {
            image: "https://d22ueo28hfk252.cloudfront.net/Content/versioned/2.0.0.1/images/version4/promotion_august_24/zenrik_images/Group-1321316158-17250210392270.png?v=1725021039",
            heading: "Compare Cards",
            content: "Compare your existing Cards with best in the industry"
        }
        ,
        {
            image: "https://d22ueo28hfk252.cloudfront.net/Content/versioned/2.0.0.1/images/version4/promotion_august_24/zenrik_images/Shield-17250210402946.png?v=1725021040",
            heading: "Max Benifits",
            content: "Get Maximum benefits from your Credit Cards"
        }
        ,

    ]


    return (
        <div className="offer-container">
            {offerdata.map((elem, index) => (
                <Offer data={elem} key={index} />
            ))}
        </div>
    );
}
export default OfferSection;