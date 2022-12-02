import React from 'react'
import { MenuItem, MenuSection } from '../../../models/Menu'
import { MenuItemView } from './MenuItemView'

export interface SectionViewProps{
  section: MenuSection
  items: Array<string>
  itemList: { [itemId: string]: MenuItem }
}

export const SectionView = ({section, items, itemList}: SectionViewProps) => {


function findMenuItem(id:string) {
  console.log(itemList[id])
  return itemList[id];
}

  return (
    <div>
      <h2 className='section-name'>{section.name}</h2>
      {items.map((item, index) => (
        <MenuItemView key={item} menuItem={findMenuItem(item)} />
      ))}
    </div>
  )
}
