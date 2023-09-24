import React, { useState } from "react";

const ModalManagement = ({ children, id }) => {
  return (
    <dialog id={id} className="modal modal-bottom sm:modal-middle mx-auto">
      <form
        method="dialog"
        className="modal-box w-full md:w-auto bg-highlightBlue"
      >
        {children}

        <div className="modal-action">
          {/* if there is a button in form, it will close the modal */}
          <button className="btn bg-offCoffee hover:bg-brandOrange text-black">
            Cancel
          </button>
        </div>
      </form>
    </dialog>
  );
};

export default ModalManagement;
