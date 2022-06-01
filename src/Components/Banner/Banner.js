import React from "react";
import Carousel from "react-material-ui-carousel";
import MyCard from "../cards/MyCard";
import BannerItem from "./BannerItem";

const Banner = () => {
	const items = [
		{
			name: "Random Name #1",
			description: "Move your cusror Right or Left for moving Button",
			bgcolor: "#f0932b"
		},
		{
			name: "Random Name #2",
			description: "Enjoy Uniqness!",
			bgcolor: "#22a6b3"
		},
		{
			name: "Random Name #3",
			description: "Feel The Simplicity!",
			bgcolor: "#20aacc"
		},
	];
	return (
		<div>
			<Carousel
				style={{}}
			>
				{items.map((item, i) => (
					<BannerItem key={i} item={item} />
				))}
			</Carousel>

			<div style={{ height: "200px", width: "100%", backgroundColor: "#fff" }}>
				<MyCard />
			</div>

		</div>
	);
};

export default Banner;
