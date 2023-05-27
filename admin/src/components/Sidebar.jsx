import React from 'react'
import LineStyleIcon from '@mui/icons-material/LineStyle'
import TimelineIcon from '@mui/icons-material/Timeline'
import TrendingUpIcon from '@mui/icons-material/TrendingUp'
import PermIdentityIcon from '@mui/icons-material/PermIdentity'
import StorefrontIcon from '@mui/icons-material/Storefront'
import AttachMoneyIcon from '@mui/icons-material/AttachMoney'
import BarChartIcon from '@mui/icons-material/BarChart'
import MailOutlineIcon from '@mui/icons-material/MailOutline'
import DynamicFeedIcon from '@mui/icons-material/DynamicFeed'
import ChatBubbleOutlineIcon from '@mui/icons-material/ChatBubbleOutline'
import WorkOutlineIcon from '@mui/icons-material/WorkOutline'
import ReportIcon from '@mui/icons-material/Report'
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline'
import { Link } from 'react-router-dom'

export default function Sidebar() {
	return (
		<div>
			<div class="rounded sticky flex flex-col top-14 left-0 w-14 hover:w-60  bg-[#3167b2]  h-[120vh] text-white transition-all duration-300 border-none z-10 sidebar">
				<div class="overflow-y-auto overflow-x-hidden flex flex-col justify-between flex-grow">
					<ul class="flex flex-col py-4 space-y-1">
						<li class="px-5 hidden md:block">
							<div class="flex flex-row items-center h-8">
								<div class=" text-sm font-light tracking-wide truncate text-blue-400 uppercase">
									Main
								</div>
							</div>
						</li>
						<li>
							<a
								href="/home"
								class="relative flex flex-row items-center h-11 focus:outline-none hover:bg-blue-800 dark:hover:bg-gray-600 text-white-600 hover:text-white-800 border-l-4 border-transparent hover:border-blue-500 dark:hover:border-gray-800 pr-6"
							>
								<span class="inline-flex justify-center items-center ml-4">
									<svg
										class="w-5 h-5"
										fill="none"
										stroke="currentColor"
										viewBox="0 0 24 24"
										xmlns="http://www.w3.org/2000/svg"
									>
										<path
											stroke-linecap="round"
											stroke-linejoin="round"
											stroke-width="2"
											d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
										></path>
									</svg>
								</span>
								<span class="ml-2 text-sm tracking-wide truncate">
									Dashboard
								</span>
							</a>
						</li>
						<li>
							<Link
								to={'/products'}
								class="relative flex flex-row items-center h-11 focus:outline-none hover:bg-blue-800 dark:hover:bg-gray-600 text-white-600 hover:text-white-800 border-l-4 border-transparent hover:border-blue-500 dark:hover:border-gray-800 pr-6"
							>
								<span className="inline-flex justify-center items-center ml-4">
									<StorefrontIcon />
								</span>
                <span className='ml-2 text-sm tracking-wide truncate'>
                Products
                </span>
							</Link>
						</li>
						<li>
							<Link
								to={'/'}
								class="relative flex flex-row items-center h-11 focus:outline-none hover:bg-blue-800 dark:hover:bg-gray-600 text-white-600 hover:text-white-800 border-l-4 border-transparent hover:border-blue-500 dark:hover:border-gray-800 pr-6"
							>
								<span className="inline-flex justify-center items-center ml-4">
									<PermIdentityIcon />
								</span>
                <span className='ml-2 text-sm tracking-wide truncate'>
                Users
                </span>
							</Link>
						</li>

            
            <li>
							<Link
								to={'/'}
								class="relative flex flex-row items-center h-11 focus:outline-none hover:bg-blue-800 dark:hover:bg-gray-600 text-white-600 hover:text-white-800 border-l-4 border-transparent hover:border-blue-500 dark:hover:border-gray-800 pr-6"
							>
								<span className="inline-flex justify-center items-center ml-4">
									<AttachMoneyIcon />
								</span>
                <span className='ml-2 text-sm tracking-wide truncate'>
                Transactions
                </span>
							</Link>
						</li>
            <li>
							<Link
								to={'/'}
								class="relative flex flex-row items-center h-11 focus:outline-none hover:bg-blue-800 dark:hover:bg-gray-600 text-white-600 hover:text-white-800 border-l-4 border-transparent hover:border-blue-500 dark:hover:border-gray-800 pr-6"
							>
								<span className="inline-flex justify-center items-center ml-4">
									<AddCircleOutlineIcon />
								</span>
                <span className='ml-2 text-sm tracking-wide truncate'>
                New Product
                </span>
							</Link>
						</li>
            <li>
							<Link
								to={'/'}
								class="relative flex flex-row items-center h-11 focus:outline-none hover:bg-blue-800 dark:hover:bg-gray-600 text-white-600 hover:text-white-800 border-l-4 border-transparent hover:border-blue-500 dark:hover:border-gray-800 pr-6"
							>
								<span className="inline-flex justify-center items-center ml-4">
									<AddCircleOutlineIcon />
								</span>
                <span className='ml-2 text-sm tracking-wide truncate'>
                New User
                </span>
							</Link>
						</li>
            <li>
							<Link
								to={'/'}
								class="relative flex flex-row items-center h-11 focus:outline-none hover:bg-blue-800 dark:hover:bg-gray-600 text-white-600 hover:text-white-800 border-l-4 border-transparent hover:border-blue-500 dark:hover:border-gray-800 pr-6"
							>
								<span className="inline-flex justify-center items-center ml-4">
									<BarChartIcon />
								</span>
                <span className='ml-2 text-sm tracking-wide truncate'>
                Reports
                </span>
							</Link>
						</li>
            <li>
							<Link
								to={'/'}
								class="relative flex flex-row items-center h-11 focus:outline-none hover:bg-blue-800 dark:hover:bg-gray-600 text-white-600 hover:text-white-800 border-l-4 border-transparent hover:border-blue-500 dark:hover:border-gray-800 pr-6"
							>
								<span className="inline-flex justify-center items-center ml-4">
									<TrendingUpIcon />
								</span>
                <span className='ml-2 text-sm tracking-wide truncate'>
                Sales Analytics
                </span>
							</Link>
						</li>
						
					
						<li>
							<a
								href="#"
								class="relative flex flex-row items-center h-11 focus:outline-none hover:bg-blue-800 dark:hover:bg-gray-600 text-white-600 hover:text-white-800 border-l-4 border-transparent hover:border-blue-500 dark:hover:border-gray-800 pr-6"
							>
								<span class="inline-flex justify-center items-center ml-4">
									<svg
										class="w-5 h-5"
										fill="none"
										stroke="currentColor"
										viewBox="0 0 24 24"
										xmlns="http://www.w3.org/2000/svg"
									>
										<path
											stroke-linecap="round"
											stroke-linejoin="round"
											stroke-width="2"
											d="M7 8h10M7 12h4m1 8l-4-4H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-3l-4 4z"
										></path>
									</svg>
								</span>
								<span class="ml-2 text-sm tracking-wide truncate">
									Messages
								</span>
							</a>
						</li>
						<li>
							<a
								href="#"
								class="relative flex flex-row items-center h-11 focus:outline-none hover:bg-blue-800 dark:hover:bg-gray-600 text-white-600 hover:text-white-800 border-l-4 border-transparent hover:border-blue-500 dark:hover:border-gray-800 pr-6"
							>
								<span class="inline-flex justify-center items-center ml-4">
									<svg
										class="w-5 h-5"
										fill="none"
										stroke="currentColor"
										viewBox="0 0 24 24"
										xmlns="http://www.w3.org/2000/svg"
									>
										<path
											stroke-linecap="round"
											stroke-linejoin="round"
											stroke-width="2"
											d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9"
										></path>
									</svg>
								</span>
								<span class="ml-2 text-sm tracking-wide truncate">
									Notifications
								</span>
								{/* <span class="hidden md:block px-2 py-0.5 ml-auto text-xs font-medium tracking-wide truncate text-red-500 bg-red-50 rounded-full">
									1.2k
								</span> */}
							</a>
						</li>
						<li class="px-5 hidden md:block">
							<div class="flex flex-row items-center mt-5 h-8">
								<div class="text-sm font-light tracking-wide truncate  text-gray-400 uppercase">
									Settings
								</div>
							</div>
						</li>
						<li>
							<a
								href="#"
								class="relative flex flex-row items-center h-11 focus:outline-none hover:bg-blue-800 dark:hover:bg-gray-600 text-white-600 hover:text-white-800 border-l-4 border-transparent hover:border-blue-500 dark:hover:border-gray-800 pr-6"
							>
								<span class="inline-flex justify-center items-center ml-4">
									<svg
										class="w-5 h-5"
										fill="none"
										stroke="currentColor"
										viewBox="0 0 24 24"
										xmlns="http://www.w3.org/2000/svg"
									>
										<path
											stroke-linecap="round"
											stroke-linejoin="round"
											stroke-width="2"
											d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
										></path>
									</svg>
								</span>
								<span class="ml-2 text-sm tracking-wide truncate">Profile</span>
							</a>
						</li>
						<li>
							<a
								href="#"
								class="relative flex flex-row items-center h-11 focus:outline-none hover:bg-blue-800 dark:hover:bg-gray-600 text-white-600 hover:text-white-800 border-l-4 border-transparent hover:border-blue-500 dark:hover:border-gray-800 pr-6"
							>
								<span class="inline-flex justify-center items-center ml-4">
									<svg
										class="w-5 h-5"
										fill="none"
										stroke="currentColor"
										viewBox="0 0 24 24"
										xmlns="http://www.w3.org/2000/svg"
									>
										<path
											stroke-linecap="round"
											stroke-linejoin="round"
											stroke-width="2"
											d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"
										></path>
										<path
											stroke-linecap="round"
											stroke-linejoin="round"
											stroke-width="2"
											d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
										></path>
									</svg>
								</span>
								<span class="ml-2 text-sm tracking-wide truncate">
									Settings
								</span>
							</a>
						</li>
					</ul>
					{/* <p class="mb-14 px-5 py-3 hidden md:block text-center text-xs">
						Copyright @2021
					</p> */}
				</div>
			</div>
		</div>
	)
}
