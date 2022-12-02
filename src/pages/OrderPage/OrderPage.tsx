import React from 'react'
import { MenuView } from './MenuView/MenuView'
import { OrderView } from './OrderView/OrderView'
import './OrderPageStyles.css'

export const OrderPage = () => {
  return (
    <div>
        <div className='root'>
            <div className='menuview'>
                <MenuView />
            </div>
            <div className='orderview'>
                <OrderView />
            </div>
        </div>
    </div>
  )
}
