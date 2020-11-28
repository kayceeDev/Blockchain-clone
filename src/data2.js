import React, {useState} from 'react'


import TotalComponent from './components/Body/MiniNavs/TotalComponent'
import WalletComponent from './components/Body/MiniNavs/WalletComponent'
import HardwareComponent from './components/Body/MiniNavs/HardwareComponent'

const slider = [
  {
    name : 'Total',
    classes: 'sl-tot',
    component: <TotalComponent />
  },
  {
    name : 'Wallet',
    classes: 'sl-wal',
    component: <WalletComponent />
  },
  {
    name : 'Hardware',
    classes: 'sl-har',
    component: <HardwareComponent />
  }
]

export default slider