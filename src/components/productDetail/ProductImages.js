/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable no-unused-vars */
import React, { useEffect, useContext, useState } from "react";
import "antd/dist/antd.css";
import { Image } from "antd";
import Renderif from "../Renderif";
import RenderLoader from "../RenderLoader";
import GeneralButton from "../buttons/GeneralButton";
import ProductContext from "../../context/productContext";

function ProductImages() {
	const { productState, setProductState } = useContext(ProductContext);

	const [state, setState] = useState({
		imgIndex: 0,
	});

	const selectImage = (index) => {};
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
								<div className="contentGalery">
									{productState?.product.pictures?.map(
										(img, index) => {
											return (
												<Renderif
													isTrue={
														productState?.isLoader
													}
												>
													<div
														className="galleryItem transition pointer"
														style={{
															backgroundImage: `url(${img.secure_url})`,
														}}
														onClick={() => {
															setState({
																imgIndex: index,
															});
														}}
													></div>
												</Renderif>
											);
										}
									)}
								</div>

								<div className="contentImage">
									<Renderif isTrue={productState?.isLoader}>
										<Image
											src={
												productState?.product.pictures[
													state?.imgIndex
												].secure_url
											}
											alt={img.id}
											placeholder="vista previa"
										/>
									</Renderif>
								</div>
								<div className="clear" />
							</div>
						</Renderif>
					</>
				);
			})}
		</>
	);
}

export default ProductImages;
