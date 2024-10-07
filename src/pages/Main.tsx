

import  Intro  from '@/components/intro'
import About from "@/components/About"

const Main:React.FC = ()=>{
    return(
        <div className='lg:mx-32 md:mx-4'>
            <Intro />
            <About/>

        </div>
    )
}
export default Main