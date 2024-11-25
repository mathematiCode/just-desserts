/* eslint-disable react/prop-types */
import ItemInCart from "./ItemInCart";
import "../cart.css";
import {
  Dialog,
  DialogPanel,
  DialogTitle,
  DialogBackdrop,
} from "@headlessui/react";

function ConfirmOrderModal({ itemsInCart, isModalOpen, setIsModalOpen }) {
  console.log(isModalOpen);
  return (
    <Dialog
      className="confirmed-modal"
      open={isModalOpen}
      onClose={() => setIsModalOpen(false)}
    >
      <button onClick={() => setIsModalOpen(false)}>Close</button>
      <DialogTitle> Order Confirmed</DialogTitle>
      <DialogBackdrop className="backdrop" />
      <DialogPanel>
        {itemsInCart.map((item) => (
          <ItemInCart
            key={`${item.folder}isConfirmed`}
            className="item-in-modal"
            product={item}
            itemConfirmed={true}
            itemsInCart={itemsInCart}
          ></ItemInCart>
        ))}
        <button className="start-new-order-button"> Start New Order</button>
      </DialogPanel>
    </Dialog>
  );
}

export default ConfirmOrderModal;
