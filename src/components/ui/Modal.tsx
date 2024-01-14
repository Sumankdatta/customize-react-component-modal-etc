import { createPortal } from "react-dom";
import cn from "../../utils/cn";
import {
  MouseEvent,
  ReactNode,
  createContext,
  useContext,
  useRef,
} from "react";

const ModalContext = createContext<TModalContext | null>(null);

type TModalContext = {
  onClose: () => void;
};
type TModel = {
  isOpen: boolean;
  onClose: () => void;
  children: ReactNode;
};

type TClose = {
  children?: ReactNode;
};

type THeader = TClose;

const Modal = ({ isOpen, onClose, children }: TModel) => {
  const containerRef = useRef<HTMLDivElement>(null);

  const handleOutsideClose = (e: MouseEvent) => {
    if (!containerRef.current?.contains(e.target as Node)) {
      onClose();
    }
  };

  return createPortal(
    <ModalContext.Provider value={{ onClose }}>
      <div
        onClick={handleOutsideClose}
        className={cn(
          "fixed flex justify-center items-center inset-0 bg-gray-500/70 invisible",
          {
            visible: isOpen,
          }
        )}
      >
        <div
          ref={containerRef}
          className="bg-white w-full max-w-sm rounded-md p-4"
        >
          {children}
        </div>
      </div>
    </ModalContext.Provider>,
    document.getElementById("portal") as Element
  );
};

const CloseButton = ({ children }: TClose) => {
  const { onClose } = useContext(ModalContext) as TModalContext;
  return (
    <button onClick={onClose} className="">
      {children ? (
        children
      ) : (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth="2"
          stroke="currentColor"
          className="w-6 h-6 bg-gray-300 font-bold rounded-md"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M6 18 18 6M6 6l12 12"
          />
        </svg>
      )}
    </button>
  );
};

const Header = ({ children }: THeader) => {
  return (
    <div className="flex justify-between items-center w-full">{children}</div>
  );
};

Modal.Header = Header;
Modal.CloseButton = CloseButton;

export default Modal;
