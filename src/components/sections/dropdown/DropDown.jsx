import { useState } from "react";

export default function DropDown () {

    const [Menu, setMenu] = useState(1)


    return(
        <>
            <div className="mt-[50px]">
                <h4 className="text-blue-500 text-center place-self-center text-[24px]">AMBAND document and file manaement system highlights</h4>
            </div>

            <div className="w-full flex place-content-center flex-row flex-wrap gap-8 mt-[50px] rounded bg-slate-300 sm:w-[1200px] text-cyan-800">
                <div onClick={()=> setMenu(1)} className="p-[20px] hover:bg-blue-800 hover:text-white transition"><p>1. Digital Identity</p></div>
                <div onClick={()=> setMenu(2)} className="p-[20px] hover:bg-blue-800 hover:text-white transition"><p>2. Access control</p></div>
                <div onClick={()=> setMenu(3)} className="p-[20px] hover:bg-blue-800 hover:text-white transition">3. File Transfer History</div>
                <div onClick={()=> setMenu(4)}className="p-[20px] hover:bg-blue-800 hover:text-white transition">4. Record Management</div>
                <div onClick={()=> setMenu(5)} className="p-[20px] hover:bg-blue-800 hover:text-white transition">5. Reporting</div>
            </div>

            {Menu == 1 && (
                <div className="grid grid-cols-1 sm:grid-cols-2 sm:ml-[200px] gap-2 sm:w-[1200px]">
                   <div className="mt-[40px]">
                        <img className='object-cover w-[596px]' src="/assets/access.jpg" alt="card" />
                   </div>
                   <div className="leading-relaxed text-[14px] p-[40px]">
                        <ul>
                            <li>
                                Every document is created with a RFID label tag encoded with a unique identification number
                            </li><br/>
                            <li>
                                Instant Document Search & Locating
                            </li><br />
                            <li>
                                Performs search by entering the identification number or file name to locate the file instantly
                            </li>
                        </ul>
                   </div>
                </div>
                )
            }
            {Menu == 2 && (
                <div className="sm:w-[1200px] p-[40px] text-[14px] sm:ml-[200px]">
                    <ul>
                        <li>Rule-based or role-based solution design eliminates unauthorized access of confidential information by illegitimate users and prevents restricted tasks</li><br />
                        <li>Real-time location and alert</li>
                    </ul>
                </div>
                )
            }
            {Menu == 3 && (
                <div className="sm:w-[1200px] p-[40px] text-[14px] sm:ml-[200px]">
                 <ul>
                     <li>Tracks chain-of-custody of files, ie. chronologically trailing the sequence of custody, control, transfer, analysis, and disposition</li>
                 </ul>
                </div>
                )
            }
            {Menu == 4 && (
                <div className="sm:w-[1200px] p-[40px] text-[14px] sm:ml-[200px]">
               <ul>
                   <li>Document inventory counts and audits</li>
               </ul>
                </div>
                )
            }
            {Menu == 5 && (
                <div className="sm:w-[1200px] p-[40px] text-[14px] sm:ml-[200px]">
                    <ul>
                        <li>Provides full information about document usage, ownership and status to management for reference</li>
                    </ul>
                </div>
                )
            }
        </>
    )
}

