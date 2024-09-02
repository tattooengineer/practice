import TraingleCard from "./TraingleCard";
import '../Styling/TraingleCard.css'
const TraingleCardContainer = () => {
    const cards = [
        {
            src: "https://d22ueo28hfk252.cloudfront.net/Content/versioned/2.0.0.1/images/version4/promotion_september_24/zenrik_images/Frame-1321316684-17252616532086.png?v=1725261654"
        },
        {
            src: "https://d22ueo28hfk252.cloudfront.net/Content/versioned/2.0.0.1/images/version4/promotion_september_24/zenrik_images/Frame-1321316685-min-17252624104913.png?v=1725262411"
        },
        {
            src: "https://d22ueo28hfk252.cloudfront.net/Content/versioned/2.0.0.1/images/version4/promotion_september_24/zenrik_images/Frame-1321316686-min-17252624540436.png?v=1725262454"
        },
        {
            src: "https://d22ueo28hfk252.cloudfront.net/Content/versioned/2.0.0.1/images/version4/promotion_september_24/zenrik_images/Frame-1321316687-min-17252624887998.png?v=1725262489"
        },

    ]

    return (
        <div className="traingle-container">
        {cards.map((elem,index) => (
            <TraingleCard src={elem} key={index} />
        ))}
    </div>
    )
}

export default TraingleCardContainer;