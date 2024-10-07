
import { headerItems,userInfo } from "@/constants/constant";
import Image from "next/image";



const About : React.FC = () => {
     
 return(
    <section id={headerItems.about.page}
    className="h-screen flex flex-col text-center justify-center items-center md:flex-row md:text-start"
    >
     <div className="md:ml-20 sm:ml-12 md:w-1/2">
      <h1 className="text-6xl my-6"> About me</h1>
      <h2 className="text-2xl mt-5 md:text-3xl">
        Get to know me </h2>
    <p 

    className=" [&>p]:mt-5"
    dangerouslySetInnerHTML={{__html: userInfo.heading}} />

     </div>

     <div className="flex flex-col justify-center items-center text-center">

     <Image
     src={userInfo.picture}
     alt="dp"
     width={300}
     height={300}
     className="m-auto"
     />
     <div className="bg-slate-600 mt-3 w-3/4 break-words">
        {
            userInfo.skills.map(skill =>(
                <span key={skill}  className="bg-gray-200 m-1 p-2  justify-content{space-between} text-sm inline-block rounded-md">{skill}</span>
            ))
        }
     </div>
     
     </div>


    </section>
 )

}

export default About ;