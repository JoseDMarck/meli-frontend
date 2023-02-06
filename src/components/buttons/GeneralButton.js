/* eslint-disable no-unused-vars */
import React, { useEffect } from "react";
import { BiSearch } from "react-icons/bi";
import { useNavigate } from "react-router-dom";
import { Button } from "antd";
import "antd/dist/antd.css";

function GeneralButton(props) {
	const navigate = useNavigate();

	useEffect(() => {
		return () => {};
	}, []);

	return (
		<>
			<Button
				className={props.className}
				icon={props.icon}
				size="large"
				onClick={props.onClick}
			>
				{props.title}
			</Button>
		</>
	);
}

export default GeneralButton;
