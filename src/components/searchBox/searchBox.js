/* eslint-disable no-unused-vars */
import React, { useEffect, useContext, useState } from "react";
import "antd/dist/antd.css";
import "../../assets/css/components/searchBox.css";
import { BsSearch } from "react-icons/bs";
import { CgCloseO } from "react-icons/cg";
import meliLogo from "../../assets/images/logos/Logo_ML@2x.png";
import Renderif from "../Renderif";

function SearchBox() {
	const [state, setState] = useState({
		searchValue: "",
		searchIcon: false,
	});

	const onSearch = (event) => {
		if (event.target.name === "search") {
			const onlyText = event.target.value.replace(
				/[^A-Za-z0-9' ']/gi,
				""
			);

			console.log("onlyText", onlyText);

			setState({
				...state,
				searchValue: onlyText,
			});
		}
	};

	return (
		<>
			<div className="ml__searchBox bg-yellow">
				<div className="center_content">
					<div className="logo">
						<img
							className="d-none d-lg-block"
							src={meliLogo}
							alt="meli-logo"
						/>
					</div>

					<div className="input_content">
						<input
							type="text"
							name="search"
							placeholder="Núnca dejes de buscar"
							value={state?.searchValue}
							onChange={onSearch}
							maxLength={20}
						/>

						<Renderif isTrue={state.searchValue.length >= 3}>
							<div className="closeIcon">
								<CgCloseO
									onClick={() =>
										setState({
											...state,
											searchValue: "",
										})
									}
								/>
							</div>
						</Renderif>
					</div>

					<div className="searchBTN">
						<BsSearch className="text-1st-gray" />
					</div>
					<div className="clear"></div>
				</div>
			</div>
		</>
	);
}

export default SearchBox;
