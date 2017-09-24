import assets from 'assets'
const drawerMenuItems = [
  /*--- Projects ---*/
  {
    title: 'Mining Statistics',
    to: '/statistics',
    svg: assets.svg.networkCentral,
    gradient: 'green'
  },
  {
    title: 'Market Opportunity',
    to: '/opportunity',
    svg: assets.svg.mobileMoney,
    gradient: 'orange'
  },
  {
    title: 'Energy Consumption',
    to: '/resources',
    svg: assets.svg.dataMining,
    gradient: 'turqoise'
  },
  {
    title: 'Pool Payout',
    to: '/pool',
    svg: assets.svg.brain,
    gradient: 'limeHarmonic'
  },
  {
    title: 'Open Governance',
    to: '/governance',
    svg: assets.svg.government,
    gradient: 'politics'
  },
]

export default drawerMenuItems