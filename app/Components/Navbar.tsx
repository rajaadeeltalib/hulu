
import requests from "@/utils/requests"


function Navbar() {
  return (
    <>
    <nav >
        
        <div className="flex items-center px-10 sm:px-20 text-2xl whitespace-nowrap space-x-10 sm:space-x-20 overflow-x-scroll scrollbar-hide md:scrollbar-default">
            {Object.entries(requests).map(([key, {title, url}])=>(
                
                <h2 key={key} className="last:pr-24 cursor-pointer transition duration-100 transform hover:scale-125 hover:text-white active:text-red-500 ">{title}</h2>
            ))}
        </div>
    </nav>
    </>
  )
}

export default Navbar