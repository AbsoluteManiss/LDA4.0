import React from 'react'
import { useState } from 'react'
import { ref, uploadBytesResumable, getDownloadURL } from 'firebase/storage'
import { storage } from '../../firebase'
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router'
import { userRequest } from '../../services/requestMethods'

const ProductUpdate = ({ product }) => {
	let navigate = useNavigate()
	const [err, setErr] = useState(false)
	const [inputs, setInputs] = useState({})
	const [file, setFile] = useState(null)
	const [color, setColor] = useState([])
	const [size, setSize] = useState([])
	const dispatch = useDispatch()
	const id = product._id
	console.log(id)

	const handleChange = (e) => {
		setInputs((prev) => {
			return { ...prev, [e.target.name]: e.target.value }
		})
	}

	const handleColor = (e) => {
		// setColor((prev) => {
		//   return {...prev,  e.target.value.split(',') }
		// })
		setColor(e.target.value.split(','))
	}
	const handleSize = (e) => {
		setSize(e.target.value.split(','))
	}

	const updateImg = async (e) => {
		e.preventDefault()
		const date = new Date().getTime()
		const storageRef = ref(storage, `${file.name + date}`)
		const uploadTask = uploadBytesResumable(storageRef, file)

		uploadTask.on(
			'state_changed',
			(snapshot) => {
				const progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100
				console.log('Upload is ' + progress + '% done')
				switch (snapshot.state) {
					case 'paused':
						console.log('Upload is paused')
						break
					case 'running':
						console.log('Upload is running')
						break
					default:
				}
			},
			(error) => {
				setErr(true)
			},
			() => {
				getDownloadURL(uploadTask.snapshot.ref).then(async (downloadURL) => {
					console.log('File available at', downloadURL)
					const product = {
						img: downloadURL,
					}
					console.log(product)

					await userRequest.put(`/products/${id}`, product)
					navigate('/products')
					navigate(0)
				})
			}
		)
	}

	const handleUpdate = async (e) => {
		e.preventDefault()
		const product = {
			...inputs,
			size: size,
			color: color,
		}
		console.log(product)

		await userRequest.put(`/products/${id}`, product)
		navigate('/products')
		navigate(0)
	}

	return (
		<div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-2 p-4 gap-4 text-black dark:text-white">
			<div className="md:col-span-2 xl:col-span-3">
				<h3 className="text-2xl md:text-5xl text-center text-blue-400 font-semibold font-abril">
					Update Product
				</h3>
			</div>

			{/* 1st card */}
			<div className="md:col-span-2 xl:col-span-1">
				<div className="rounded bg-gray-200 dark:bg-gray-800 p-3">
					{/* form */}
					<form className="space-y-1 md:space-y-2 font-play" action="#">
						<div className="">
							<label
								for="email"
								className="block mb-2 text-md font-medium text-gray-900 dark:text-white"
							>
								Product Name
							</label>
							<input
								name="title"
								onChange={handleChange}
								type="text"
								placeholder={product.title}
								id="email"
								className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
								required="true"
							/>
						</div>
						<div>
							<label
								for="password"
								className="block mb-2 text-md font-medium text-gray-900 dark:text-white"
							>
								Product Description
							</label>
							<textarea
								name="desc"
								onChange={handleChange}
								rows="5"
								cols="50"
								placeholder={product.desc}
								id="password"
								className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
								required="true"
							/>
						</div>
						<div>
							<label
								for="password"
								className="block mb-2 text-md font-medium text-gray-900 dark:text-white"
							>
								Categories
							</label>
							<input
								placeholder={product.categories}
								onChange={handleChange}
								type="text"
								name="categories"
								className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
								required="true"
							/>
						</div>
						<div>
							<label
								for="password"
								className="block mb-2 text-md font-medium text-gray-900 dark:text-white"
							>
								Price
							</label>
							<input
								name="price"
								placeholder={product.price.toFixed(2)}
								onChange={handleChange}
								type="number"
								className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
								required="true"
							/>
						</div>
						<div>
							<label
								for="password"
								className="block mb-2 text-md font-medium text-gray-900 dark:text-white"
							>
								Sizes(s) <span className="text-gray-600">*required</span>
							</label>
							<input
								name="size"
								placeholder={product.size}
								onChange={handleSize}
								type="text"
								className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
								required="true"
							/>
						</div>
						<div>
							<label
								for="password"
								className="block mb-2 text-md font-medium text-gray-900 dark:text-white"
							>
								Available Color(s){' '}
								<span className="text-gray-600">*required</span>
							</label>
							<input
								name="color"
								placeholder={product.color}
								onChange={handleColor}
								type="text"
								className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
								required="true"
							/>
						</div>
						<div>
							<label
								for="password"
								className="block mb-2 text-md font-medium text-gray-900 dark:text-white"
							>
								Count In Stock
							</label>
							<input
								name="inStock"
								placeholder={product.inStock}
								onChange={handleChange}
								type="number"
								className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
								required="true"
							/>
						</div>
						<div>
							<label
								for="password"
								className="block mb-2 text-md font-medium text-gray-900 dark:text-white"
							>
								Rating (1-5)
							</label>
							<input
								name="rating"
								placeholder={product.rating}
								onChange={handleChange}
								type="number"
								className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
								required="true"
							/>
						</div>

						<button
							onClick={handleUpdate}
							className="w-full text-white bg-blue-500 hover:bg-blue-300 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
						>
							UPDATE
						</button>
					</form>
				</div>
			</div>

			{/* 2nd card */}
			<div>
				<div className="rounded bg-gray-200 dark:bg-gray-800 px-3 py-6">
					<div className="flex">
						<form className="m">
							<label className=" text-xl font-play" for="file">
								New Image
							</label>
							<input
								type="file"
								id="file"
								onChange={(e) => setFile(e.target.files[0])}
								className="py-3.5 "
							/>
						</form>

						<div>
							<img src={product.img} alt="" className="rounded " />
						</div>
					</div>
					<button
						onClick={updateImg}
						className="w-full text-white bg-blue-500 hover:bg-blue-300 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 mt-6 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
					>
						UPDATE
					</button>
					{err && <span>Something went wrong</span>}
				</div>
			</div>
		</div>
	)
}

export default ProductUpdate
