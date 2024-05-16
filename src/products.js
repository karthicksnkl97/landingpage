import wireNail from "./assets/wirenail.png"
import panelPin from "./assets/panelpinnail.png"
import commonNail from "./assets/commonnail.png"
import sixinchNail from "./assets/6inchnail.png"
import twoinchNail from "./assets/2inchnail.png"
import threeinchNail from "./assets/3inchnail.png"
import fiveinchNail from "./assets/5inchnail.png"
import onebyfiveNail from "./assets/1.5inchnail.png"
import hbWires from "./assets/wires.png"
import hbWiresthreemm from "./assets/wires3mm.png"
import onetosixinchNail from "./assets/1to6inchnail.png"
import shoeTackNail from "./assets/shoetacknail.png"

import List from '@mui/material/List';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import Collapse from '@mui/material/Collapse';
import ExpandLess from '@mui/icons-material/ExpandLess';
import ExpandMore from '@mui/icons-material/ExpandMore';
import "./products.css"
import "./media.css"
import { useState } from "react"
import { useNavigate } from "react-router"
function Products(){
    const [open, setOpen] = useState(true);
const navigate = useNavigate();
    const handleClick = () => {
      setOpen(!open);
    };
return(
    <div>
    <div className="details">
    <div>
        <div className="products">
            <h1>Wire Nails</h1>
    <div className="products-brief">
    <div className="image">
                <img className="nailimg" src={wireNail} alt="wirenail"/>
                <p>Price ₹62/kg</p>
                <button onClick={() => navigate("/contact")}>Shop Now</button>
            </div>
        <div className="product-description">
            <div className="product-des">
            <h2>Wire Nail</h2>
            <p>nail, in construction and carpentry, a slender metal shaft that is pointed at one end and flattened at the other end and is used for fastening one or more objects to each other. Nails are most commonly used to fasten pieces of wood together, but they are also used with plastic, drywall, masonry, and concrete.</p>
        <div className="boxs"> 
            <div className="table">
                <table>
                <tr>
                    <th>Head Diameter</th>
                    <td>10 mm</td>
                </tr>
                <tr>
                    <th>Size</th>
                    <td>1 inch</td>
                </tr>
                <tr>
                    <th>Material</th>
                    <td>Iron</td>
                </tr>
                <tr>
                    <th>Usage/Application</th>
                    <td>Construction</td>
                </tr>
                <tr>
                    <th>Head Shape</th>
                    <td>Round</td>
                </tr>
                <tr>
                    <th>Hardness</th>
                    <td>70 HRC</td>
                </tr>
                </table>
            </div>
            </div>
        </div>
        </div>
        </div>
        <div className="products-brief">
        <div className="image">
                <img className="nailimg" src={panelPin} alt="wirenail"/>
                <p>Price ₹65/kg</p>
                <button onClick={() => navigate("/contact")}>Shop Now</button>
            </div>
        <div className="product-description">
        <div>
            <h2>Panelpin Wire Nail</h2>
            <p>Panel Pins are a round, lightweight nail used for cabinet making and for fixing small mouldings into place.</p>
        </div>
        <div className="box">
           
            <div className="table">
                <table>
                <tr>
                    <th>Nail Length</th>
                    <td>1 Inch</td>
                </tr>
                <tr>
                    <th>Gauge</th>
                    <td>16 Gauge</td>
                </tr>
                <tr>
                    <th>Size</th>
                    <td>1 inch, 3/4 inch,1.25 inch, 1.5 inch <span>head or headless</span></td>
                </tr>
                <tr>
                    <th>Material</th>
                    <td>Mild Steel</td>
                </tr>
                <tr>
                    <th>Packaging Type</th>
                    <td>2.5 KG BOX PACKAGE</td>
                </tr>
                <tr>
                    <th>Surface Treatment</th>
                    <td>POLISHED</td>
                </tr>
                <tr>
                    <th>Color</th>
                    <td>SILVER</td>
                </tr>
                </table>
            </div>
        </div>
        </div>
        </div>
        <div className="products-brief">
        <div className="image">
                <img className="nailimg" src={commonNail} alt="wirenail"/>
                <p>Price ₹61/kg</p>
                <button onClick={() => navigate("/contact")}>Shop Now</button>
            </div>
        <div className="product-description">
        <div>
            <h2>Iron Common Wire Nail</h2>
            <p>Common wire nails are widely used fasteners in construction, woodworking, and general applications. Made of carbon steel for strength and durability.</p>
        </div>
        <div className="box">
            
            <div className="table">
                <table>
                <tr>
                    <th>Material</th>
                    <td>Iron</td>
                </tr>
                <tr>
                    <th>Size</th>
                    <td>2 inch</td>
                </tr>
                <tr>
                    <th>Tensile  Strength</th>
                    <td>350 MPa</td>
                </tr>
                <tr>
                    <th>Thickness</th>
                    <td>10 mm</td>
                </tr>
                <tr>
                    <th>Elongation</th>
                    <td>20 %</td>
                </tr>
                <tr>
                    <th>Hardness</th>
                    <td>70 HRC</td>
                </tr>
                </table>
            </div>
        </div>
        </div>
        </div>
        <div className="products-brief">
        <div className="image">
                <img className="nailimg" src={sixinchNail} alt="wirenail"/>
                <p>Price ₹60/kg</p>
                <button onClick={() => navigate("/contact")}>Shop Now</button>
            </div>
        <div className="product-description">
        <div>
            <h2>6inch HB Wire Nail</h2>
            <p>These nails are used for fastening various items with each other. Our nails are designed under the guidance of expert professionals by using optimum quality. </p>
        </div>
        <div className="box">
            
            <div className="table">
                <table>
                <tr>
                    <th>Material</th>
                    <td>Iron</td>
                </tr>
                <tr>
                    <th>Size</th>
                    <td>6 inch</td>
                </tr>
                <tr>
                    <th>Head Diameter</th>
                    <td>10 mm</td>
                </tr>
                <tr>
                    <th>Usage/Application</th>
                    <td>Construction</td>
                </tr>
                <tr>
                    <th>Head Shape</th>
                    <td>Round</td>
                </tr>
                <tr>
                    <th>Corrosion Resistance</th>
                    <td>Yes</td>
                </tr>
                </table>
            </div>
        </div>
        </div>
        </div>
        <div className="products-brief">
        <div className="image">
                <img className="nailimg" src={twoinchNail} alt="wirenail"/>
                <p>Price ₹62/kg</p>
                <button onClick={() => navigate("/contact")}>Shop Now</button>
            </div>
        <div className="product-description">
        <div>
            <h2>2inch HB Wire Nail</h2>
            <p>Our nails are Straight shank and do not bend while hammering, uniform & wide head , sharp tail which do not bulge due hardness of wire.</p>
        </div>
        <div className="box">
            
            <div className="table">
            <table>
                <tr>
                    <th>Head Shape</th>
                    <td>Round</td>
                </tr>
                <tr>
                    <th>Size</th>
                    <td>2 inch</td>
                </tr>
                <tr>
                    <th>Tensile  Strength</th>
                    <td>350 MPa</td>
                </tr>
                <tr>
                    <th>Thickness</th>
                    <td>8 mm</td>
                </tr>
                <tr>
                    <th>Elongation</th>
                    <td>20 %</td>
                </tr>
                </table>
            </div>
        </div>
        </div>
        </div>
        <div className="products-brief">
        <div className="image">
                <img className="nailimg" src={threeinchNail} alt="wirenail"/>
                <p>Price ₹60/kg</p>
                <button onClick={() => navigate("/contact")}>Shop Now</button>
            </div>
        <div className="product-description">
        <div>
            <h2>3inches HB Wire Nails</h2>
            <p>In woodworking and construction, a nail is a small object made of metal which is used as a fastener, as a peg to hang something.</p>
        </div>
        <div className="box">
            
            <div className="table">
            <table>
                <tr>
                    <th>Head Shape</th>
                    <td>Round</td>
                </tr>
                <tr>
                    <th>Size</th>
                    <td>3 inch</td>
                </tr>
                <tr>
                    <th>Tensile  Strength</th>
                    <td>350 MPa</td>
                </tr>
                <tr>
                    <th>Thickness</th>
                    <td>10 mm</td>
                </tr>
                <tr>
                    <th>Material</th>
                    <td>HB Wire</td>
                </tr>
                </table>
            </div>
        </div>
        </div>
        </div>
        <div className="products-brief">
        <div className="image">
                <img className="nailimg" src={fiveinchNail}  alt="wirenail"/>
                <p>Price ₹60/kg</p>
                <button onClick={() => navigate("/contact")}>Shop Now</button>
            </div>
        <div className="product-description">
        <div>
            <h2>5inch HB Wire Nails</h2>
            <p>These nails are used for fastening various items with each other. Our nails are designed under the guidance of expert professionals by using optimum quality.</p>
        </div>
        <div className="box">
           
            <div className="table">
            <table>
                <tr>
                    <th>Head Shape</th>
                    <td>Round</td>
                </tr>
                <tr>
                    <th>Size</th>
                    <td>5 inch</td>
                </tr>
                <tr>
                    <th>Tensile  Strength</th>
                    <td>350 MPa</td>
                </tr>
                <tr>
                    <th>Thickness</th>
                    <td>10 mm</td>
                </tr>
                <tr>
                    <th>Hardness</th>
                    <td>70 HRC</td>
                </tr>
                <tr>
                    <th>Corrosion Resistance</th>
                    <td>Yes</td>
                </tr>
                </table>
            </div>
        </div>
        </div>
        </div>
        <div className="products-brief">
        <div className="image">
                <img className="nailimg" src={onebyfiveNail}  alt="wirenail"/>
                <p>Price ₹62/kg</p>
                <button onClick={() => navigate("/contact")}>Shop Now</button>
            </div>
        <div className="product-description">
        <div>
            <h2>1.5inch Wire Nails</h2>
            <p>Our nails are Straight shank and do not bend while hammering, uniform & wide head , sharp tail which do not bulge due hardness of wire.</p>
        </div>
        <div className="box">
            
            <div className="table">
            <table>
                <tr>
                    <th>Head Shape</th>
                    <td>Round</td>
                </tr>
                <tr>
                    <th>Size</th>
                    <td>1.5 inch</td>
                </tr>
                <tr>
                    <th>Material</th>
                    <td>Mild Steel</td>
                </tr>
                <tr>
                    <th>Usage/Application</th>
                    <td>Construction</td>
                </tr>
                <tr>
                    <th>Tensile Strength</th>
                    <td>350 MPa</td>
                </tr>
                <tr>
                    <th>Corrosion Resistance</th>
                    <td>Yes</td>
                </tr>
                </table>
            </div>
        </div>
        </div>
        </div>
        </div>
        <div className="products">
            <h1>Mild Steel Nail</h1>
            <div className="products-brief">
            <div className="image">
                <img className="nailimg" src={onetosixinchNail} alt="wirenail"/>
                <p>Price ₹65/kg</p>
                <button onClick={() => navigate("/contact")}>Shop Now</button>
            </div>
        <div className="product-description">
        <div>
            <h2>Industrial Ms Wire Nails</h2>
            <p>Pioneers in the industry, we offer Industrial Ms Wire Nails, Shoe Tack Nails and Panel Pins Nail from India.</p>
        </div>
        <div className="box">
            
            <div className="table">
            <table>
                <tr>
                    <th>Material</th>
                    <td>Iron Nails</td>
                </tr>
                <tr>
                    <th>Size</th>
                    <td>1 to 6 inch</td>
                </tr>
                <tr>
                    <th>Gauge</th>
                    <td>8 Gauge</td>
                </tr>
                <tr>
                    <th>Usage/Application</th>
                    <td>Construction</td>
                </tr>
                <tr>
                    <th>Packaging Type</th>
                    <td>Bag And Packet</td>
                </tr>
                <tr>
                    <th>Color</th>
                    <td>Silver</td>
                </tr>
                </table>
            </div>
        </div>
        </div>
        </div>
        <div className="products-brief">
        <div className="image">
                <img className="nailimg" src={shoeTackNail}  alt="wirenail"/>
                <p>Price ₹95/kg</p>
                <button onClick={() => navigate("/contact")}>Shop Now</button>
            </div>
        <div className="product-description">
        <div>
            <h2>Shoe Tack Nails</h2>
            <p>The nail point is tapered so that it can be turned back on itself so the opposite side of the nail's head forms a rivet-like fastening when hitting steel plate or anvil.</p>
        </div>
        <div className="box">
           
            <div className="table">
            <table>
                <tr>
                    <th>Nail Size</th>
                    <td>1/2 Inch</td>
                </tr>
                <tr>
                    <th>Length</th>
                    <td>13 mm</td>
                </tr>
                <tr>
                    <th>Head Style</th>
                    <td>Flat</td>
                </tr>
                <tr>
                    <th>Surface Treatment</th>
                    <td>Galvanized</td>
                </tr>
                <tr>
                    <th>Packaging Weight</th>
                    <td>2.5 Kg</td>
                </tr>
                <tr>
                    <th>Country of Origin</th>
                    <td>Made in India</td>
                </tr>
                </table>
            </div>
        </div>
        </div>
        </div>
        </div>
        <div className="products">
            <h1>HB Wire</h1>
            <div className="products-brief">
            <div className="image">
                <img className="nailimg" src={hbWires}  alt="wirenail"/>
                <p>Price ₹57/kg</p>
                <button onClick={() => navigate("/contact")}>Shop Now</button>
            </div>
        <div className="product-description">
        <div>
            <h2>HB Wires Mild steel</h2>
            <p>Mild Steel Hb Wire 0.08%-25% of carbon which makes them sturdy than pure iron wires,Nails and Screws.</p>
        </div>
        <div className="box">
           
            <div className="table">
            <table>
                <tr>
                    <th>Hardness</th>
                    <td>70 HRC</td>
                </tr>
                <tr>
                    <th>Diameter</th>
                    <td>1.5mm</td>
                </tr>
                <tr>
                    <th>Usage/Application</th>
                    <td>Industrial</td>
                </tr>
                <tr>
                    <th>Elongation</th>
                    <td>20 %</td>
                </tr>
                <tr>
                    <th>Tensile Strength</th>
                    <td>350 MPa</td>
                </tr>
                <tr>
                    <th>Material</th>
                    <td>Mild Steel</td>
                </tr>
                </table>
            </div>
        </div>
        </div>
        </div>
        <div className="products-brief">
        <div className="image">
                <img className="nailimg" src={hbWiresthreemm}  alt="wirenail"/>
                <p>Price ₹55/kg</p>
                <button onClick={() => navigate("/contact")}>Shop Now</button>
            </div>
        <div className="product-description">
        <div>
            <h2>Nail Wire Roll</h2>
            <p>Our nail wire roll is designed to prevent rust and corrosion, ensuring your building projects will last for years to come,making it ideal for use in both indoor and outdoor applications.</p>
        </div>
        <div className="box">
            
            <div className="table">
            <table>
                <tr>
                    <th>Application</th>
                    <td>Wood Construction</td>
                </tr>
                <tr>
                    <th>Size of nail</th>
                    <td>3.5mm</td>
                </tr>
                <tr>
                    <th>Material of wire</th>
                    <td>HB</td>
                </tr>
                <tr>
                    <th>Hardness</th>
                    <td>Hardbright</td>
                </tr>
                <tr>
                    <th>Shape</th>
                    <td>Round</td>
                </tr>
                <tr>
                    <th>Country of Origin</th>
                    <td>Made in India</td>
                </tr>
                </table>
            </div>
        </div>
        </div>
        </div>
        </div>
    </div>
    <div className="nested-lists">
        <ListItemButton>
        <ListItemText className="header" primary="Products & Services"/>
        </ListItemButton>
    <ListItemButton  onClick={handleClick}>
        <ListItemText className="header-list"  primary="Wire Nails" />
        {open ? <ExpandLess /> : <ExpandMore />}
      </ListItemButton>
      <Collapse in={!open} timeout="auto" unmountOnExit>
        <List  component="div" disablePadding>
          <ListItemButton className="nested"  sx={{ pl: 4 }}>
            <ListItemText primary="Wire Nail" />
            </ListItemButton>
            <ListItemButton className="nested"  sx={{ pl: 4 }}>
            <ListItemText primary ="Panelpin Wire Nail"/>
            </ListItemButton>
            <ListItemButton className="nested"  sx={{ pl: 4 }}>
            <ListItemText primary ="Iron Common Wire Nail"/>
            </ListItemButton>
            <ListItemButton className="nested"  sx={{ pl: 4 }}>
            <ListItemText primary ="6inch HB Wire Nail"/>
            </ListItemButton>
            <ListItemButton className="nested"  sx={{ pl: 4 }}>
            <ListItemText primary ="2inch HB Wire Nail"/>
            </ListItemButton >
            <ListItemButton className="nested"  sx={{ pl: 4 }}>
            <ListItemText primary ="3inches HB Wire Nails"/>
            </ListItemButton>
            <ListItemButton className="nested"  sx={{ pl: 4 }}>
            <ListItemText primary ="5inch HB Wire Nails"/>
            </ListItemButton>
            <ListItemButton className="nested"  sx={{ pl: 4 }}>
            <ListItemText primary ="1.5inch Wire Nails"/>
          </ListItemButton>
        </List>
      </Collapse>
      <ListItemButton  onClick={handleClick}>
        <ListItemText className="header-list"  primary="Mild Steel Nail" />
        {open ? <ExpandLess /> : <ExpandMore />}
      </ListItemButton>
      <Collapse in={!open} timeout="auto" unmountOnExit>
        <List component="div" disablePadding>
          <ListItemButton className="nested" sx={{ pl: 4 }}>
            <ListItemText primary="Industrial Ms Wire Nails" />
            </ListItemButton>
            <ListItemButton className="nested" sx={{ pl: 4 }} >
            <ListItemText primary ="Shoe Tack Nails"/>
            </ListItemButton>
            </List>
      </Collapse>
      <ListItemButton className="header-list"  onClick={handleClick}>
        <ListItemText   primary="HB Wire" />
        {open ? <ExpandLess /> : <ExpandMore />}
      </ListItemButton>
      <Collapse in={!open} timeout="auto" unmountOnExit>
        <List component="div" disablePadding>
          <ListItemButton className="nested" sx={{ pl: 4 }}>
            <ListItemText primary="HB Wires Mild steel" />
            </ListItemButton>
            <ListItemButton className="nested" sx={{ pl: 4 }}>
            <ListItemText primary ="Nail Wire Roll"/>
            </ListItemButton>
            </List>
      </Collapse>
    </div>
    </div>
    </div>
)
}
export default Products;