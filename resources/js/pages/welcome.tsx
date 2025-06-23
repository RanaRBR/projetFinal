import NavBarre from '@/components/navBarre/NavBarre';
import SectionAbout from '@/components/sectionAbout/SectionAbout';
import SectionContact from '@/components/sectionContact/SectionContact';
import SectionSavoir from '@/components/sectionSavoir/SectionSavoir';
import SectionTemoin from '@/components/sectionTemoin/SectionTemoin';
import SectionArticle from '@/components/sectionArticle/SectionArticle'
import { usePage } from '@inertiajs/react'

function Welcome({ abouts, articles, temoins, savoirs, contacts }) {
  const { auth } = usePage().props;
  const auth_user_id = auth?.user?.id ?? null;

  return (
    <>
      <NavBarre auth_user_id={auth_user_id} />

      <SectionAbout abouts={abouts} />
      <SectionArticle articles={articles} />
      <SectionSavoir savoirs={savoirs} />
      <SectionTemoin temoins={temoins} />
      <SectionContact contacts={contacts} />
    </>
  )
}


// function Welcome({ abouts = [], articles = [], temoins = [], savoirs = [], contacts = [] }) {
//   const { auth } = usePage().props;
//   const auth_user_id = auth?.user?.id ?? null;

//   return (
//     <>
//       <NavBarre auth_user_id={auth_user_id} />

//       <SectionAbout abouts={abouts} />
//       <SectionArticle articles={articles} />
//       <SectionSavoir savoirs={savoirs} />
//       <SectionTemoin temoins={temoins} />
//       <SectionContact contacts={contacts} />
//     </>
//   )
// }


export default Welcome;
