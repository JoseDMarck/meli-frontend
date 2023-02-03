/* eslint-disable no-unused-vars */
import React, { useEffect } from "react";
import "../../assets/css/dashboard.css";
import { HiOutlineTicket } from "react-icons/hi";
import { GiBattleship } from "react-icons/gi";
import { BsCheck2Circle } from "react-icons/bs";
import { BiBuilding } from "react-icons/bi";
import moment from "moment";
import { Select } from "antd";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Doughnut } from "react-chartjs-2";

const { Option } = Select;
ChartJS.register(ArcElement, Tooltip, Legend);

function DashboardGraphs() {
	const handleChange = (value) => {
		console.log(`selected ${value}`);
	};
	const option = {
		legend: {
			position: "bottom",
			labels: {
				boxWidth: 10,
			},
		},
		label: {
			position: "bottom",
		},
	};
	const data = {
		labels: ["Completados", "En transito"],
		datasets: [
			{
				label: "",
				data: [820, 425],
				backgroundColor: ["#121010", "#ff002f"],
				borderColor: ["#121010", "#ff002f"],
				borderWidth: 1,
			},
		],
	};

	useEffect(() => {
		return () => {};
	}, []);

	return (
		<>
			<div className="graphs_section text-gray">
				<div className="graphs_container bg-gray">
					<div className="graphs_header">
						<div className="header_company">
							<div className="title_company text-white sf__section_title">
								Programas
							</div>
							<div className="select_filer_companies mb-20">
								<Select
									placeholder="Filtrar por"
									style={{
										width: 160,
									}}
									onChange={handleChange}
								>
									<Option value="0">Activos</Option>
									<Option value="2">Completados</Option>
								</Select>
							</div>
							<div className="clear"></div>
							<div className="line"></div>
						</div>
						<div className="clear"></div>
					</div>
					<div className="graps_data_info">
						<div className="data_seal_option text-gray sf__text_normal ">
							<div className="description description_1 text-white">
								Activos{" "}
							</div>
							<div className="number text-white">425</div>
							<div className="clear"></div>
						</div>

						<div className="data_seal_option">
							<div className="description description_2 text-white">
								Completados{" "}
							</div>
							<div className="number text-white">820</div>
							<div className="clear"></div>
						</div>
						<div className="line "></div>
					</div>

					<div className="graph_circle_block">
						<Doughnut data={data} options={option} />
					</div>
				</div>
			</div>
		</>
	);
}

export default DashboardGraphs;
