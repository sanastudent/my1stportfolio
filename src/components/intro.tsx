
import { headerItems,userInfo } from "@/constants/constant";
import Image from "next/image";



const Intro : React.FC = () => {
     
 return(
    <section id={headerItems.home.page}
    className="h-screen flex flex-col text-center justify-center items-center md:flex-row md:text-start"
    >
      
     <div className="md:ml-20 sm:ml-12 md:w-1/2">
      <h1 className="text-5xl uppercase hidden md:block"> Software Developer</h1>
      <h1 className="text-2xl mt-5 md:text-3xl">
         Hi,I&#39;m <span className="text-red-400 text-3xl md:text-4xl">{userInfo.name}</span>
      </h1>
    <p 
    className="mt-4 mb-4"
    dangerouslySetInnerHTML={{__html: userInfo.heading}} />

     </div>

     <div>
     <Image
     src={userInfo.picture}
     alt="dp"
     width={300}
     height={300}
     className="rounded-full shadow-2xl mt-10"
     />
      </div>


    </section>
 )

}

export default Intro ;