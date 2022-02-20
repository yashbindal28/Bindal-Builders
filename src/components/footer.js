/** @jsx jsx */
import { jsx } from "theme-ui"
import { Link } from "gatsby"
import { RiHeart2Line } from "react-icons/ri"

const Footer = () => (
  <footer
    className="site-footer"
    sx={{
      bg: "siteColor",
      fontSize: "18px",
    }}
  >
    <div className="container">
      <p>
        www.bindalbuilders.online
        <br />
        <span className="icon -love">
          <RiHeart2Line />
        </span>{" "}
        <Link to="/contact">Contact Us</Link>
      </p>
    </div>
  </footer>
)

export default Footer
