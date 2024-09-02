import '../Styling/LoungerFinder.css'
import Lounge from './Lounge'
const LoungerFinder = () =>{
    const loungeData = [
        {
            small : "https://d22ueo28hfk252.cloudfront.net/Content/versioned/2.0.0.1/images/version4/promotion_september_24/zenrik_images/Group-1321316264-(1)-17252924852186.png?v=1725292486",
            large : "https://d22ueo28hfk252.cloudfront.net/Content/versioned/2.0.0.1/images/version4/promotion_september_24/zenrik_images/B036_10-1-min-17252926115408.png?v=1725292612",

        },
        {
            small : "https://d22ueo28hfk252.cloudfront.net/Content/versioned/2.0.0.1/images/version4/promotion_september_24/zenrik_images/Group-1321316268-17252937272150.png?v=1725293728",
            large : "https://d22ueo28hfk252.cloudfront.net/Content/versioned/2.0.0.1/images/version4/promotion_september_24/zenrik_images/B036_04-1-1-min-17252939062316.png?v=1725293907",

        },
        {
            small : "https://d22ueo28hfk252.cloudfront.net/Content/versioned/2.0.0.1/images/version4/promotion_september_24/zenrik_images/Group-1321316269-17252937258740.png?v=1725293726",
            large : "https://d22ueo28hfk252.cloudfront.net/Content/versioned/2.0.0.1/images/version4/promotion_september_24/zenrik_images/B036_092-12x-min-17252939841455.png?v=1725293984",

        },

    ]
    return (
        <div className="lounge_parent">
            <p className="lounger-head">Lounge Finder</p>
            <p className="lounger-cont">Check which lounges you can access at a click!</p>

            <button className="comparebtm-btn-3">Try Lounge Finder</button>

            <div className="lounge_flex">
                {loungeData.map((elem,i) =>(
                    <Lounge image={elem} key={i}/>
                ))}
            </div>
        </div>
    )
}

export default LoungerFinder;