import React from 'react'
import { useEffect, useState } from 'react'
import { userRequest } from '../../../services/requestMethods'
import { useDispatch } from 'react-redux'
import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward'
import ArrowUpwardIcon from '@mui/icons-material/ArrowUpward'

const AnnualSales = () => {
	const [annualIncome, setAnnualIncome] = useState([])
	const [currentYearIncome, setCurrentYearIncome] = useState()
	const [annualPercent, setAnnualPercent] = useState(0)
	const dispatch = useDispatch()

	let USDollar = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
});

	useEffect(() => {
		const getAnnualIncome = async () => {
			try {
				const res = await userRequest.get('orders/annual-income')
		
				setAnnualIncome(res.data)
				setCurrentYearIncome(res.data[0].total)
				setAnnualPercent((res.data[0].total * 100) / res.data[0].total 
				// -100
				)
			} catch {}
		}
		getAnnualIncome()
	}, [])

	return (
		<div className="bg-blue-500 dark:bg-gray-800 shadow-lg rounded-md  items-center justify-between p-3 border-b-4 border-blue-600 dark:border-gray-600 text-white font-medium group">
			<div className="flex justify-between mt-1">
				<div className="text-right">
					<p className="text-lg font-play">Annual Sales</p>
				</div>

				<div className="flex justify-center items-center w-14 h-14 bg-white rounded-full transition-all duration-300 transform group-hover:rotate-12">
					<svg
						width="30"
						height="30"
						fill="none"
						viewBox="0 0 24 24"
						stroke="currentColor"
						className="stroke-current text-blue-800 dark:text-gray-800 transform transition-transform duration-500 ease-in-out"
					>
						<path
							strokeLinecap="round"
							strokeLinejoin="round"
							strokeWidth="2"
							d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
						></path>
					</svg>
				</div>
			</div>
			<div className='text-2xl'>{USDollar.format(currentYearIncome)}</div>

			<div className="flex justify-between mt-6">
				<div>
					{annualPercent < 0 ? (
						<ArrowDownwardIcon className="featuredIcon negative text-red-600" />
					) : (
						<ArrowUpwardIcon className="featuredIcon text-green-600" />
					)}
					<span>{Math.floor(annualPercent)}%</span>
				</div>
				<div className="font-play font-semibold text-black">Compared to last year</div>
			</div>
		</div>
	)
}

export default AnnualSales
