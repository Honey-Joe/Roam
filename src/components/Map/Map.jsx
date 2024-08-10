import { cross, five, four, map, one, six, three, two } from "../../assets/image";

const Map = (props) => {
  return (
    <>
      <div className="2xl:container bg-[#F9F9F9]">
        <div className="w-[80%] mx-auto bg-white grid grid-cols-1 py-10 md:w-[80%] gap-10">
          <div className="flex justify-center flex-col items-center w-[70%] mx-auto gap-10">
            <div className="flex flex-col items-center">
              <p className="font-[PlayfairDisplay] italic text-[20px] font-bold text-[#ff681a]">
                Modern & Beautiful
              </p>
              <p className="font-[Montserrat] text-[48px] font-bold text-[#303030] leading-none text-center">
                Explore the World For Yourself
              </p>
            </div>
            
          </div>
          <div className="relative md:w-[70%] mx-auto">
              <img src={map} alt="map" className="" />
              <div className="">
                {/* first card  */}
                <div className="">
                  <img
                    src={one}
                    alt="one"
                    className="absolute top-[8%] right-[10%] h-[11%] md:h-[7%] z-0"
                    onClick={()=>{
                        const cross = document.getElementById("cross")
                        const d= document.getElementById("dialog")
                        d.classList.toggle("hidden")
                        cross.classList.toggle("hidden")
                    }}
                  />
                  <img
                    src={cross}
                    alt="one"
                    className="hidden absolute top-[8%] right-[10%] h-[11%] md:h-[7%] z-0"
                    id="cross"
                    onClick={()=>{
                        const cross = document.getElementById("cross")
                        const d= document.getElementById("dialog")
                        d.classList.toggle("hidden")
                        cross.classList.toggle("hidden")
                    }}
                  />
                  
                  <div className="hidden border-[3px] border-[#ff681a] px-6 py-1 bg-white w-[65%] absolute top-[20%] md:top-[5%] left-[20%] md:left-[40%] z-10 md:w-[45%] md:px-7 md:py-9" id="dialog">
                    <div className=" flex flex-col gap-5">
                        <div className="flex flex-col gap-2">
                      <p className="font-[Playfair] italic font-bold text-[20px] text-[#ff681a] leading-none">Asian Continent</p>
                      <p className="font-[Montserrat] font-bold text-balance md:text-[33px] text-[#303030] leading-none">Discover Culture</p>

                        </div>
                      <p className="font-[Montserrat] font-light text-[15px] text-[#303030]">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Tempore asperiores, 
                      </p>
                    </div>
                  </div>
                </div>
                {/* second card  */}
                <div className="transition-all">
                  <img
                    src={two}
                    alt="two"
                    className="absolute top-[10%] right-[45%] h-[11%] md:h-[7%] z-0"
                    onClick={()=>{
                        const cross = document.getElementById("cross2")
                        const d= document.getElementById("dialog2")
                        d.classList.toggle("hidden")
                        cross.classList.toggle("hidden")
                    }}
                  />
                  <img
                    src={cross}
                    alt="two"
                    className="hidden absolute top-[10%] right-[45%] h-[11%] md:h-[7%] z-0"
                    id="cross2"
                    onClick={()=>{
                        const cross = document.getElementById("cross2")
                        const d= document.getElementById("dialog2")
                        d.classList.toggle("hidden")
                        cross.classList.toggle("hidden")
                    }}
                  />
                  
                  <div className="hidden border-[3px] border-[#ff681a] px-6 py-1 bg-white w-[65%] absolute top-[25%] md:top-[5%] left-[20%] md:left-[5%] z-10 md:w-[45%] md:px-7 md:py-10 transition-all" id="dialog2">
                  <div className=" flex flex-col gap-5">
                        <div className="flex flex-col gap-2">
                      <p className="font-[Playfair] italic font-bold text-[20px] text-[#ff681a] leading-none">European Continent</p>
                      <p className="font-[Montserrat] font-bold text-balance md:text-[33px] text-[#303030] leading-none">Discover Culture</p>

                        </div>
                      <p className="font-[Montserrat] font-light text-[15px] text-[#303030]">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Tempore asperiores, 
                      </p>
                    </div>
                  </div>
                </div>
                {/* third card  */}
                <div className="">
                  <img
                    src={three}
                    alt="three"
                    className="absolute top-[36%] right-[42%] h-[11%] md:h-[7%] z-0"
                    onClick={()=>{
                        const cross = document.getElementById("cross3")
                        const d= document.getElementById("dialog3")
                        d.classList.toggle("hidden")
                        cross.classList.toggle("hidden")
                    }}
                  />
                  <img
                    src={cross}
                    alt="three"
                    className="hidden absolute top-[36%] right-[42%] h-[11%] md:h-[7%] z-0"
                    id="cross3"
                    onClick={()=>{
                        const cross = document.getElementById("cross3")
                        const d= document.getElementById("dialog3")
                        d.classList.toggle("hidden")
                        cross.classList.toggle("hidden")
                    }}
                  />
                  
                  <div className="hidden border-[3px] border-[#ff681a] px-6 py-1 bg-white w-[65%] absolute top-[55%] md:top-[5%] left-[20%] md:left-[9%] z-10 md:w-[45%] md:px-7 md:py-10" id="dialog3">
                  <div className=" flex flex-col gap-5">
                        <div className="flex flex-col gap-2">
                      <p className="font-[Playfair] italic font-bold text-[20px] text-[#ff681a] leading-none">African Continent</p>
                      <p className="font-[Montserrat] font-bold text-balance md:text-[33px] text-[#303030] leading-none">Discover Culture</p>

                        </div>
                      <p className="font-[Montserrat] font-light text-[15px] text-[#303030]">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Tempore asperiores, 
                      </p>
                    </div>
                  </div>
                </div>
                {/* fourth card  */}
                <div className="">
                  <img
                    src={four}
                    alt="four"
                    className="absolute top-[5%] left-[10%] h-[11%] md:h-[7%] z-0"
                    onClick={()=>{
                        const cross = document.getElementById("cross4")
                        const d= document.getElementById("dialog4")
                        d.classList.toggle("hidden")
                        cross.classList.toggle("hidden")
                    }}
                  />
                  <img
                    src={cross}
                    alt="four"
                    className="hidden absolute top-[5%] left-[10%] h-[11%] md:h-[7%] z-0"
                    id="cross4"
                    onClick={()=>{
                        const cross = document.getElementById("cross4")
                        const d= document.getElementById("dialog4")
                        d.classList.toggle("hidden")
                        cross.classList.toggle("hidden")
                    }}
                  />
                  
                  <div className="hidden border-[3px] border-[#ff681a] px-6 py-1 bg-white w-[65%] absolute top-[5%] md:top-[5%] left-[20%] md:left-[15%] z-10 md:w-[45%] md:px-7 md:py-10" id="dialog4">
                  <div className=" flex flex-col gap-5">
                        <div className="flex flex-col gap-2">
                      <p className="font-[Playfair] italic font-bold text-[20px] text-[#ff681a] leading-none">North America</p>
                      <p className="font-[Montserrat] font-bold text-balance md:text-[33px] text-[#303030] leading-none">Discover Culture</p>

                        </div>
                      <p className="font-[Montserrat] font-light text-[15px] text-[#303030]">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Tempore asperiores, 
                      </p>
                    </div>
                  </div>
                </div>
                {/* fifth card  */}
                <div className="">
                  <img
                    src={five}
                    alt="five"
                    className="absolute bottom-[35%] left-[23%] h-[11%] md:h-[7%] z-0"
                    onClick={()=>{
                        const cross = document.getElementById("cross5")
                        const d= document.getElementById("dialog5")
                        d.classList.toggle("hidden")
                        cross.classList.toggle("hidden")
                    }}
                  />
                  <img
                    src={cross}
                    alt="five"
                    className="hidden absolute bottom-[35%] left-[23%] h-[11%] md:h-[7%] z-0"
                    id="cross5"
                    onClick={()=>{
                        const cross = document.getElementById("cross5")
                        const d= document.getElementById("dialog5")
                        d.classList.toggle("hidden")
                        cross.classList.toggle("hidden")
                    }}
                  />
                  
                  <div className="hidden border-[3px] border-[#ff681a] px-6 py-1 bg-white w-[65%] absolute top-[5%] md:top-[5%] left-[30%] md:left-[27%] z-10 md:w-[45%] md:px-7 md:py-10" id="dialog5">
                  <div className=" flex flex-col gap-5">
                        <div className="flex flex-col gap-2">
                      <p className="font-[Playfair] italic font-bold text-[20px] text-[#ff681a] leading-none">South America</p>
                      <p className="font-[Montserrat] font-bold text-balance md:text-[33px] text-[#303030] leading-none">Discover Culture</p>

                        </div>
                      <p className="font-[Montserrat] font-light text-[15px] text-[#303030]">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Tempore asperiores, 
                      </p>
                    </div>
                  </div>
                </div>
                {/* sixth card  */}
                <div className="">
                  <img
                    src={six}
                    alt="five"
                    className="absolute bottom-[17%] right-[8%] h-[11%] md:h-[7%] z-0"
                    onClick={()=>{
                        const cross = document.getElementById("cross6")
                        const d= document.getElementById("dialog6")
                        d.classList.toggle("hidden")
                        cross.classList.toggle("hidden")
                    }}
                  />
                  <img
                    src={cross}
                    alt="six"
                    className="hidden absolute bottom-[17%] right-[8%] h-[11%] md:h-[7%] z-0"
                    id="cross6"
                    onClick={()=>{
                        const cross = document.getElementById("cross6")
                        const d= document.getElementById("dialog6")
                        d.classList.toggle("hidden")
                        cross.classList.toggle("hidden")
                    }}
                  />
                  
                  <div className="hidden border-[3px] border-[#ff681a] px-6 py-1 bg-white w-[65%] absolute top-[5%] md:top-[35%] left-[20%] md:left-[43%] z-10 md:w-[45%] md:px-7 md:py-10" id="dialog6">
                  <div className=" flex flex-col gap-5">
                        <div className="flex flex-col gap-2">
                      <p className="font-[Playfair] italic font-bold text-[20px] text-[#ff681a] leading-none">Australian Continent</p>
                      <p className="font-[Montserrat] font-bold text-balance md:text-[33px] text-[#303030] leading-none">Discover Culture</p>

                        </div>
                      <p className="font-[Montserrat] font-light text-[15px] text-[#303030]">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Tempore asperiores, 
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
        </div>
      </div>
    </>
  );
};

export default Map;
