import { Link } from "react-router-dom";

function BigData() {
  

  return (
    <>
      <div className="bg-[url('/assets/sub-banner01.png')] w-full h-[170px] grid ">

        <p className='place-self-center text-black'>BIG DATA</p>
      </div>

      <div className="grid grid-cols-2 w-[1200px] h-full">

        <div className="w-full h-[445px] mr-[30px] mt-[30px]">
          <img src="/assets/bigdata.png" alt="data-analytics" className="w-full h-[400px]" />
        </div>
         
        <div className="w-[600px] h-full mt-[50px] ml-[30px]">
          <div className="text-sm/[14px] px-[15px] leading-relaxed">
            <p>
              The term “big data” refers to data that is so large, fast or complex that it’s difficult or impossible to process using traditional methods. Big data describes the large volume of data – both structured, semi-structured and unstructured – that inundates a business on a day-to-day basis.            </p><br />
            <p>
              Big data has one or more of the following characteristics: high volume, high velocity or high variety. Artificial intelligence (AI), mobile, social and the Internet of Things (IoT) are driving data complexity through new forms and sources of data.            </p><br />
            <p>
              “Big data” is a field that devises ways to analyze, systematically extract information from, or otherwise deal with data sets that are too large or complex to be dealt with by traditional data-processing application software. Big data challenges include capturing data, data storage, data analysis, search, sharing, transfer, visualization, querying, updating, information privacy and data source.          
            </p><br />
            <p>
              But it’s not the amount of data that’s important. It’s what organizations do with the data that matters. These massive volumes of data can be used to address business problems organizations wouldn’t have been able to tackle before. Big data can be analyzed for insights that lead to better decisions and strategic business moves.
            </p><br />
            <p>
              Current usage of the term big data tends to refer to the use of predictive analytics, user behavior analytics, or certain other advanced data analytics methods that extract value from data, and seldom to a particular size of data set.
            </p>
          </div>
        </div>

        
        

      </div>

      <div className="grid grid-cols-3 gap-2 w-[1200px] mb-[40px]">
        <div className="w-[360px] h-[250px] mt-[50px] border-2 border-dashed border-black grid">
          <div className="place-self-center px-[10px]">
            <h4 className="font-bold text-[28px]">Data Analytics</h4>
            <p className="text-[11px]">Big data analytics is the use of advanced analytic techniques against very large, diverse data sets that include structured, semi-structured and unstructured data, from different sources and sizes ranging from gigabytes to terabytes.</p>
            <Link to="/data-analytics">
              <button className="text-black w-[100px] h-[30px] mt-[10px] border-2 border-blue-600 rounded-md">Read More</button>
            </Link>
          </div>
                
        </div>

        <div className="w-[360px] h-[250px] mt-[50px] border-2 border-dashed border-black grid">
          <div className="place-self-center px-[10px]">
            <h4 className="font-bold text-[28px]">Visualization</h4>
            <p className="text-[11px]">Data visualization is the presentation of data in a pictorial or graphical format. It enables decision makers to see analytics presented visually, so they can grasp difficult concepts or identify new patterns.</p>
            <Link to = "/visualization">
             <button className="text-black w-[100px] h-[30px] mt-[10px] border-2 border-blue-600 rounded-md">Read More</button>
            </Link>
          </div>
                
        </div>

        <div className="w-[360px] h-[250px] mt-[50px] border-2 border-dashed border-black grid">
          <div className="place-self-center px-[10px]">
            <h4 className="font-bold text-[28px]">Machine Learning</h4>
            <p className="text-[11px]">Machine learning (ML) is the scientific study of algorithms and statistical models that computer systems use to perform a specific task without using explicit instructions, relying on patterns and inference instead.</p>
            <Link to = "/machine-learning">
              <button className="text-black w-[100px] h-[30px] mt-[10px] border-2 border-blue-600 rounded-md">Read More</button>
            </Link>
          </div>
                
        </div>
      </div>
    
    
    </>
  )
}

export default BigData;
