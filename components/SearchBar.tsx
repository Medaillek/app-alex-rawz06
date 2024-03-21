import { Search } from 'lucide-react'
import React from 'react'

const SearchBar = () => {
	return (
		<div className="flex items-center gap-4 border text-slate-500 rounded-xl px-2 bg-zinc-50">
			<Search />
			<input
				type="text"
				placeholder="Search"
				className="border-0 bg-transparent w-full focus:outline-none py-2 placeholder:text-slate-500"
			/>
		</div>
	)
}

export default SearchBar
