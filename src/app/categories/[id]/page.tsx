import UiFoodList from '@/app/Components/Ui/UiFoodList'
import React from 'react'


const Page = () => {
  return (
    <div className='container mx-auto font-inter mt-20'>
        <UiFoodList categoryName='Sıcak İçecekler'/>
    </div>
  )
}

export default Page