import React from 'react'
import SearchBar from '../../components/SearchBar'
import Banner from '../../components/Banner'
import Tabs from '../../components/Tabs'

const HomePage = () => {
	return (
		<main className="py-6 bg-zinc-50 space-y-4">
			<SearchBar />

			<div className="rounded-3xl space-y-4 overflow-clip pb-8">
				<Banner />
				<h1 className="font-bold text-xl">Fredy Mercury</h1>
				<p>
					Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit
					quibusdam iure ipsum enim facilis sequi? Velit esse dolor, ipsam sint
					debitis unde inventore possimus earum id. Eveniet beatae pariatur
					recusandae.
				</p>

				<Tabs />
			</div>
		</main>
	)
}

export default HomePage
