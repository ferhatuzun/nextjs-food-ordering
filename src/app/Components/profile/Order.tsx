import React from 'react'

const Order = () => {
    const tableData = [
        {
          id: 0,
          orderId:"01",
            orderDate:"22.12.2024",
            orderDetail:"1x Lorem, 2x",
            orderPrice:245,
            orderStatus:"Teslim Edildi"

        },
        {
          id: 1,
          orderId:"02",
            orderDate:"22.12.2024",
            orderDetail:"1x Lorem, 2x Lorem",
            orderPrice:245,
            orderStatus:"Hazırlanıyor"

        },
        {
          id: 2,
          orderId:"03",
            orderDate:"22.12.2024",
            orderDetail:"1x Lorem, 2x Lorem",
            orderPrice:245,
            orderStatus:"Yola Çıktı"

        },
      ];
  return (
    <div className="container mx-auto p-0 mt-10 lg:mt-0 lg:px-8">
        <div className="flex items-center gap-x-2 font-semibold">
          <h4 className="text-3xl font-bold">Siparişlerim</h4>
          
        </div>
        <div className="mt-10 overflow-auto">
          <table className=" min-w-[850px] lg:min-w-full overflow-scroll">
            <thead>
              <tr className="px-5 font-semibold">
                <td>Sipariş No</td>
                <td>Sipariş Tarihi</td>
                <td>Sipariş Detayı</td>
                <td>Sipariş Tutarı</td>
                <td>Sipariş Durumu</td>
              </tr>
            </thead>
            <tbody>
              {tableData.map((item) => {
                return (
                  <tr key={item.id} className='border'>
                    <td className='font-semibold p-5'>{item.orderId}</td>
                    <td>{item.orderDate}</td>
                    <td>{item.orderDetail}</td>
                    <td>{item.orderPrice}₺</td>
                    {item.orderStatus =="Hazırlanıyor" &&
                    <td className='text-orange-500'>{item.orderStatus}</td>
                    }
                    {item.orderStatus =="Teslim Edildi" &&
                    <td className='text-green'>{item.orderStatus}</td>
                    }
                    {item.orderStatus =="Yola Çıktı" &&
                    <td className='text-sky-500'>{item.orderStatus}</td>
                    }
                    
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>
  )
}

export default Order