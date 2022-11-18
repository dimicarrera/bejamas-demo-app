import React from "react";

type FeaturedItemBodyProps = {
	name: string;
	category: string;
	dimensions?: {
		width: number;
		height: number;
	};
	details?: {
		size: number;
		description: string;
		recommendations: {
			src: string;
			alt: string;
		}[];
	};
};

const FeaturedItemBody = ({
	name,
	category,
	dimensions,
	details,
}: FeaturedItemBodyProps) => {
	return (
		<div className="flex justify-between my-8">
			<div className="basis-1/2">
				<h5 className="font-bold text-xl mb-4">About the {name}</h5>
				<p className="font-bold text-xl text-gray-600 mb-4 capitalize">
					{category}
				</p>
				<p className="text-gray-600 leading-7 text-lg">{details?.description}</p>
			</div>
			<div className="basis-1/2 flex flex-col">
				<h6 className="font-bold text-xl ml-auto mb-6">People also buy</h6>
				<div className="flex ml-auto gap-6 mb-12">
					<img
						className="w-28 h-36 object-cover"
						src={details?.recommendations[0].src}
						alt={details?.recommendations[0].alt}
					/>
					<img
						className="w-28 h-36 object-cover"
						src={details?.recommendations[1].src}
						alt={details?.recommendations[1].alt}
					/>
					<img
						className="w-28 h-36 object-cover"
						src={details?.recommendations[2].src}
						alt={details?.recommendations[2].alt}
					/>
				</div>
				<div className="flex flex-col">
					<h6 className="font-bold text-xl text-right mb-4">Details</h6>
					{dimensions && (
						<p className="text-gray-600 mb-2 text-right">
							Size: {dimensions?.width} x {dimensions?.height} pixel
						</p>
					)}
					{details && (
						<p className="text-gray-600 mb-2 text-right">
							Size: {Math.ceil(details?.size / 1024)} mb
						</p>
					)}
				</div>
			</div>
		</div>
	);
};

export default FeaturedItemBody;
