import '../Styling/Offer.css'

const Offer = (props) => {
  
    return (
        <div className="Offer-section">
            <div className="offer-image"><img src={props.data.image} alt="offers" width="100%" /></div>
            <p className="offer-heading">{props.data.heading}</p>
            <p className="offer-content">{props.data.content}</p>
        </div>
    )
}
export default Offer;