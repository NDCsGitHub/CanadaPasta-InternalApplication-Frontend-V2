import React from 'react'
import { useProductCatalogContext } from '../../../../contexts/NewOrderContexts/ProductCatalogContext'
import CartDetailOptions from './CartDetailOptions'

export default function CartDetail() {

  const {basket, setBasket} = useProductCatalogContext()

  console.log(basket)
  return (
    <div className = 'cartContainer'>

        {basket.length <= 0 ? (
            <h1>BASKET IS EMPTY</h1>
        ) : (
            basket.map((itemm, index) => {
                return <CartDetailOptions />
            })

        )}

    </div>
  )
}
