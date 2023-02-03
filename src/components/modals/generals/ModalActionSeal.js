/* eslint-disable no-unused-vars */
import React, { useEffect, useState, useContext } from "react";
import { Modal } from "antd";
import DataContext from "../../../context/dataContext";
import GeneralButton from "../../buttons/GeneralButton";
import { Service } from "../../../services/api";
import ComponentContext from "../../../context/componentContext";
import SealsContext from "../../../context/sealsContext";

var sha1 = require("sha1");
function ModalActionSeal(props) {
	const { modalActionSeal, setModalActionSeal, modalActionInfo, actionID } =
		useContext(DataContext);

	const { setStateSeals, stateSeals } = useContext(SealsContext);
	const { setStateComp } = useContext(ComponentContext);
	const [sealMessage, setSealMessage] = useState("");

	const closeModal = () => {
		setModalActionSeal(false);
	};

	const deleteSeal = async () => {
		const sealData = {
			id: actionID,
			status: modalActionInfo.status,
			currentStatus: modalActionInfo.currentSealStatus,
		};

		console.log("sealData", sealData);

		let endPoint = modalActionInfo.endpoint;

		let messageInfo = "";
		if (modalActionInfo.status === 6) {
			messageInfo = "El sello se ha eliminado correctamente";
		}
		if (modalActionInfo.status === 5) {
			messageInfo = "El sello se ha bloquedo correctamente";
		}
		if (modalActionInfo.status === 1) {
			messageInfo = "El sello se ha bloquedo correctamente";
		}

		let _seals = await Service("PUT", endPoint, sealData);
		console.log("===SEALS update====", _seals);

		if (_seals.data.status === 200) {
			closeModal();

			setStateComp({
				modalStatus: "success",
				modalMessageTitle: "Operación realizada con éxito:",
				modalMessageDescription: messageInfo,
				modalMessage: true,
				sealModalCreate: false,
			});

			setStateSeals({
				updateState: !stateSeals.updateState,
			});
		}
	};
	useEffect(() => {
		return () => {};
	}, []);

	return (
		<>
			<Modal
				className="modalMessage"
				visible={modalActionSeal}
				onCancel={closeModal}
				cancelButtonProps={{
					style: { display: "none" },
				}}
				okButtonProps={{
					style: { display: "none" },
				}}
				centered
			>
				<>
					<div className="mb-20 psc__text_normal text-center">
						{modalActionInfo.message}
					</div>

					<div className="btn_modal_content">
						<GeneralButton
							className="btn__normal btn__blue transition mr-10"
							title={modalActionInfo.button}
							onClick={() => deleteSeal()}
						/>

						<GeneralButton
							className="btn__normal btn__blue transition mr-10"
							title="Cancelar"
							onClick={() => closeModal()}
						/>

						<div className="clear"></div>
					</div>
				</>
			</Modal>
		</>
	);
}

export default ModalActionSeal;
