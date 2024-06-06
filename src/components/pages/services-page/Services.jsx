
function Services() {
  

  return (
    <>
      <div className="bg-[url('/src/assets/services.jpg')] w-full h-[170px] grid ">

        <span className='place-self-center text-white'>Services</span>

      </div>

      <div className="w-[1170px] h-full  ml-[200px] grid gap-2 mb-[30px]">

        <div className="w-full h-[150px] grid mb-[50px]">
          <h4 className="text-[28px] place-self-center font-bold text-blue-800">WHAT WE OFFER</h4>
          <p className="place-self-center text-[14px]">Amband offers a variet of Information tecnology services from;</p>

        </div>
        
        <div className="w-full h-[300px] flex flex-row justify-between">
          <img src="/src/assets/code.jpeg" alt="code" />

          <div className="w-[530px] h-[250px] text-right">
            <h5 className="text-[18px] text-blue-800 font-bold mb-[40px]">01. Website And Software Development</h5>
            <p><strong><em>Developing Responsive, mobile Friendly Websites</em></strong></p><br />
            <p className="text-[14px] mb-[30px]">Website design & development is a process that has different steps taken to create, launch and make a website accessible.</p>
            <button className="w-[100px] h-[40px] bg-blue-800 text-white rounded-md place-self-center">Read More</button>
          </div>
          
        </div>

        <div className="w-full h-[300px] flex flex-row justify-between">

          <div className="w-[530px] h-[250px] text-left">
            <h5 className="text-[18px] text-blue-800 font-bold mb-[40px]">02. ICT Consulting Services</h5>
            <p><strong><em>We Provide Expert Advice To Clients</em></strong></p><br />
            <p className="text-[14px] mb-[30px]">Information and communication technologies (ICT) have become critical business tools, essential in any workplace, educational or entertainment environment..</p>
            <button className="w-[100px] h-[40px] bg-blue-800 text-white rounded-md place-self-center">Read More</button>
          </div>

          <img src="/src/assets/handshake.jpg" alt="code" />
          
        </div>

        <div className="w-full h-[300px] flex flex-row justify-between">
          <img src="/src/assets/bpr.jpeg" alt="code" />

          <div className="w-[530px] h-[250px] text-right">
            <h5 className="text-[18px] text-blue-800 font-bold mb-[40px]">03. Business Process Reengineering</h5>
            <p><strong><em>We reengineer your business to success</em></strong></p><br />
            <p className="text-[14px] mb-[30px]"><b>Business process reengineering</b> (<b>BPR</b>) is a business management strategy,  focusing on the analysis and design of workflows and business processes within an organization. At Amband We aim to help organizations fundamentally rethink how they do their work in order to improve customer service, cut operational costs, and become world-class competitors..</p>
            <button className="w-[100px] h-[40px] bg-blue-800 text-white rounded-md place-self-center">Read More</button>
          </div>
          
        </div>
        
        <div className="w-full h-[300px] flex flex-row justify-between">

          <div className="w-[530px] h-[250px] text-left">
            <h5 className="text-[18px] text-blue-800 font-bold mb-[40px]">04. IT Support</h5>
            <p><strong><em>We offer IT support and maintenance services to our clients.</em></strong></p><br />
            <p className="text-[14px] mb-[30px]">We are regarded as the “go-to” service provider by organizations as we provide friendly customer service; our qualified & highly competent technicians work fast to get your equipment serviced and ready as quick as possible.</p>
            <button className="w-[100px] h-[40px] bg-blue-800 text-white rounded-md place-self-center">Read More</button>
          </div>

          <img src="/src/assets/support.png" alt="code" />

          
          
        </div>

        <div className="w-full h-[300px] flex flex-row justify-between">
          <img src="/src/assets/audit.jpg" alt="code" />

          <div className="w-[530px] h-[250px] text-right">
            <h5 className="text-[18px] text-blue-800 font-bold mb-[40px]">05. IS Audit and Governance</h5>
            <p><strong><em>We Audit your information System To enhance your business</em></strong></p><br />
            <p className="text-[14px] mb-[30px]"><strong>Information technology or Information systems audit</strong> , is an examination of the management controls within an Information technology (IT) infrastructure. The evaluation of obtained evidence determines if the information systems are safeguarding assets, maintaining data integrity, and operating effectively to achieve the organization’s goals or objectives..</p>
            <button className="w-[100px] h-[40px] bg-blue-800 text-white rounded-md place-self-center">Read More</button>
          </div>
          
        </div>

        <div className="w-full h-[300px] flex flex-row justify-between">

          <div className="w-[530px] h-[250px] text-left">
            <h5 className="text-[18px] text-blue-800 font-bold mb-[40px]">06. Cyber Security</h5>
            <p><strong><em>AMBAND’s goal is to help clients to protect their ICT Assets and information from hackers.</em></strong></p><br />
            <p className="text-[14px] mb-[10px]">The growth of cybercrime means businesses of all sizes need to rethink their approach to the security of their ICT infrastructure and information. The growth of cyber crime is largely attributed to its faceless nature (one cannot see the hackers), it is borderless (there are no geographic limitation), growing use of technology in profit, nonprofit organizations, educational institutions and governments.</p>
            <button className="w-[100px] h-[40px] bg-blue-800 text-white rounded-md place-self-center">Read More</button>
          </div>

          <img src="/src/assets/computers.jpg" alt="code" />
          
        </div>
      </div>
    </>
  )
}

export default Services;
