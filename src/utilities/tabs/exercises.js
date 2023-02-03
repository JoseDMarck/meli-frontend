import { FaTrashAlt } from "react-icons/fa";
import { FiEdit } from "react-icons/fi";
import { TbLock, TbEye } from "react-icons/tb";
import exercise from "../../assets/images/generals/fitness.png";
import { Space } from "antd";

export const ExercisesColumns = [
	{
		title: "",
		dataIndex: "",
		key: "",
		render: (name, row) => (
			<div className="exercise_image">
				<img src={exercise} />
			</div>
		),
	},
	{
		title: "Nombre",
		dataIndex: "name",
		key: "name",
		render: (name, row) => (
			<div className="exercise_name exercise_border">{name}</div>
		),
	},
	{
		title: "Descripción",
		dataIndex: "description",
		key: "description",
	},

	{
		title: "Video",
		dataIndex: "video",
		key: "video",
		render: (_, record) => (
			<Space size="middle">
				<TbEye className="iconA text-purple" />
			</Space>
		),
	},

	{
		title: "Acciones",
		key: "action",
		render: (_, record) => (
			<Space size="middle">
				<FaTrashAlt className="iconA text-purple" />
				<FiEdit className="iconA text-purple" />
				<TbLock className="iconA text-purple" />
			</Space>
		),
	},
];
