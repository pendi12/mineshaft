/* ------------------------- Internal Dependencies -------------------------- */
import assets from 'assets'

const sidebarSelf = {
  category: 'menu',
  template: 'icon',
  layout: {
    direction: ['row'],
    align: ['center'],
  },
  items: [
    {
      title: 'Communication',
      icon: assets.shapes.chat,
      route: '/self/activity',
      layout: {
      }
    },
    {
      title: 'Availability',
      icon: assets.graphics.lab,
      route: '/self/activity',
      layout: {
      }
    },
    {
      title: 'Volunteer',
      icon: assets.graphics.vector,
      route: '/self/activity',
      layout: {
      }
    },
  ]
}

export default sidebarSelf