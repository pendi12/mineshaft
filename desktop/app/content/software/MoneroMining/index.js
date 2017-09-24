import React from 'react'
import {Badge, SVG} from 'atomic'
import assets from 'assets'
const drawerMenuItems = [

  // AMD
  {
    title: 'XMR Stak AMD',
    description: 'XMRig is high performance Monero (XMR) CPU miner, with the official full Windows support. Originally based on cpuminer-multi with heavy optimizations/rewrites and removing a lot of legacy code, since version 1.0.0 complete rewritten from scratch on C++.',
    link: 'https://github.com/fireice-uk/xmr-stak-amd',
    badges: [
      <SVG width={[45]} h={[45]} svg={assets.svg.windows}/>,
      <SVG width={[45]} h={[45]} svg={assets.svg.macOSX}/>,
      <SVG width={[45]} h={[45]} svg={assets.svg.linux}/>,
    ],
    to: '/monero/amd/xmrstak',
    svg: assets.svg.networkCentral,
    gradient: 'cherry'
  },
  {
    title: 'Wolf\'s AMD Miner',
    link: 'https://github.com/OhGodAPet/wolf-xmr-miner',
    description: 'GPU Arch is high performance Monero (XMR) CPU miner, with the official full Windows support. Originally based on cpuminer-multi with heavy optimizations/rewrites and removing a lot of legacy code, since version 1.0.0 complete rewritten from scratch on C++.',
    badges: [
      <SVG width={[45]} h={[45]} svg={assets.svg.windows}/>,
      <SVG width={[45]} h={[45]} svg={assets.svg.macOSX}/>,
      <SVG width={[45]} h={[45]} svg={assets.svg.linux}/>,
    ],
    to: '/monero/amd/wolf',
    svg: assets.svg.networkCentral,
    gradient: 'green'
  },

  // CPU
  {
    title: 'Monero Spelunker (Windows)',
    link: 'https://github.com/jwinterm/monerospelunker/releases',
    description: 'GPU Arch is high performance Monero (XMR) CPU miner, with the official full Windows support. Originally based on cpuminer-multi with heavy optimizations/rewrites and removing a lot of legacy code, since version 1.0.0 complete rewritten from scratch on C++.',
    badges: [
      <SVG width={[45]} h={[45]} svg={assets.svg.windows}/>,
    ],
    to: '/monero/xmrig',
    svg: assets.svg.networkCentral,
    gradient: 'purple'
  },
  {
    title: 'XMR Stak CPU',
    description: 'GPU Arch is high performance Monero (XMR) CPU miner, with the official full Windows support. Originally based on cpuminer-multi with heavy optimizations/rewrites and removing a lot of legacy code, since version 1.0.0 complete rewritten from scratch on C++.',
    link: 'https://github.com/fireice-uk/xmr-stak-cpu',
    to: '/monero/xmrig',
    svg: assets.svg.networkCentral,
    gradient: 'blue'
  },
  {
    title: 'Wolf\'s CPU Miner',
    description: 'GPU Arch is high performance Monero (XMR) CPU miner, with the official full Windows support. Originally based on cpuminer-multi with heavy optimizations/rewrites and removing a lot of legacy code, since version 1.0.0 complete rewritten from scratch on C++.',
    link: 'https://github.com/OhGodAPet/cpuminer-multi',
    to: '/monero/xmrig',
    svg: assets.svg.networkCentral,
    gradient: 'crimson'
  },
  
  // Nvidia
  {
    title: 'XMR Stak NVidia',
    link: 'https://github.com/fireice-uk/xmr-stak-nvidia',
    description: 'GPU Arch is high performance Monero (XMR) CPU miner, with the official full Windows support. Originally based on cpuminer-multi with heavy optimizations/rewrites and removing a lot of legacy code, since version 1.0.0 complete rewritten from scratch on C++.',
    to: '/monero/xmrig',
    svg: assets.svg.networkCentral,
    gradient: 'nighthawk'
  },
  {
    title: 'CC Miner',
    link: 'https://github.com/tsiv/ccminer-cryptonight',
    description: 'GPU Arch is high performance Monero (XMR) CPU miner, with the official full Windows support. Originally based on cpuminer-multi with heavy optimizations/rewrites and removing a lot of legacy code, since version 1.0.0 complete rewritten from scratch on C++.',
    to: '/monero/xmrig',
    svg: assets.svg.networkCentral,
    gradient: 'frost'
  },
  {
    title: 'XMR Miner (Windows)',
    link: 'https://github.com/xmrMiner/xmrMiner-Win64',
    description: 'GPU Arch is high performance Monero (XMR) CPU miner, with the official full Windows support. Originally based on cpuminer-multi with heavy optimizations/rewrites and removing a lot of legacy code, since version 1.0.0 complete rewritten from scratch on C++.',
    to: '/monero/xmrig',
    svg: assets.svg.networkCentral,
    gradient: 'turqoise'
  },
]

export default drawerMenuItems