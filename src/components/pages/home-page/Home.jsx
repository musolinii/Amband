import mobile from '/src/assets/mobile.png';
import { Link } from "react-router-dom";

function Home() {

  
  
  

  return (
    <>
     
    <div className="bg-[url('/src/assets/hero.png')] w-full h-[600px] ">
    </div>

    <div className="w-full h-[325px] grid ">
      <div className=" w-[1170px] h-[135px] self-center box-border ml-[200px]">

        <h4 className='text-lg/[28px] font-bold text-center'>WELCOME TO AMBAND</h4>

        <p className="text-sm/[14px] w-[800px] h-[50px] box-border text-center ml-[200px] mt-[30px] leading-relaxed">We are an innovative and dynamic information technology company that prides itself by offering bespoke and “out of the box” IT related solutions to our clients.</p>

      </div>

    </div>

    <div className="w-full h-[511px] grid grid-cols-2">

      <div className="bg-slate-200 w-[800px] h-[511px] ">

        <div className="w-[670px] h-[360px] mt-[80px] ml-[80px]">

          <h4 className="text-lg/[28px] font-bold mb-[50px]">WHO WE ARE </h4>

          <h4 className="text-lg/[28px] font-bold mb-[30px]">Our philosophy</h4>

          <p className="text-sm/[14px] leading-relaxed">We have a very good track record working with satisfied clients all around the globe. Up to now, no client was left unsatisfied. This is because we make sure that in every project partnership opportunity handed to us, requirements are met, all modifications are worked out, arising problems are diagnosed and given solution at the soonest possible time and continuous maintenance and updates are never forgotten.</p><br />
          <p className="text-sm/[14px] leading-relaxed">We can do all these because of the human and technology resources that we have. Amband gives you products and services that are worthy of every amount spent.</p>
        </div>

      </div>

      <div className="bg-[url('/src/assets/team.png')] w-[800px] h-[511px]">
      </div>

    </div>

    <div className="my-[100px] mx-[220px] w-[1170px] h-[85px]">
      <div className='w-full h-[85px] '>
        <h4 className='text-lg/[28px] font-bold text-center py-[20px]'>OUR WORK</h4>
      </div>
    </div>

    <div className="mx-[220px] w-[1170px] h-[600px] grid grid-cols-2">
      <div className='w-[550px] h-full grid gap-2 text-[14px] leading-relaxed'>
        <div className='w-[534px] h-[170px] '>
          <h5 className='font-bold mb-[20px]'>Our Services</h5>
          <p className='mb-[30px]'>Amband offers the following services to our clients; Software and website development, ICT consultancy, ICT support and maintenance, Monitoring and Evaluation, IS audit and IT governance.</p>
          <Link to="/services" className='text-blue-500'>Read More</Link>
        </div>
        <div className='w-[534px] h-[170px]'>
          <h5 className='font-bold mb-[20px]'>Security Products</h5>
          <p className='mb-[30px]'>Amband offers a variety of security services ranging from Absolute software, stoptrack and CCTV installation and maintenance.</p>
          <Link to="/security-products" className='text-blue-500'>Read More</Link>
        </div>
        <div className='w-[534px] h-[170px]'>
          <h5 className='font-bold mb-[20px]'>BIG DATA</h5>
          <p className='mb-[30px]'><b>Big Data</b> brings together <b>data</b> from many disparate sources and applications.</p>
          <Link to="/big-data" className='text-blue-500'>Read More</Link>
        </div>

      </div>

      <div className='w-[600px] h-full grid gap-2 text-[14px] leading-relaxed'>
        <div className='w-[534px] h-[170px] '>
          <h5 className='font-bold mb-[20px]'>Solutions</h5>
          <p className='mb-[30px]'>Amband offers the following solutions to our clients; Asset management system, Hospital Management Information Systems, Academic and student management systems.</p>
          <Link to="/solutions" className='text-blue-500'>Read More</Link>
        </div>
        <div className='w-[534px] h-[250px] '>
          <h5 className='font-bold mb-[20px]'>RFID</h5>
            <p>Amband offers the following RFID solutions;</p>
              <ul className='mb-[30px]'>
                <li>Supply chain management</li>
                <li>Asset/ inventory management</li>
                <li>Document/ file tracking</li>
                <li>Production automation</li>
                <li>Healthcare</li>
                <li>vehicle tracking and management</li>
              </ul>
          <Link to="/RFID-solutions" className='text-blue-500'>Read More</Link>

        </div>
        <div className='w-[534px] h-[170px] '>
          <h5 className='font-bold mb-[20px]'>Research</h5>
          <p className='mb-[30px]'>Professional ICT research Consultunts</p>
          <Link to="/research" className='text-blue-500'>Read More</Link>
        </div>

      </div>
    </div>

    <div className="w-full h-[377px]  grid" >
      <div className="self-center w-[1200px] h-[228px] ml-[200px] grid grid-cols-2 gap-y-0">
        <div className="w-[370px] h-[228px]">
        <img  src={mobile} alt={"Phone"}/>
        </div>
        <div className="w-[800px] h-[228px] ml-[20px]">
          <h4 className='text-lg/[28px] font-bold mb-[30px]'>MOBILE APP DEVELOPMENT</h4>
          <p className="text-sm/[14px] leading-relaxed mr-[30px]">Leverage our mobile application development teams to develop novel apps, which can help you to scale-up your businesses.</p>
        </div>

      </div>

    </div>

    <div className="w-full h-[304px] bg-blue-900 grid">
      <div className='w-[1170px] h-[154px] ml-[200px] self-center text-center'>
        <h2 className='text-3xl/[34px] text-white mb-[20px]'>Impressed With Our Services  ?</h2>
        <p className='text-sm/[14px] text-white'>Leave us a message or request for a services ?</p>
        <button onClick={()=> console.log("nnn")} className='bg-white text-black px-[20px] py-[10px] mt-[20px] text-sm rounded hover:bg-slate-500 transition'>Contact Us</button>
  
      </div>
    </div>
    </>
  )
}

export default Home;
