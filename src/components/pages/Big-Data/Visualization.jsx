
function Visualization() {
  
  return (
    <>
      <div className="bg-[url('/assets/data-banner.png')] w-full h-[170px] grid ">

        <p className='place-self-center text-black'>Data Visualization</p>

      </div>

      <div className="grid grid-cols-2 w-[1200px] h-full ">
         
        <div className="w-[600px] h-[445px] mt-[50px]">
          <div className="text-sm/[14px] px-[15px] leading-relaxed">
            <p>
              Data visualization is the presentation of data in a pictorial or graphical format. It enables decision makers to see analytics presented visually, so they can grasp difficult concepts or identify new patterns. With interactive visualization, one can take the concept a step further by using technology to drill down into charts and graphs for more detail, interactively changing what data you see and how it’s processed.
            </p><br />
            <p>
              Basically data visualization describes any effort to help people understand the significance of data by placing it in a visual context. Patterns, trends and correlations that might go undetected in text-based data can be exposed and recognized easier with data visualization software.
            </p><br />
            <p>
              It is also a powerful communication tool when done right, it delivers information with both the weight of respected research, and the cut-through clarity of good design.
            </p><br />
          </div>
        </div>

        <div className="w-full h-[445px] m-[20px]">
          <img src="/assets/graph-1.png" alt="data-analytics" className="w-full h-[400px]" />
        </div>

        <div className="w-full h-[445px] m-[20px]">
          <img src="/assets/graph.png" alt="data-analytics" className="w-full h-[400px]" />

        </div>

        <div className="w-[600px] h-[445px] mt-[50px] ml-[30px]">
          <div className="text-sm/[14px] px-[15px] leading-relaxed">
            <p>
              Effective visualization helps users analyze and reason about data and evidence. It makes complex data more accessible, understandable and usable. Users may have particular analytical tasks, such as making comparisons or understanding causality, and the design principle of the graphic (i.e., showing comparisons or showing causality) follows the task. Tables are generally used where users will look up a specific measurement, while charts of various types are used to show patterns or relationships in the data for one or more variables.            </p><br />
            <p>
              The main data visualization goal is to distill large datasets into visual graphics to allow for easy understanding of complex relationships within the data. It is often used interchangeably with terms such as information graphics, statistical graphics, and information visualization.            </p><br />
            <p>
              Because of the way the human brain processes information, using charts or graphs to visualize large amounts of complex data is easier than poring over spreadsheets or reports. Data visualization is a quick, easy way to convey concepts in a universal manner – and you can experiment with different scenarios by making slight adjustments.            </p><br />
          </div>
        </div>
        

      </div>
    
    </>
  )
  }
  
  export default Visualization;