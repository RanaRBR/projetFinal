import SectionContact from "@/components/sectionContact/SectionContact";
import NavBarre from "@/components/navBarre/NavBarre"
import SectionAbout from "@/components/sectionAbout/SectionAbout"
import SectionArticle from "@/components/sectionArticle/SectionArticle";
import SectionSavoir from "@/components/sectionSavoir/SectionSavoir";
import SectionTemoin from "@/components/sectionTemoin/SectionTemoin";
import { log } from "console";



function Welcome({abouts, articles, temoins, savoirs, contacts}){

    console.log(contacts);
    



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
        <SectionContact contacts={contacts}/>


        </div>



        </>
    )
}

export default Welcome;