import NavBarre from "@/components/navBarre/NavBarre"
import SectionAbout from "@/components/sectionAbout/SectionAbout";
import SectionArticle from "@/components/sectionArticle/SectionArticle";
import { log } from "console";



function Welcome({abouts, articles}){

    console.log(articles);
    



    return(
        <>
        <div>
            <NavBarre />
        </div>

        <div>
            
        <SectionAbout abouts={abouts}/>
        <SectionArticle articles={articles}/>

        </div>



        </>
    )
}

export default Welcome;