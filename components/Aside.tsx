import React from 'react'
import SideNav from './SideNav'
import Followers from './Followers'

const Aside = () => {
	return (
		<aside className="bg-zinc-50 w-full max-w-64 sticky h-dvh px-6 space-y-6 py-8">
			<img
				src="Logo.png"
				alt="Logo"
				className="w-12 h-12 "
			/>
			<SideNav />
			<Followers />
		</aside>
	)
}

export default Aside
