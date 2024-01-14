import { useState } from "react";
import Button from "./components/ui/Button";
import Components from "./components/ui/Components";
import Modal from "./components/ui/Modal";
import Accordion from "./components/ui/Accordian";

function App() {
  const [modal, setModal] = useState(false);
  const handleModalClose = () => {
    setModal((prev) => !prev);
  };
  return (
    <Components>
      <div className="h-screen w-full flex items-center justify-center">
        <Button onClick={() => setModal((prev) => !prev)}>Open Modal</Button>
        <Modal isOpen={modal} onClose={handleModalClose}>
          <Modal.Header>
            <h1></h1>
            <Modal.CloseButton></Modal.CloseButton>
          </Modal.Header>

          <h1>This is modal</h1>
        </Modal>
        <Accordion />
      </div>
    </Components>
  );
}

export default App;
