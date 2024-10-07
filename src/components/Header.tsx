
'use client'
import {useState} from 'react'
import { headerItems, userInfo } from "@/constants/constant";
import { NavItems } from "@/models/Header";
import { CiMenuKebab } from "react-icons/ci";
import {Link as ScrollLink} from 'react-scroll';

const Header : React.FC = () =>{
    const [navItem ,showNavItems] = useState<boolean>(false)
       
        return(

            <header className=" bg-slate-500 p-6 justify-between fixed top-0 w-full z-10 md:flex">
            <div className='flex justify-between'>
         <h2 className="text-2xl font-bold p-1">{userInfo.name}</h2>
         <CiMenuKebab 
         size={30}
         className='md:hidden'
         onClick={() => showNavItems(prevState => !prevState)}
         />

            </div>


            <div className={`mr-8 md:space-x-6 mt-3 md:mt-0 md:block ${ navItem ? 'block':'hidden'}`}>
        {
           Object.keys(headerItems).map(item =>(
            <ScrollLink
            to={headerItems [item as keyof NavItems].page}
            key={headerItems[item as keyof NavItems].label}
            className="block md:inline-block cursor-pointer"
            spy={true}
            smooth={true}

            >{headerItems[item as keyof NavItems].label}</ScrollLink>
           ))
        }
            </div>



        </header>
    )
}

export default Header