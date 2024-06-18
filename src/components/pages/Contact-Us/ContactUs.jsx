import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faLocationDot, faMicrophone } from "@fortawesome/free-solid-svg-icons";
import ContactForm from '../../forms/ContactForm';

function ContactUs() {
  


  return (
    <>
    <div className="bg-[url('/src/assets/laptop.png')] w-full h-[170px] grid ">

        <span className='place-self-center text-white'>Contact us</span>

    </div>

    <div className="grid grid-cols-3 w-[1200px] ml-[200px] mt-[50px]">
      <div className='grid'>
      <FontAwesomeIcon className='place-self-center' icon={faLocationDot} />
      <p className='font-bold text-[25px] place-self-center'>Address</p>
      <p className='text-center'>Pili Trade Center, Opp Hilton Garden Inn, Mombasa Road, Nairobi ,Kenya </p>
      </div>

      <div className='grid'>
      <FontAwesomeIcon className='place-self-center' icon={faMicrophone} />
      <p className='font-bold text-[25px] place-self-center'>Phones</p>
      <p className='text-center'>Support: +254720970959 </p>
      </div>

      <div className='grid'>
      <FontAwesomeIcon className='place-self-center' icon={faEnvelope} />
      <p className='font-bold text-[25px] place-self-center'>Email Addresses</p>
      <p className='text-center'>Support:info@amband.co.ke</p>
      </div>
    </div>

    <p className='grid justify-items-center mt-[20px]'>For general Inquiry, send an email to this contact: All fields are required.</p>

    <div className="grid grid-cols-2 w-[1200px] gap-2 ml-[200px] mt-[50px]">
      <div>
        <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3988.7041934904664!2d36.90457527491678!3d-1.3540618357038279!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x182f0d9f19275123%3A0xc92bcb4c6a816b34!2sHilton%20Garden%20Inn%20Nairobi%20Airport!5e0!3m2!1sen!2ske!4v1717393922083!5m2!1sen!2ske" 
        width="600" 
        height="450" 
        style={{border:0}} 
        allowfullscreen="" 
        loading="lazy" 
        referrerpolicy="no-referrer-when-downgrade">
          
        </iframe>
      </div>
      <div className='ml-[30px]'>
        <ContactForm />

      </div>
    </div>


    


    
    
    </>
  )
}

export default ContactUs;


