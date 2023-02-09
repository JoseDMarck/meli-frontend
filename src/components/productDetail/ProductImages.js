/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable no-unused-vars */
import React, { useEffect, useContext, useState } from "react";
import "antd/dist/antd.css";
import Renderif from "../Renderif";
import RenderLoader from "../RenderLoader";
import GeneralButton from "../buttons/GeneralButton";
import ProductContext from "../../context/productContext";

function ProductImages() {
	const { productState, setProductState } = useContext(ProductContext);

	useEffect(() => {
		return () => {};
	}, []);

	return (
		<>
			{productState?.product.pictures?.map((img, index) => {
				return (
					<>
						<Renderif isTrue={index === 0}>
							<div className="pictureContainer">
								<div className="contentImage">
									<img src={img.secure_url} alt={img.id} />
								</div>
							</div>
						</Renderif>
					</>
				);
			})}
		</>
	);
}

export default ProductImages;
