/* eslint-disable no-unused-vars */
import React, { useEffect, useState, useContext } from "react";
import { Modal, Result, Button } from "antd";
import GeneralButton from "../../buttons/GeneralButton";
import ComponentContext from "../../../context/componentContext";

function ModalMessage(props) {
	const {
		stateComp,
		setStateComp,
		modalMessage,
		modalMessageDescription,
		modalStatus,
		modalMessageTitle,
		modalMessageInfo,
	} = useContext(ComponentContext);

	const closeModal = () => {
		setStateComp({
			modalMessage: false,
			modalStatus: "",
			modalMessageTitle: "",
			modalMessageDescription: "",
			modalMessageInfo: "",
		});
	};

	useEffect(() => {
		return () => {};
	}, []);

	return (
		<>
			<Modal
				className="modalMessage"
				visible={modalMessage}
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
					<Result
						status={modalStatus}
						title={modalMessageTitle}
						subTitle={`${modalMessageDescription}`}
						extra={[
							<GeneralButton
								className="btn__normal btn__blue transition mr-10"
								title="Aceptar"
								onClick={() => closeModal()}
							/>,
						]}
					/>
				</>
			</Modal>
		</>
	);
}

export default ModalMessage;
