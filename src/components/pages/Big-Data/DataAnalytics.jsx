
function DataAnalytics() {
  

  return (
    <>
      <div className="bg-[url('src/assets/sub-banner01.png')] w-full h-[170px] grid ">

        <p className='place-self-center text-white'>Data Analytics</p>

      </div>

      <div className="grid grid-cols-2 w-[1200px] h-[555px] ml-[200px] mt-[100px]">
        <div className="w-[600px] h-[400px] ">
          <img src="src/assets/analysis.png" alt="data-analytics" className="w-full h-[400px]" />

        </div>

        <div className="w-[600px] text-sm/[14px] px-[15px] py-[20px] leading-relaxed">
          <p>
            Big data analytics is the use of advanced analytic techniques against very large, diverse data sets that include structured, semi-structured and unstructured data, from different sources and sizes ranging from gigabytes to terabytes.
          </p><br />
          <p>
            Big data analytics is the often complex process of examining large and varied data sets, to uncover information — such as hidden patterns, unknown correlations, market trends and customer preferences — that can help organizations make informed business decisions. Analysis of big data allows analysts, researchers, scientists and business users to make better and faster decisions using data that was previously inaccessible or unusable.
          </p><br />
          <p>
            Businesses can use advanced analytics techniques such as text analytics, machine learning, predictive analytics, data mining, statistics, data management and natural language processing to gain new insights from previously untapped data sources independently or together with existing enterprise data.
          </p><br />
          <p>
          Data analytics can also include exploratory data analysis (to identify patterns and relationships in data) and confirmatory data analysis (applying statistical techniques to find out whether an assumption about a particular data set is true or false.)
          </p>
        </div>

      </div>
      
    </>
  )
}
  
  export default DataAnalytics;
  