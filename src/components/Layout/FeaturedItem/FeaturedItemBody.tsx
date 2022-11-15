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
		<div className="flex justify-between">
			<div>
				<h5>About the {name}</h5>
				<span>{category}</span>
				<p>{details?.description}</p>
			</div>
			<div>
				<h6>People also buy</h6>
				<div className="flex">
					<img
						className="w-28"
						src={details?.recommendations[0].src}
						alt={details?.recommendations[0].alt}
					/>
					<img
						className="w-28"
						src={details?.recommendations[1].src}
						alt={details?.recommendations[1].alt}
					/>
					<img
						className="w-28"
						src={details?.recommendations[2].src}
						alt={details?.recommendations[2].alt}
					/>
				</div>
				<div>
					<h6>Details</h6>
					{dimensions && (
						<span>
							Size: {dimensions?.width} x {dimensions?.height} pixel
						</span>
					)}
					{details && <span>Size: {details?.size / 1024} mb</span>}
				</div>
			</div>
		</div>
	);
};

export default FeaturedItemBody;
