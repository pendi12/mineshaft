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
      title: 'People',
      icon: assets.graphics.dna,
      route: '/self/activity',
      layout: {
      }
    },
    {
      title: 'Organizations',
      icon: assets.graphics.playbook,
      route: '/self/activity',
      layout: {
      }
    },
    {
      title: 'Resources',
      icon: assets.graphics.data,
      route: '/self/activity',
      layout: {
      }
    },
    {
      title: 'Tasks',
      icon: assets.graphics.graph,
      route: '/self/activity',
      layout: {
      }
    },
  ]
}

export default sidebarSelf