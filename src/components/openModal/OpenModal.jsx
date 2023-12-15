import React, { useState } from "react";
import "./OpenModal.scss";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import FormSelect from "../formSelect/FormSelect";
import { useTranslation } from "react-i18next";
import Button2 from "../../components/button/Button";

function OpenModal(props) {
  const [t] = useTranslation();
  const [formValues, setFormValues] = useState({});
  const handleButtonClick = () => {
    console.log(formValues);
  };
  console.log(props);
  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          {props?.show?.name}
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <FormSelect
          inputs={props?.show?.inputs}
          name={t("Save modifications")}
          setFormValues={setFormValues}
        />
        <Button2 name={t("Save modifications")} onClick={handleButtonClick} />
      </Modal.Body>
      {/* <Modal.Footer>
        <Button onClick={props.onHide}>Close</Button>
      </Modal.Footer> */}
    </Modal>
  );
}

export default OpenModal;
