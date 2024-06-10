import React, { useState } from 'react';    


function ContactForm() {

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');
    const [message, setMessage] = useState('');
    const [submittedData, setSubmittedData] = useState(null);

    const handleSubmit = (event) => {
        event.preventDefault();
        setSubmittedData({ name, email });
    };


    return(
        <>
        <div className='mx-px'>
            <form onSubmit={handleSubmit}>
                <div>
                    <label>
                    Your Name:
                    <input
                        type="text"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                    />
                    </label>
                </div>
                <div>
                    <label>
                    Your Phone:
                    <input
                        type="text"
                        value={phone}
                        onChange={(e) => setPhone(e.target.value)}
                    />
                    </label>
                </div>
                <div>
                    <label>
                    Email Adress:
                    <input
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />
                    </label>
                </div>
                <div>
                    <label>
                    Your Message:
                    <input
                        type="text"
                        value={message}
                        onChange={(e) => setMessage(e.target.value)}
                    />
                    </label>
                </div>
                <button type="submit">Submit</button>
            </form>
            {submittedData && (
            <div>
                <h3>Submitted Data:</h3>
                <p>Name: {submittedData.name}</p>
                <p>Email: {submittedData.email}</p>
            </div>
            )}
      </div>
        </>
    )



}

export default ContactForm;



