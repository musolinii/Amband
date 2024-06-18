
function CS() {
  

    return (
    <>
      <div className="bg-[url('/src/assets/matrix.jpg')] w-full h-[170px] grid ">

        <span className='place-self-center text-white'>Cyber Security</span>

      </div>

      <div className="grid grid-cols-2 w-[1200px] h-full ml-[200px]"> 
        <div className="w-[600px] h-[445px] mt-[50px]">
          <div className="text-sm/[14px] px-[15px] leading-relaxed">
            <p className="text-left">
              There are two companies in this world, those that know they have been hacked and those that do not.
            </p><br />
            <p>
              The growth of cybercrime means businesses of all sizes need to rethink their approach to the security of their ICT infrastructure and information. The growth of cyber crime is largely attributed to its faceless nature (one cannot see the hackers), it is borderless (there are no geographic limitation), growing use of technology in profit, nonprofit organizations, educational institutions and governments.            </p><br />
            <p>
              AMBAND’s goal is to help clients to protect their ICT Assets and information from hackers. This we achieve through the following services
            </p>
            <ul>
              <li>Vulnerability Assessments</li>
              <li>Implement Security Architecture and operations</li>
              <li>Penetration Testing</li>
              <li>Disaster recovery</li>
              <li>Securing ICT assets</li>
              <li>ICT Department Training</li>
              <li>Employee training</li>
              <li>Compliance Assesments</li>
            </ul>
          </div>
        </div>

       <div className="w-full h-[445px] m-[20px]">
         <img src="src/assets/security.jpg" alt="data-analytics" className="w-full h-[400px]" />
       </div>         

      </div>
    </>
    )
  }
  
  export default CS;
  