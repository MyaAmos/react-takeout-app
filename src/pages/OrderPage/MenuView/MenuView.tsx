import React from 'react'
import { Loading } from '../../../components'
import { StringUtils } from '../../../utils'
import { useMenu } from './useMenu'
import { SectionView } from './SectionView'
import { menu as menu2} from '../../../mocks/mockMenu'


export const MenuView = () => {

  const { isLoading, isError, error, menu } = useMenu();
  console.log(menu)

  if (isLoading){
    return <Loading />
  }

  if (isError) {
    return(
      <main>
        <h1>{StringUtils.errorToString(error)}</h1>
      </main>
    )
  }

  const itemsList = menu2.items;
  const sections = menu2.sections;
  const sectionIds = menu2.sectionIds;

  function getItemIds(id:string){
    const arr: Array<string> = sections[id].itemIds;
    console.log(arr);
    return arr;
  }


  return (
    <div>
        <h1 className='menu-heading'>our menu</h1>
        <div className='menuview_body'>
          {sectionIds.map((id) => (
            <SectionView key={id} section={sections[id]} items={getItemIds(id)} itemList={itemsList}/>
          ))}
        </div>
    </div>
  )
}
