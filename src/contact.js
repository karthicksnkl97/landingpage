import BusinessIcon from '@mui/icons-material/Business';
import PersonIcon from '@mui/icons-material/Person';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import MailIcon from '@mui/icons-material/Mail';
import PhoneAndroidIcon from '@mui/icons-material/PhoneAndroid';
import "./App.css"
function Contact(){
    return(
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
    )

}
export default Contact;