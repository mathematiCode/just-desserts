/* eslint-disable react/prop-types */
import ItemInCart from "./ItemInCart";
import { CircleCheck } from "lucide-react";
import "../cart.css";

import { Dialog, DialogPanel, DialogTitle } from "@headlessui/react";

function ConfirmOrderModal({
  itemsInCart,
  totalCost,
  isModalOpen,
  setIsModalOpen,
}) {
  return (
    <>
      <Dialog
        className="confirmed-modal"
        open={isModalOpen}
        onClose={() => setIsModalOpen(false)}
      >
        <div className="modal-backdrop"></div>
        <DialogPanel className="dialog">
          <div className="modal-icons">
            <CircleCheck />
          </div>

          <DialogTitle className="dialog-title"> Order Confirmed</DialogTitle>
          <p> We hope you enjoy your food! </p>
          <div className="modal-container">
            {itemsInCart.map((item) => (
              <ItemInCart
                key={`${item.folder}isConfirmed`}
                className="item-in-modal"
                product={item}
                itemConfirmed={true}
                itemsInCart={itemsInCart}
              ></ItemInCart>
            ))}
            <div className="modal-total-container">
              <p>Order Total</p>
              <p className="total-cost-modal">${totalCost}</p>
            </div>
          </div>

          <button
            className="start-new-order-button"
            onClick={() => location.reload()}
          >
            {" "}
            Start New Order
          </button>
        </DialogPanel>
      </Dialog>
    </>
  );
}

export default ConfirmOrderModal;
