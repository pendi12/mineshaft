/* ------------------------- Internal Dependencies -------------------------- */
import assets from 'assets'
export const content = {
  type: 'generalCard',
  layout: {
    bg: 'blue',
    direction: ['column'],
  },
  items: [
    {
      title: 'Modern',
      description: 'Praesent commodo risus eget rutrum iaculis. Integer pulvinar eros sit amet lacus congue lacinia',
      bg: assets.bg.sleek,
      layout: {
        borderColor: ['red'],
      }
    },
    {
      title: 'Complete',
      description: 'Praesent commodo risus eget rutrum iaculis. Integer pulvinar eros sit amet lacus congue lacinia',
      bg: assets.bg.startup,
      layout: {
        borderColor: ['orange'],
      }
    },
    {
      title: 'Integrated',
      description: 'Praesent commodo risus eget rutrum iaculis. Integer pulvinar eros sit amet lacus congue lacinia',
      bg: assets.bg.photographs,
      layout: {
        borderColor: ['teal']
      }
    },
    {
      title: 'Dynamic',
      description: 'Praesent commodo risus eget rutrum iaculis. Integer pulvinar eros sit amet lacus congue lacinia',
      bg: assets.bg.code,
      layout: {
        borderColor: ['indigo']
      }
    },
    {
      title: 'Consistent',
      description: 'Praesent commodo risus eget rutrum iaculis. Integer pulvinar eros sit amet lacus congue lacinia',
      bg: assets.bg.writing,
      layout: {
        borderColor: ['blue']
      }
    },
    {
      title: 'Robust',
      description: 'Praesent commodo risus eget rutrum iaculis. Integer pulvinar eros sit amet lacus congue lacinia',
      bg: assets.bg.adventure,
      layout: {
        borderColor: ['green']
      }
    },
  ]
}