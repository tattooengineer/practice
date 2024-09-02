import '../Styling/Lounge.css'
const Lounge = (props) =>{
    return (
        <div className="lounge-box_small">
          <div className="lounge-box_smallimg"> <img src={props.image.small} key={props.i} alt="views" width="100%"/></div> 
          <div className="lounge-box_bigim"> <img src={props.image.large} key={props.i} alt="views" width="100%"/></div> 
          <div className="bgimg"><img src="https://d22ueo28hfk252.cloudfront.net/Content/versioned/2.0.0.1/images/version4/promotion_september_24/zenrik_images/Group-1321316255-17252932144429.png?v=1725293215" alt="bg" width="100%"/></div>
        </div>
    )
}
export default Lounge;