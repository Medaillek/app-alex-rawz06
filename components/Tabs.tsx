import React from 'react'

const Tabs = () => {
	return (
		<div className="p-1 bg-zinc-200 rounded-xl flex items-center gap-2 w-max">
			{['Events', 'Room', 'Donations', 'Followers'].map((tab, index, arr) => (
				<React.Fragment key={index}>
					<button
						key={index}
						className={`py-2 px-4 text-sm font-medium text-black ${
							index === 0 ? ' bg-white rounded-lg' : ''
						}`}
					>
						{tab}
					</button>
					{index + 1 < arr.length && (
						<div className="h-4 w-[1px] bg-slate-400"></div>
					)}
				</React.Fragment>
			))}
		</div>
	)
}

export default Tabs
