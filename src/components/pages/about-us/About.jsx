
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
          <div className="w-[500px] h-[250px] border-solid border-2 border-black grid">
            <h3 className="font-bold place-self-center">MISSION</h3>

          </div>

          <div className="w-[500px] h-[250px] border-solid border-2 border-black grid">
            <h3 className="font-bold place-self-center">VISSION</h3>

          </div>

          <div className="w-[500px] h-[250px] border-solid border-2 border-black grid">
            <h3 className="font-bold place-self-center">OBJECTIBES</h3>

          </div>
        </div>
    
    </>
  )
}

export default About;
