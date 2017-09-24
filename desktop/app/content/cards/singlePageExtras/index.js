/* ------------------------- Internal Dependencies -------------------------- */
import CardStripe from 'molecules/CardStripe'
import IconAnalysis from 'assets/icons/design/analysis.png'
import Blocks from 'assets/graphics/graphic-blocks.png'

import assets from 'assets'

export const content ={
  type: 'horizontalCard',
  layout: {
    align: ['initial', 'center'],
    bg: 'white',
    direction: ['column', 'row'],
    p: [10, 15]
  },
  items: [
    {
      id: 'projectGuide',
      title: 'Easy Instructions & Friendly Guidance',
      description: 'The Internet can be complicated. Stay focused and productive with our easy to follow guides and on-call designers, developers and engineers. Forging ahead with a clear mission, limit your exposure to unnecessary details, instead focusing on important tasks.',
      image: assets.graphics.lab,

    },
    {
      id: 'digitalAssets',
      title: 'Organized Files & Project Resources',
      description: "Stop wasting time. Constantly re-finding important documents/email. Or worse, misplacing costly work entirely. Let our automated systems and attentive staff help manage your project's full  life-cycle, so you don't have to worry about a thing.",
      image: assets.graphics.server,
    },
    {
      id: 'communication',
      title: 'Free + Low Cost Infrastructure',
      description: 'Stay focused on important conversations. Our free and low cost infrastructure essentials like hosting, project management, notification systems and online forms, mean we never have to waste time talking about the basics.',
      image: assets.graphics.system,
    },
    {
      id: 'communication',
      title: 'Simple Step-By-Step Construction',
      description: 'Eliminate missed opportunities. Simple project dashboard to view project objectives, timelines and requirements. In addition, receive real-time text message updates about project status and task completion.',
      image: assets.graphics.language,
    },
    {
      id: 'projectGuide',
      title: 'Integrated Software',
      description: 'Praesent commodo risus eget rutrum iaculis. Integer pulvinar eros sit amet lacus congue lacinia',
      image: assets.graphics.vr,

    },
    {
      id: 'digitalAssets',
      title: 'Integrated Software',
      description: 'Praesent commodo risus eget rutrum iaculis. Integer pulvinar eros sit amet lacus congue lacinia',
      image: assets.graphics.vector,
    },
    {
      id: 'communication',
      title: 'Integrated Software',
      description: 'Praesent commodo risus eget rutrum iaculis. Integer pulvinar eros sit amet lacus congue lacinia',
      image: assets.graphics.password,
    },
    {
      id: 'communication',
      title: 'Integrated Software',
      description: 'Praesent commodo risus eget rutrum iaculis. Integer pulvinar eros sit amet lacus congue lacinia',
      image: assets.graphics.language,
    },
  ]

}