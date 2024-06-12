import React, { useState } from 'react';    


function ContactForm() {

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');
    const [message, setMessage] = useState('');
    const [submittedData, setSubmittedData] = useState(null);

    const handleSubmit = (event) => {
        event.preventDefault();
        setSubmittedData({ name, email ,message});
    };


    return(
        <>
        <div className='mx-px w-[550px] h-[600px] p-[50px] border-solid border-2 border-emerald-800 '>
            <form onSubmit={handleSubmit} className='bg-emerald-500 px-[10px]' >
                <div className='mt-[20px]'>
                    <label>
                    Your Name (required)*
                    <br/>
                    <input
                        type="text"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        className='w-[400px]'
                    />
                    </label>
                    
                </div>
                <div className='mt-[20px]'>
                    <label>
                    Your Phone (required)*
                    <br/> 
                    <input
                        type="text"
                        value={phone}
                        onChange={(e) => setPhone(e.target.value)}
                        className='w-[400px]'
                    />
                    </label>

                </div>
                <div className='mt-[20px]'>
                    <label>
                    Email Adress (required)*
                    <br/>
                    <input
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        className='w-[400px]'
                    />
                    </label>
                </div>
                <div className='mt-[20px]'>
                    <label>
                    Your Message
                    <br/>
                    <input
                        type="text"
                        value={message}
                        onChange={(e) => setMessage(e.target.value)}
                        className='w-[400px] h-[100px]'
                    />
                    </label>
                </div>

                <button type='submit' className="w-[100px] h-[40px] mt-[30px] bg-emerald-800 text-white rounded-md place-self-center hover:bg-black transition">Send</button>

                </form>


            {submittedData && (
            <div>
                <h3>Submitted Data:</h3>
                <p>Name: {submittedData.name}</p>
                <p>Email: {submittedData.email}</p>
                <p>{submittedData.message}</p>
            </div>
            )}
      </div>
        </>
    )



}

export default ContactForm;



