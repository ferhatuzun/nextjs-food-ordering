import React from 'react'
import UiFoodList from '../Components/Ui/UiFoodList'
import UiFilterButton from '../Components/Ui/UiFilterButton'

const Page = () => {
  return (
    <div className='container mx-auto font-inter mt-20'>
        <div className='flex justify-end gap-x-3'>
            <UiFilterButton filter='İçecekler' />
            <UiFilterButton filter='Tostlar' />
            <UiFilterButton filter='Börekler' />
        </div>
        <UiFoodList categoryName='Sıcak İçecekler' />
        <UiFoodList categoryName='Soğuk İçecekler' />
        <UiFoodList categoryName='Tost Çeşitleri' />
        <UiFoodList categoryName='Börek Çeşitleri' />
    </div>
  )
}

export default Page