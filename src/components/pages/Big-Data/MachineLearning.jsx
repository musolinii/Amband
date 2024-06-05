
function MachineLearning() {
  

  return (
    <>
      <div className="bg-[url('src/assets/images.jpeg')] w-full h-[170px] grid ">

        <p className='place-self-center text-white'>Machine Learning</p>

      </div>

      <div className="grid grid-cols-2 w-[1200px] h-full ml-[200px]">
         
        <div className="w-[600px] h-[445px] mt-[50px]">
          <div className="text-sm/[14px] px-[15px] leading-relaxed">

            <h4 className="text-lg/[28px] text-bold mb-[60px]">WHAT IS MACHINE LEARNING ?</h4>


            <p>
              Machine learning (ML) is the scientific study of algorithms and statistical models that computer systems use to perform a specific task without using explicit instructions, relying on patterns and inference instead. It is seen as a subset of artificial intelligence. Machine learning algorithms build a mathematical model based on sample data, known as “training data”, in order to make predictions or decisions without being explicitly programmed to perform the task.     
            </p><br />
            <p>
              Machine learning can also be described as a data analytics technique that teaches computers to do what comes naturally to humans and animals: learn from experience. Machine learning algorithms use computational methods to “learn” directly from data by relying on a predetermined equation as a model.
            </p><br />
          </div>
        </div>

        <div className="w-full h-[445px] m-[20px]">
          <img src="src/assets/ml.png" alt="data-analytics" className="w-full h-[400px]" />
        </div>

        <div className="w-full h-[445px] m-[20px]">
          <img src="src/assets/ml-2.jpeg" alt="data-analytics" className="w-full h-[400px]" />

        </div>

        <div className="w-[600px] h-[445px] mt-[50px] ml-[30px]">
          <div className="text-sm/[14px] px-[15px] leading-relaxed">
            <p>
             Machine learning is a branch of Artificial Intelligence based on the idea that systems can learn from data, identify patterns and make decisions without/ with minimal human intervention.</p><br/>       
            <p>
              The basic premise of machine learning is to build algorithms that can receive input data and use statistical analysis to predict an output while updating outputs as new data becomes available.
            </p><br />
           
          </div>
        </div>
        

      </div>
    
    </>
  )
  }
  
  export default MachineLearning;
  