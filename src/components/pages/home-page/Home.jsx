


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
    </>
  )
}

export default Home;
