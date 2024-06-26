import React from 'react'
import styled from 'styled-components'



const FilterColor = styled.div`
	width: 20px;
	height: 20px;
	border-radius: 50%;

	background-color: ${(props) => props.color};
	margin: 0px 5px;
	cursor: pointer;
`
const FilterSize = styled.select`
	margin-left: 10px;
	padding: 5px;
`
const FilterSizeOption = styled.option``

const ProductDetails = ({product}) => {
	return (
		<div className="w-full lg:w-[30%] mx-6">
			<div className="relative flex flex-col min-w-0 mb-4 lg:mb-0  break-words bg-gray-50 dark:bg-gray-800 rounded ">
				
          <div className="productTopRight rounded  font-play  py-[]">
							<div className="productInfoTop">
								<img src={product.img} alt="" className="productInfoImg" />
								<span className="productName text-2xl text-blue-500">
									{product.title}
								</span>
							</div>
							<div className="productInfoBottom text-md md:text-xl text-white">
								<div className="productInfoItem ">
									<span className="productInfoKey">Id:</span>
									<span className="productInfoValue">{product._id}</span>
								</div>
								<div className="productInfoItem">
									<span className="productInfoKey">Categories:</span>
									{product.categories?.map((category) => (
										<div key={category}>{category}</div>
									))}

									
								</div>
								<div className="productInfoItem">
									<span className="productInfoKey">Count In Stock:</span>
									<span className="productInfoValue">{product.inStock}</span>
								</div>
								<div className="productInfoItem">
									<span className="productInfoKey">Price:</span>
									<span className="productInfoValue text-xl pb-1">$ {product.price.toFixed(2)}</span>
								</div>
								<div className="productInfoItem">
									<span className="productInfoKey">Color(s):</span>
									{product.color?.map((c) => (
										<FilterColor color={c} key={c} />
									))}

									
								</div>
								<div className="productInfoItem">
									<span className="productInfoKey">Size(s):</span>
									{product.size?.map((s) => (
										<FilterSizeOption key={s}>{s}</FilterSizeOption>
									))}
								</div>
							</div>
						</div>
  
			</div>
		</div>
	)
}

export default ProductDetails
