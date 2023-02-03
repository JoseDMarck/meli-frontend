/* eslint-disable react-hooks/rules-of-hooks */
/* eslint-disable no-unused-vars */
import React, { useEffect } from "react";
import { BiSearch } from "react-icons/bi";
import "../../assets/css/generals.css";
import "../../assets/css/buttons.css";
import { useNavigate } from "react-router-dom";

import { Button } from "antd";

import "antd/dist/antd.css";

function IconButton(props) {
	const navigate = useNavigate();

	useEffect(() => {
		return () => {};
	}, []);

	return (
		<>
			<div
				className={props.className}
				onClick={props.onClick}
				style={{
					color: props.color,
					width: props.width,
					marginBottom: props.marginBottom,
				}}
			>
				<div className="icon" style={{ background: props.icon_color }}>
					{props.icon}
				</div>
				<div className="psc__text_normal title">{props.title}</div>
				<div className="clear"></div>
			</div>
		</>
	);
}

export default IconButton;
