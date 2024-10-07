
import { UserObject } from "@/models/User"
import { NavItems } from "@/models/Header"

export const userInfo: UserObject = {
    name : "Sana",
    picture : 'https://images.pexels.com/photos/3792581/pexels-photo-3792581.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    heading : 'I&#39;m a student at GIAIC, with a focus on exploring emerging technologies like web 3.0, AI and Metaverse.I have a strong intersest on how modern technology shapes the future of digital transformation and innovation.',
    about :'My course ',
    skills : ["Html ,Css, Typescript, NExtJS , TailwindCss"]
}

export const headerItems : NavItems = {
    home :{ label: "Home" ,page : "Home"},
    about :{label: "About", page : "about"},

}