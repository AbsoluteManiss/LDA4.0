import React from 'react'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { login } from '../services/apiCalls'

const Login = () => {
	const navigate = useNavigate()
	const [email, setEmail] = useState('')
	const [password, setPassword] = useState('')
	const dispatch = useDispatch()
	const { isFetching, error } = useSelector((state) => state.user)

	const handleClick = (e) => {
		e.preventDefault()
		login(dispatch, { email, password })
		navigate('/home')
	}

	return (
		<div className="regContainer font-play">
			<div className="flex flex-col items-center justify-center px-[2rem] py-8 mx-auto md:h-screen lg:py-0">
				<div className="regWrapper w-full  rounded-lg shadow border md:mt-0 sm:max-w-md xl:p-0 ">
					<div className="p-10 space-y-4 md:space-y-6 sm:p-8">
						<p className=" text-center font-bold  font-play text-black-600 md:text-[3rem] ">
							Admin Login
						</p>
						<form className="space-y-4 md:space-y-6" action="#">
							<div>
								<label
									for="email"
									className="block mb-2 text-md font-medium text-white-900 dark:text-white"
								>
									Email
								</label>
								<input
									type="email"
									name="email"
									id="email"
									className="bg-gray-50 border border-gray-300 text-gray-500 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
									placeholder="name@company.com"
									required="true"
									onChange={(e) => setEmail(e.target.value)}
								/>
							</div>
							<div>
								<label
									for="password"
									className="block mb-2 text-md font-medium text-white-900 dark:text-white"
								>
									Password
								</label>
								<input
									type="password"
									name="password"
									id="password"
									placeholder="••••••••"
									className="bg-gray-50 border border-gray-300 text-gray-500 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
									required="true"
									onChange={(e) => setPassword(e.target.value)}
								/>
							</div>

							<button
								onClick={handleClick}
								className="w-full text-white bg-blue-500 hover:bg-blue-400  focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
							>
								Login
							</button>
						</form>
					</div>
				</div>
			</div>
		</div>
	)
}

export default Login
