import React from 'react'
import './About.css'

function About() {
  

  return (
    <>
      <div className="bg-[url('/src/assets/team-banner.png')] w-full h-[170px] grid ">

        <span className='place-self-center text-white'>About Us</span>

      </div>

      <div className="w-full h-[400px] grid grid-cols-2">

        <div className=" w-[800px] h-[511px] ">

          <div className="w-[670px] h-[360px] mt-[80px] ml-[80px]">


            <h6 className="text-lg/[28px] font-bold mb-[30px]">Amband is an Information System Company</h6>

            <p className="text-sm/[14px] leading-relaxed">We are an innovative and dynamic information technology company that prides itself by offering bespoke and <strong>"out of the box"</strong> IT related solutions to our clients. With Amband’s company philosophy of providing a large range of services and solutions at an affordable price, we should be your one and only port of call.</p><br />
            <p className="text-sm/[14px] leading-relaxed">Amband has a specialist team of consultants who are skilled and qualified in their various fields, technologies and methodologies and who discharge their duties effectively, efficiently and flexibly to ensure an organization’s goals are met and objectives satisfied.</p>
          </div>

        </div>

        <div className="bg-[url('/src/assets/team.png')] w-[800px] h-[370px]">
        </div>

      </div>

      <div className='grid grid-cols-3 w-full h-[405px] place-items-center'>

          <div className="flip-card">
            <div className="flip-card-inner">
              <div className="flip-card-front flex items-center justify-center text-black border-solid border-2 border-black">
                <h3 className="font-bold place-self-center">MISSION</h3>
              </div>
              <div className="flip-card-back flex items-center justify-center text-black text-2xl border-solid bg-white border-2 border-black flex flex-col leading-relaxed ">
                <h3 className='text-sm font-bold my-[20px]'>Mission</h3>
                <p className='text-center text-sm'>To provide fast, secure and reliable solutions and services which are aligned to the clients’ needs and help their organization to achieve their set goals and objectives.</p>
              </div>
            </div>
          </div>

          <div className="flip-card">
            <div className="flip-card-inner">
              <div className="flip-card-front flex items-center justify-center text-black border-solid border-2 border-black">
                <h3 className="font-bold place-self-center">VISSION</h3>
              </div>
              <div className="flip-card-back flex items-center justify-center text-black text-2xl border-solid bg-white border-2 border-black flex flex-col ">
              <h3 className='text-sm font-bold my-[20px]'>Vission</h3>
              <p className='text-center text-sm'>To be the best provider of integrated ICT security, solutions and services.</p>
              </div>
            </div>
          </div>

          <div className="flip-card">
            <div className="flip-card-inner">
              <div className="flip-card-front flex items-center justify-center text-black border-solid border-2 border-black">
                <h3 className="font-bold place-self-center">OBJECTIVES</h3>
              </div>
              <div className="flip-card-back flex items-center justify-center text-black border-solid bg-white border-2 border-black text-sm flex flex-col leading-lazy">
                <h3 className='text-sm font-bold my-[20px]'>Objectives</h3>
                <p className='mb-[20px]'>Amband Objectives are as follows;</p>
                <ul>
                  <li>Commitment to the customer</li>
                  <li>Teamwork</li>
                  <li>Provision of quality services and solutions to our customers.</li>
                  <li>Meeting the customers' needs within the agreed period.</li>
                  <li>Putting customers’ needs first.</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
    
    </>
  )
}

export default About;


// <div class="perspective-1000 cursor-pointer">
// <div class="relative transform-style-3d transition-transform duration-700 transform text-white hover:rotate-y-180">
//   <div class="backface-hidden absolute w-full h-full inset-0 rotate-y-0">
//     front
//   </div>
//   <div class="backface-hidden absolute w-full h-full inset-0 rotate-y-180">
//     back
//   </div>
// </div>
// </div>