/* eslint-disable no-unused-vars */
import React, { useEffect } from "react";
import { BiSearch } from "react-icons/bi";

function SearchForm(props) {
	const placeholder = props.placeholder;
	const background = props.background;
	const borderColor = props.borderColor;
	const color = props.color;
	const width = props.width;
	const height = props.height;

	useEffect(() => {
		return () => {};
	}, []);

	return (
		<>
			<div className="sf__Search">
				<div className="icon">
					<BiSearch />
				</div>

				<input
					style={{
						width: width,
						height: height,
						background: background,
						color: color,
						border: `solid 1px ${borderColor}`,
					}}
					type="text"
					name="search"
					placeholder={placeholder}
				/>
			</div>
		</>
	);
}

export default SearchForm;
