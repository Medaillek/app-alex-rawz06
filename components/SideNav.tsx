'use client'

import { Calendar, HandHeart, Radar, Slack, User2, Users2 } from 'lucide-react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import React from 'react'

const sideNavElements = [
	{
		name: 'Profile',
		link: '/',
		icon: <User2 />,
	},
	{
		name: 'Event',
		link: '/event',
		icon: <Calendar />,
		notifications: 34,
	},
	{
		name: 'Charity',
		link: '/charity',
		icon: <HandHeart />,
		notifications: 22,
	},
	{
		name: 'Friends',
		link: '/friends',
		icon: <Users2 />,
	},
	{
		name: 'Community',
		link: '/community',
		icon: <Radar />,
	},
]

const SideNav = () => {
	const pathName = usePathname()
	return (
		<nav>
			<ul className="flex gap-2 flex-col">
				{sideNavElements.map((e, index) => (
					<li
						key={index}
						className={`hover:shadow-lg transition-all rounded-xl hover:border-slate-200 border-transparent hover:bg-white border  ${
							pathName === e.link ? 'shadow-lg bg-white' : ''
						}`}
					>
						<Link
							href={e.link}
							className={`flex p-4 text-sm`}
						>
							<div
								className={`flex flex-1 gap-4 items-center ${
									pathName === e.link ? 'font-semibold' : ''
								}`}
							>
								{e.icon}
								<p>{e.name}</p>
							</div>
							{e.notifications && (
								<div className="bg-orange-600 rounded-md text-white flex items-center justify-center w-7 h-7">
									<p>{e.notifications}</p>
								</div>
							)}
						</Link>
					</li>
				))}
			</ul>
		</nav>
	)
}

export default SideNav
