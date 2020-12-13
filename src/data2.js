import React, {useState} from 'react'


import TotalComponent from './components/Body/MiniNavs/TotalComponent'
import WalletComponent from './components/Body/MiniNavs/WalletComponent'
import HardwareComponent from './components/Body/MiniNavs/HardwareComponent'

const slider = [
  {
    id: 0,
    name : 'Total',
    classes: 'sl-tot',
    component: <TotalComponent />
  },
  {
    id: 1,
    name : 'Wallet',
    classes: 'sl-wal',
    component: <WalletComponent />
  },
  {
    id: 2,
    name : 'Hardware',
    classes: 'sl-har',
    component: <HardwareComponent />
  }
]

export default slider