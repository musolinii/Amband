
function RBAM() {
  

    return (
      <>

      <div className="bg-[url('assets/laptop.png')] w-full h-[170px] grid ">

        <span className='place-self-center text-white'>RFID Solutions</span>

      </div>

      <div className="grid grid-cols-2 w-[1200px] h-full ml-[200px] mt-[100px]"> 

        <div className="w-full h-[445px] m-[20px]">
           <img src="/src/assets/RFID.jpg" alt="data-analytics" className="w-full h-[400px]" />
        </div>    

        <div className="w-[600px] h-[445px] mt-[50px] ml-[30px]">
          <div className="text-sm/[14px] px-[15px] leading-relaxed">
            <p className="text-left">
              Amband provides clients with a proven fixed asset solution that enables the management of all types of fixed assets including property, equipment and furniture in line with the latest corporate governance regulations.
            </p><br />
            <p className="text-left">
              A powerful, best-of-breed <strong>assest system</strong>  that can control, track and record those changes that occur within an asset’s lifetime, Amband’s software can be interrogated so as to provide accurate, up-to-date and historical data spanning from the point at which the asset was entered onto the system, to its present state.
            </p><br />
          </div>
        </div>

        <div>
          <p className="mb-[50px]">Ambands Asset Management system contains the following Modules</p>
          <ul>
            <li>Fixed asset accounting</li>
            <li>Capital Project Control</li>
            <li>Lease accounting</li>
            <li>Asset budgeting and forecasting</li>
            <li>Business Intelligence</li>
            <li>Asset tracking utilising barcoding/RFID</li>
            <li>Inventory Control</li>
            <li>Computerised maintenance management</li>
            <li>HelpDesk Management</li>
          </ul>
        </div>

        <div className="w-full h-[445px] m-[20px]">
           <img src="/src/assets/rfid.jpg" alt="data-analytics" className="w-full h-[400px]" />
        </div>    
      </div>

      </>
    )
  }
  
  export default RBAM;
  