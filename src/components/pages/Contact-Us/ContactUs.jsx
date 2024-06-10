import React, { useState } from 'react';


function ContactUs() {
  


  return (
    <>
    <div className="bg-slate-800 w-full h-[170px] grid ">

      <p className='place-self-center'>Contact Us</p>

    </div>
    <div className='grid md:grid-cols-3 gap-[10px] justify-items-center'>
      <div className="bg-black w-1/3 h-[80px] m-[5px]    ">

      </div>

      <div className="bg-black w-1/3 h-[80px] m-[5px]   ">

      </div>


      <div className="bg-black w-1/3 h-[80px] m-[5px]   ">


      </div>

    </div>

    <p className='grid justify-items-center'>For general Inquiry, send an email to this contact: All fields are required.</p>

    <div className='grid md:grid-cols-2 gap-[24px] justify-items-center'>
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
    </div>
    


    
    
    </>
  )
}

export default ContactUs;


