import { FaTrashAlt } from "react-icons/fa";
import { FiEdit } from "react-icons/fi";
import { TbLock } from "react-icons/tb";
import { Space } from "antd";

export const SealsColumns = [
	{
		title: "Numero ID",
		dataIndex: "number",
		key: "number",
		render: (id) => <div className="SealID">{id}</div>,
	},
	{
		title: "Status",
		dataIndex: "status",
		key: "status",
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
