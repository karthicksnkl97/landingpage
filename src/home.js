import "./App.css"
import nailIcon from "./assets/home.png"
import BusinessIcon from '@mui/icons-material/Business';
import PersonIcon from '@mui/icons-material/Person';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import MailIcon from '@mui/icons-material/Mail';
import PhoneAndroidIcon from '@mui/icons-material/PhoneAndroid';
import "./media.css"
function Home(){
return(
    <div>
    <div className="home">
        <div>
            <img className="cover" alt="nailicon" src={nailIcon}/>
        </div>
        <div className="des">
            <h2 className="para">welcome to our website</h2>
            <p className="para">"Welcome to the Wire Nail website, your premier destination for all things nails! Whether you're a professional contractor, a handy homeowner, or a passionate DIYer, we've got you covered with our extensive selection of high-quality wire nails. Explore our range of sizes, materials, and finishes, perfect for any project, big or small. With Wire Nail, you can trust that every nail will drive your projects forward with strength and precision. Start browsing now and let's nail it together!"</p>
        </div>
    </div>
    <div className="bottom-description">
        <h3 className="bottom-header">Why choose us</h3>
        <p className="bottom-para">We ensure punctual delivery of Galvanized Iron Nals, panel pin and other products We always do the business deals with
complete transparency We assure that our products are of a quality that cannot be matched by any other company We are
the Finest Wire Nail Manufacturers 1n India and our product range include of Wie Nail, Concrete Nal, Iron Nanl, Common
Nanl and Panel Pin, Co1l Nail, Wire Drawing, Wire Binding, Polshing Drum and more</p>
    </div>
    <div className="bottom-border">
    <div className='contact-form'>
        
        <div className='contact-details'>
        <h3>Contact Us</h3>
         <form>
            <label>Name</label>
            <input type='text' placeholder='enter your name' /><br />
            <label>Looking for</label>
            <input type='text' placeholder='Products/service' /><br />
            <label>Email</label>
            <input type='text' placeholder='enter your mail' /><br />
            <label>Mobile number</label>
            <input type='number' placeholder='phone/mobile' /><br />
            <label>State</label>
            <input type='text' placeholder='enter your state' /><br />
            <div className='button-contact'>
                <div>
            <button type='submit'>Send Message</button></div>
            <div ><button className='btn-cancel'>Cancel</button></div>
            </div>
            </form> 
        </div>
        <div className='quick-details'>
        <h3>Quick Contact</h3><br />
        <div className='quick-contact'>
            
            <div className='icons'>
                <BusinessIcon className='icon-resize' />
                <PersonIcon className='icon-resize' />
                <LocationOnIcon className='icon-resize' /><br />
                <MailIcon className='icon-resize' />
                <PhoneAndroidIcon className='icon-resize'  />
               </div>
               <div className='texts'>
               <p>Lakshmi group of companies</p>
               <p>Sankaranarayanan</p>
               <p>Thiruvengadam road,<br/>
               sankarankovil- 627756
               </p>
               <p>arssankararun@gmail.com</p>
               <p>9976678893</p>
               </div>
               </div>
        </div>
       </div>
       <div className="bottom-borders">
       <div className="about-details">
        <div className="about-header">
        <h1>About Us</h1>
        <div className="about-brief">
            <p>Established in 1980, we at "Lakshmi group of companies" are one of the renowned wholesale traders of Concertina Wire Nails,Mild Steel Nail,HB Wire Service

We are focused on exceeding the hopes of the client based on product quality, solution, and costs. We collect our products directly from the vendors, who wonderfully carved and planned their products with the help of informative tools.

From the beginning, we have been performing business under some precise principles which include keeping absolute professionalism, on-time delivery of orders, offering the best quality product at the best market cost, and looking ahead to follow up to adopt newer ways to expand commerce.

Additionally, our products are broadly used for exterior and interior requirements in apartments, homes, and offices. After performing good market research, we have positioned ourselves as the organization and offering top-class products. Our team assists us to achieve various predefined targets and goals.

Based in Sankarankovil,TamilNadu (India), we are working under the expert guidance of Mr. Arunachalam (Company Founder) and achieving a good market stand. Our absolute workforce is indebted for their motivation and we genuinely desire to work with them for a very long time.</p>
        </div>
    </div>
    </div>
    </div>
    </div>
    </div>
)
}
export default Home;