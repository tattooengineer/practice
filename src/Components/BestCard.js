import '../Styling/BestCard.css'

const BestCard = () =>{
    return(

        <div className="bestcard_container">
           
        <div className="video-background">
        <video autoPlay loop muted playsInline className="video">
          <source src="https://s3-figma-videos-production-sig.figma.com/video/1075329090537993606/TEAM/13ff/3422/-d3eb-4e5e-bba0-ee57afbda338?Expires=1725840000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=VBTwOH0PBEYRU2uHOHmDkTDYBHCyZ3GE-6iZ-Yyj84H2jzVpqKNfcGXV8mEAaAl9u246yTJ~dhxz~P1rxQPPJSYJ81YHI3mYmmwpvQm0AEtE8XKdp3C4pE~ikAZFoTTkf8y6I3OY4OI9EikDbZEOOkLbO2y3wzEBqlueswCOlD~DLvrS7gElTDRzF-jkeug6KN72gqdseZwlHrZI0fofEkosKSPQwHhHg-Q2PbVZyVUNVcCg7oStexZ-r3BaeAwcqwSkmOrqtCCMIKOgi~Ip5bGnaD9ueNXOP-CDOYHFzZwIsYad5aLj0oZYZYmPbw7Q2Z1QEP9~Kq7aAJ80orIETg__" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        <div className="content">
         <div className="bestcard_content">
            <p className="bestcard_p">We find the Best <br/>
            Credit Cards for You</p>
         <div className="btn_container_header">  <button className="comparebtm-btn-2">Find a Credit Card</button></div> 
         </div>
         <div className="cc_image"><img src="https://d22ueo28hfk252.cloudfront.net/Content/versioned/2.0.0.1/images/version4/promotion_august_24/zenrik_images/Rectangle-17250118400317.png?v=1725011841" alt="credit-card" width="100%"/></div>
        </div>
      </div>
      </div>
    )
}

export default BestCard;