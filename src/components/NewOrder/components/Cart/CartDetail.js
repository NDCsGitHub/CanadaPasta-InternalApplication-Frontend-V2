import React from 'react'
import { useProductCatalogContext } from '../../../../contexts/NewOrderContexts/ProductCatalogContext'

export default function CartDetail() {

  const {basket, setBasket} = useProductCatalogContext()

  console.log(basket)
  return (
    <div className = 'cartContainer'>

        {basket.map((item, index) => {
            return <hi>item.price</hi>
        })}

        

    </div>
  )
}
