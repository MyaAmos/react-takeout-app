import { NumberUtils } from '@react-force/number-utils'
import React from 'react'
import { MenuItem } from '../../../models/Menu'

export interface MenuItemViewProps{
  menuItem: MenuItem
}

export const MenuItemView = ({menuItem}: MenuItemViewProps) => {

  const price = NumberUtils.formatAsMoney(menuItem.price);

  return (
    <div className='itemView'>
        <h3 className='itemName'>{menuItem.name}</h3>
        <p className='itemDesc'>{menuItem.description}</p>
        <p className='itemPrice'>{price}</p>
    </div>
  )
}
