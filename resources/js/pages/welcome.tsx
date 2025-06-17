import NavBarre from "@/components/navBarre/NavBarre"
import SectionAbout from "@/components/sectionAbout/SectionAbout"
import SectionArticle from "@/components/sectionArticle/SectionArticle";
import SectionSavoir from "@/components/sectionSavoir/SectionSavoir";
import SectionTemoin from "@/components/sectionTemoin/SectionTemoin";
import { log } from "console";



function Welcome({abouts, articles, temoins, savoirs}){

    console.log(articles);
    



    return(
        <>
        <div>
            <NavBarre />
        </div>

        <div>
            
        <SectionAbout abouts={abouts}/>
        <SectionArticle articles={articles}/>
        <SectionSavoir savoirs={savoirs}/>
        <SectionTemoin temoins={temoins}/>




        </div>



        </>
    )
}

export default Welcome;