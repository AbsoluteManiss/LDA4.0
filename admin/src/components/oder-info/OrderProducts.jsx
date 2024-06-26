import React from 'react'
import { useState } from 'react'
import styled from 'styled-components'

const ProductSize = styled.span``

const ProductColor = styled.div`
	width: 20px; 
	height: 20px;
	border-radius: 50%;
	background-color: ${(props) => props.color};
`

const ProductAmount = styled.div`
	font-size: 24px;
	margin: 5px;
	${'' /* ${mobile({ margin: '5px 15px' })} */}
`

const OrderProducts = ({order}) => {
  console.log(order.products)
  console.log(order)
  const products = order.products
  const [items, setItems] = useState([]);


  return (
    <div className='font-play'>
         {products.map((product) => (
      <div
										className="justify-between mb-6 rounded-lg bg-gray-600 p-6 shadow-md sm:flex sm:justify-start"
										key={product._id}
									>
										<img
											src={product.img}
											alt="productImage"
											className="w-full rounded-lg sm:w-40"
										/>
										<div className="sm:ml-4 sm:flex sm:w-full sm:justify-between">
											<div className="mt-5 sm:mt-0">
												<h2 className="text-lg font-bold text-white">
													{product.title}
												</h2>
												<p className="text-blue-400 mb-4">{product._id}</p>
												<ProductSize className=" text-lg">
													<b className=" pr-3">Size:</b> {product.size}
												</ProductSize>
												<div className="flex">
													<b className=" pr-3">Color:</b>
													<ProductColor
														className="mt-2"
														color={product.color}
													/>
												</div>
											</div>
											<div className="mt-4 flex justify-between sm:space-y-6 sm:mt-0 sm:block sm:space-x-6">
												<div className="flex items-center border-gray-100">
													<span className=" py-1 px-3.5 text-lg md:text-2xl">
													qty:
													</span>
												
													<ProductAmount className="">
														{product.quantity}
													</ProductAmount>
												
												</div>
												<div className="flex items-center space-x-4  t">
													<p className="text-xl">
														${(product.price * product.quantity).toFixed(2) }
													</p>
												
												</div>
											</div>
										</div>
									</div>
    ))}
    </div>
  )
}

export default OrderProducts