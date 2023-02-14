import Image from "next/image";
import Hulu from "../../public/hulu.png";
import HeaderItem from "./HeaderItem";
import {HomeIcon, CheckBadgeIcon, TicketIcon, BoltIcon, MagnifyingGlassIcon, UserIcon} from "@heroicons/react/24/outline";


function Header() {
  return (
    <header className="flex flex-col sm:flex-row m-5 justify-between items-center h-auto">
        <div className="flex flex-grow justify-evenly max-w-2xl">
            <HeaderItem title="HOME" Icon={HomeIcon}/>
            <HeaderItem title="TRENDING" Icon={BoltIcon}/>
            <HeaderItem title="VERIFIED" Icon={CheckBadgeIcon}/>
            <HeaderItem title="COLLECTIONS" Icon={TicketIcon}/>
            <HeaderItem title="SEARCH" Icon={MagnifyingGlassIcon}/>
            <HeaderItem title="ACCOUNT" Icon={UserIcon}/>
        </div>

<Image 
className="object-contain"
src={Hulu} alt="hulu logo" width={200} height={100}/>
    </header>
  )
}

export default Header