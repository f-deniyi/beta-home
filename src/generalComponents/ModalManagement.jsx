import React, { useState } from "react";

const ModalManagement = ({ children, id, type }) => {
  return (
    <dialog id={id} className={`modal ${type === 'large' ? 'max-w-none w-4/5 mx-auto' : ''} `}>
      <div className={`modal-box bg-white p-[26px] ${type === 'large' ? 'max-w-none w-full' : 'max-w-[32rem]'}`}>
        {children}
      </div>
      <form method="dialog" className="modal-backdrop">
        <button>close</button>
      </form>
    </dialog>

  );
};

export default ModalManagement;
