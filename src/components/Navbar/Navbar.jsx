import { logo } from "../../assets/image"

const Navbar = () => {
  return (
    <>
        <div className="2xl:container bg-[#F9F9F9]">
            <div className="w-[80%] lg:w-[80%] grid grid-cols-2 lg:grid-cols-3 mx-auto bg-white px-4 py-8">
                <div>
                    <img src={logo} alt="logo" className="h-5"/>
                </div>
                <div className=" hidden  lg:flex lg:justify-center">
                    <ul className="flex gap-14 ">
                        <li><p className="font-[Montserrat] font-semibold text-[#ff681a] text-[14px]">Home</p></li>
                        <li>
                            <p className="font-[Montserrat] font-semibold text-[#303030] text-[14px]">Destinations</p>
                        </li>
                        <li>
                            <p className="font-[Montserrat] font-semibold text-[#303030]  text-[14px]">Tours</p>
                        </li>
                        <li>
                            <p className="font-[Montserrat] font-semibold text-[#303030] text-[14px]">Pages</p>
                        </li>
                        <li><p className="font-[Montserrat] font-semibold text-[#303030] text-[14px]">Blog</p></li>
                        <li><p className="font-[Montserrat] font-semibold text-[#303030] text-[14px]">Elements</p></li>
                    </ul>
                </div>
                <div className="flex flex-col gap-1 items-end justify-center group">
                    <span className="bg-black w-[20px] h-[2px] transition group-hover:rotate-90 group-hover:translate-y-1"></span>
                    <span className="bg-black w-[10px] h-[2px]  group-hover:-rotate-180  group-hover:w-[20px]"></span>
                    <span className="bg-black w-[20px] h-[3px] group-hover:scale-x-0 transition"></span>
                </div>
            </div>
        </div>
    </>
  )
}

export default Navbar
