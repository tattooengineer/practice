
const TraingleCard = (props) =>{
    return(
        <div className="traingle_card">
            <img src={props.src.src} alt="traingle_image" width="100%" key={props.index}/>
        </div>
    )
}

export default TraingleCard;