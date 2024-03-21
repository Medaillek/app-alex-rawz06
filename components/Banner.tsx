import React from 'react'

const Banner = () => {
	return (
		<div className="relative">
			<img
				src="banner.png"
				alt=""
				className="object-fill imageMask"
			/>

			<svg
				width="2000"
				height="80"
				viewBox="0 0 2000 80"
				fill="none"
				xmlns="http://www.w3.org/2000/svg"
				className="absolute bottom-0"
			>
				<path
					d="M112.5 0H0V100H2000V0H322.5C254.5 0 281.537 46.4866 268 63.5C254.5 80 209.5 78.061 189.5 63.5C169.5 48.939 178 0 112.5 0Z"
					fill="#FAFAFA"
				/>
			</svg>

			<div className="absolute bottom-4 left-[184px] flex items-center gap-8">
				<img
					src="/av1.svg"
					alt=""
					className="w-20 h-20 rounded-full "
				/>
				<p>1.25k Followers 455 Followings</p>
			</div>
		</div>
	)
}

export default Banner
