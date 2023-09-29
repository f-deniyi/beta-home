import React, { useState } from "react";

const ModalManagement = ({ children, id }) => {
  return (
    <dialog id={id} className="modal">
      <div className="modal-box bg-white p-[26px]">
        {children}
      </div>
      <form method="dialog" className="modal-backdrop">
        <button>close</button>
      </form>
    </dialog>

  );
};

export default ModalManagement;
