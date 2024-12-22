import Image from 'next/image'
import React from 'react'

const Testimonials = () => {
  return (
    <div className='grid grid-cols-1 md:grid-cols-2 mt-20 font-inter place-items-center'>
        <div className='place-self-start'>
            <Image src="/images/testimonials.png" alt='' width={400} height={530}/>
        </div>
        <div className='mt-10 md:mt-0'>
            <div>
                <p className='text-red font-bold text-xl'>Görüşler</p>
                <p className='text-5xl font-bold my-10'>Müşterilerimiz Hakkımızda Ne Diyor?</p>
                <p className='text-gray'>“Dün gece Foodi&apos;de yemek yeme zevkini yaşadım ve hâlâ bu deneyimden övgüyle söz ediyorum! Sunum ve hizmette detaylara gösterilen özen kusursuzdu.”</p>
            </div>
        </div>
    </div>
  )
}

export default Testimonials