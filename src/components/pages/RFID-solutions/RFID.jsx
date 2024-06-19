
function RFID() {
  

  return (
    <>

      <div className="bg-[url('assets/laptop.png')] w-full h-[170px] grid ">

        <span className='place-self-center text-white'>RFID Solutions</span>

      </div>

      <div className="grid grid-cols-2 w-[1200px] h-full ml-[200px]"> 
        <div className="w-[600px] h-[445px] mt-[50px]">
          <div className="text-sm/[14px] px-[15px] leading-relaxed">
            <p className="text-left">
              Radio-frequency identification (RFID) is the use of a wireless non-contact system that uses radio-frequency electromagnetic fields to transfer data from a tag attached to an object, for the purposes of automatic identification and tracking. Some tags require no battery and are powered by the electromagnetic fields used to read them. Others use a local power source and emit radio waves (electromagnetic radiation at radio frequencies). The tag contains electronically stored information which can be read from up to several meters (yards) away. Unlike a bar code, the tag does not need to be within line of sight of the reader and may be embedded in the tracked object.
            </p><br />
          </div>
         </div>
 
         <div className="w-full h-[445px] m-[20px]">
           <img src="/src/assets/RFID.jpg" alt="data-analytics" className="w-full h-[400px]" />
         </div>         
 
      </div>

      <div className='grid grid-cols-4 gap-2 w-[1200px] ml-[200px] mb-[80px]'>
          <div className="w-[260px] h-[260px] border-solid border-2 border-black border-dashed grid">
            <div className="p-[20px]">
            <h4 className="mb-[10px] font-bold">RFID/Bar-Code Asset Management</h4>
            <p className="text-[11px] leading-relaxed">Amband provides clients with a proven fixed asset solution that enables the management of all types of fixed assets including property, equipment and furniture in line with the latest corporate governance regulations.</p>
          </div>
          <button className="w-[100px] h-[40px] bg-blue-800 text-white rounded-md place-self-center">Read More</button>
          </div>

        <div className="w-[260px] h-[260px] border-solid border-2 border-black border-dashed grid">
          <div className="p-[20px]">
            <h4 className="mb-[10px] font-bold">RFID Supply Chain Management</h4>
            <p className="text-[11px] leading-relaxed">Data visualization is the presentation of data in a pictorial or graphical format. It enables The key to getting the most business value out of retail RFID technology is to maintain visibility across the supply chain and maximize the opportunity for benefits.</p>
          </div>
          <button className="w-[100px] h-[40px] bg-blue-800 text-white rounded-md place-self-center">Read More</button>

        </div>


        <div className="w-[260px] h-[260px] border-solid border-2 border-black border-dashed grid ">
          <div className="p-[20px]">
            <h4 className="mb-[10px] font-bold">RFID Document and File Management</h4>
            <p className="text-[11px] leading-relaxed">RFID document and file management systems are designed to reduce employee time spent maintaining and managing hundreds or thousands of files within a workplace.</p>
          </div>
          <button className="w-[100px] h-[40px] bg-blue-800 text-white rounded-md place-self-center">Read More</button>


        </div>

        <div className="w-[260px] h-[260px] border-solid border-2 border-black border-dashed grid">
        <div className="p-[20px]">
            <h4 className="mb-[10px] font-bold">RFID Armory Management</h4>
            <p className="text-[11px] leading-relaxed">AMBAND has partnered with ARMS RFID to be able to supply their RFID Armory management system. The ARMS Armory Management System is a computerized registry of weapons, gear, ammo, officers, certifications</p>
          </div>
          <button className="w-[100px] h-[40px] bg-blue-800 text-white rounded-md place-self-center">Read More</button>

        </div>

      </div>


    </>
  )
}

export default RFID;
