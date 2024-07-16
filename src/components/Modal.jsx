import { AiOutlineClose } from "react-icons/ai"
import { createPortal } from "react-dom";

const Modal = ({onClose, isOpen, children}) => {
  return createPortal (
    <>
        {
            isOpen && 
            <div className="grid place-items-center absolute top-0 backdrop-blur h-screen w-screen z-40">
                <div className="min-h-[200px] max-w-[80%] bg-white p-4 relative z-50 m-auto">
                    <div className="flex justify-end">
                        <AiOutlineClose className="text-2xl self-end" onClick={onClose}/>
                    </div>
                    {children}
                </div>
            </div>
        }
    </>
  ,document.getElementById("modal-root"));
}

export default Modal
