import React from 'react'

const followings = [
	{
		name: 'Shigeru Minamoto',
		active: true,
	},
	{ name: 'Hideo Kojima', active: false },
	{ name: 'Yoko Taro', active: false },
	{ name: 'Hidetaka Miyazaki', active: false },
	{ name: 'Yoshiaki Koizumi', active: true },
]

const Followers = () => {
	return (
		<div className="space-y-4">
			<h2 className="font-semibold text-base text-slate-600">Followings</h2>

			<ul className="space-y-4">
				{followings.map((f, index) => (
					<li
						key={index}
						className="flex gap-4 items-center"
					>
						<div className="relative">
							<img
								src={`./av${index + 1}.svg`}
								className="w-10 h-10 rounded-xl"
							/>
							<div
								className={`rounded-full w-4 h-4 absolute -bottom-1 -right-1 border-2 border-white ${
									f.active ? 'bg-green-500' : 'bg-gray-300'
								}`}
							></div>
						</div>
						<p className="font-medium">{f.name}</p>
					</li>
				))}
			</ul>
		</div>
	)
}

export default Followers
