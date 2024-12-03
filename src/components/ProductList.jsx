const ProductList = () => {
    return (
      <section className="flex flex-col font-raleway w-full">
        <div className="flex flex-col lg:flex-row px-14 py-5">
          {/* Card 1 */}
          <div className="w-full lg:w-1/5 flex flex-col px-3 pb-3">
            <div className="bg-white border border-gray-200 flex flex-col justify-center items-center py-5 px-5">
              <img src="./images/stone ocean.png" className="w-40 md:w-56 lg:w-40" alt="Stone Ocean" />
              <div className="pt-4 w-full">
                <p className="text-center font-bold">Stone Ocean</p>
                <h1 className="my-3 text-green-800 text-center">
                  <strong>$123</strong>
                </h1>
                <center>
                  <button className="bg-[#ffaed5] text-[#5b4b45] hover:bg-black hover:bg-opacity-30 py-2 px-3 rounded-lg font-bold">
                    Buy now
                  </button>
                </center>
              </div>
            </div>
          </div>
  
          {/* Card 2 */}
          <div className="w-full lg:w-1/5 flex flex-col px-3 pb-3">
            <div className="bg-white border border-gray-200 flex flex-col justify-center items-center py-5 px-5">
              <img src="./images/stardust crusssders.png" className="w-40 md:w-56 lg:w-40" alt="Stardust Crusaders" />
              <div className="pt-4 w-full">
                <p className="text-center font-bold">Stardust Crusaders</p>
                <h1 className="my-3 text-green-800 text-center">
                  <strong>$150</strong>
                </h1>
                <center>
                  <button className="bg-[#ffaed5] text-[#5b4b45] hover:bg-black hover:bg-opacity-30 py-2 px-3 rounded-lg font-bold">
                    Buy now
                  </button>
                </center>
              </div>
            </div>
          </div>
  
          {/* Card 3 */}
          <div className="w-full lg:w-1/5 flex flex-col px-3 pb-3">
            <div className="bg-white border border-gray-200 flex flex-col justify-center items-center py-5 px-5">
              <img src="./images/prt 4.png" className="w-40 md:w-56 lg:w-40" alt="Diamond is Unbreakable" />
              <div className="pt-4 w-full">
                <p className="text-center font-bold">Diamond is Unbreakable</p>
                <h1 className="my-3 text-green-800 text-center">
                  <strong>$130</strong>
                </h1>
                <center>
                  <button className="bg-[#ffaed5] text-[#5b4b45] hover:bg-black hover:bg-opacity-30 py-2 px-3 rounded-lg font-bold">
                    Buy now
                  </button>
                </center>
              </div>
            </div>
          </div>
  
          {/* Card 4 */}
          <div className="w-full lg:w-1/5 flex flex-col px-3 pb-3">
            <div className="bg-white border border-gray-200 flex flex-col justify-center items-center py-5 px-5">
              <img src="./images/jojos.png" className="w-40 md:w-56 lg:w-40" alt="Jojo's Bizarre Adventure" />
              <div className="pt-4 w-full">
                <p className="text-center font-bold">Jojo's Bizarre Adventure</p>
                <h1 className="my-3 text-green-800 text-center">
                  <strong>$140</strong>
                </h1>
                <center>
                  <button className="bg-[#ffaed5] text-[#5b4b45] hover:bg-black hover:bg-opacity-30 py-2 px-3 rounded-lg font-bold">
                    Buy now
                  </button>
                </center>
              </div>
            </div>
          </div>
  
          {/* Card 5 */}
          <div className="w-full lg:w-1/5 flex flex-col px-3 pb-3">
            <div className="bg-white border border-gray-200 flex flex-col justify-center items-center py-5 px-5">
              <img src="./images/joly.png" className="w-40 md:w-56 lg:w-40" alt="Jolyne Cujoh" />
              <div className="pt-4 w-full">
                <p className="text-center font-bold">Jolyne Cujoh</p>
                <h1 className="my-3 text-green-800 text-center">
                  <strong>$125</strong>
                </h1>
                <center>
                  <button className="bg-[#ffaed5] text-[#5b4b45] hover:bg-black hover:bg-opacity-30 py-2 px-3 rounded-lg font-bold">
                    Buy now
                  </button>
                </center>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  };
  
  export default ProductList;
  