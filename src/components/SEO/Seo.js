/* eslint-disable no-unused-vars */
import React, { useEffect, useContext, useState } from "react";
import ProductContext from "../../context/productContext";
import { SuperSEO } from "react-super-seo";
import portada from "../../assets/images/generals/mercado-libre.jpeg";

function Seo(props) {
	const { productState, setProductState } = useContext(ProductContext);

	useEffect(() => {
		return () => {};
	}, []);

	return (
		<>
			<SuperSEO
				title={props.title}
				description={props.description}
				lang="en"
				openGraph={{
					ogImage: {
						ogImage: props.image,
						ogImageAlt: "MELI",
						ogImageWidth: 1200,
						ogImageHeight: 630,
						ogImageType: "image/jpeg",
					},
				}}
				twitter={{
					twitterSummaryCard: {
						summaryCardImage: props.image,
						summaryCardImageAlt: "MELI",
						summaryCardSiteUsername: "justinmahar",
					},
				}}
			/>
		</>
	);
}

export default Seo;
