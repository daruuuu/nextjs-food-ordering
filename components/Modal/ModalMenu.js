/* eslint-disable @next/next/no-img-element */
import { Button, Modal } from "flowbite-react";
import React from "react";

const ModalMenu = (props) => {
  return (
    <React.Fragment>
      <Modal dismissible={true} show={props.visible} onClose={props.onClose}>
        <Modal.Body>
          <div className="space-y-6 flex-col flex items-center justify-around md:flex-row px-4">
            <img src={props.image} alt={props.name} className="max-h-32" />
            <div className="flex flex-col pl-6">
              <p className="text-base leading-relaxed text-gray-700 dark:text-gray-400 ">
                {props.description}
              </p>
              <p className="text-xl leading-relaxed font-bold">
                Rp {props.price}.000
              </p>
            </div>
          </div>
        </Modal.Body>
        <Modal.Footer className="justify-between">
          <button className="primary-button" onClick={props.onClose}>
            Add to cart
          </button>
          <button className="default-button" onClick={props.onClose}>
            Close
          </button>
        </Modal.Footer>
      </Modal>
    </React.Fragment>
  );
};

export default ModalMenu;
