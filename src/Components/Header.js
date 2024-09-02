import '../Styling/Header.css'

const Header = () => {
    return (
        <div className="gradient-border-bottom">
            <div className="header">
                <div className="header_logo">BANK<span className="header_logo_diff">KARO</span></div>
                <div className="header_heading">
                    <ul className="header_ul">
                        <li className="header_li">OUR PRODUCTS</li>
                        <li className="header_li">TOOLS</li>
                        <li className="header_li">BLOGS</li>
                        <li className="header_li">ABOUT US</li>
                    </ul>
                </div>
                <div className="header_btn_container">

                    <div className="gradient-border"> <div className="header_button">Sign In</div></div>

                    <div className="button_image"><img src="https://d22ueo28hfk252.cloudfront.net/Content/versioned/2.0.0.1/images/version4/promotion_august_24/zenrik_images/Mask-group-17250064575426.png?v=1725006458" alt="button_img" style={{ width: '55px' }} /></div>




                </div>
            </div>
        </div>
    )
}
export default Header;