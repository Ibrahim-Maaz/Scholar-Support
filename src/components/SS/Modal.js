// import React from "react";
// import "./Modal.css";

// function Modal({ setOpenModal }) {
//   return (
//     <div className="modalBackground">
//       <div className="modalContainer">
//         <div className="titleCloseBtn">
//           <button
//             onClick={() => {
//               setOpenModal(false);
//             }}
//           >
//             X
//           </button>
//         </div>
//         <div className="title">
//           <h1>Are You Sure You Want to Continue?</h1>
//         </div>
//         <div className="body">
//           <p>Click on Continue to confirm the payment</p>
//         </div>
//         <div className="footer">
//           <button
//             onClick={() => {
//               setOpenModal(false);
//             }}
//             id="cancelBtn"
//           >
//             Cancel
//           </button>
//           <button>Continue</button>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default Modal;



import React, { useState } from "react";
import "./Modal.css";

function Modal({ setOpenModal }) {
  const [creditCardNumber, setCreditCardNumber] = useState("");

  const handleContinueClick = () => {
    // Add any credit card validation logic here before continuing
    console.log("Credit Card Number:", creditCardNumber);
    // Implement your logic for handling the credit card information
    setOpenModal(false);
  };

  return (
    <div className="modalBackground">
      <div className="modalContainer">
        <div className="titleCloseBtn">
          <button
            onClick={() => {
              setOpenModal(false);
            }}
          >
            X
          </button>
        </div>
        <div className="title">
          <h1>Are You Sure You Want to Continue?</h1>
        </div>
        <div className="body">
          {/* Add credit card input field */}
          <label htmlFor="creditCard" style={{fontSize: 15, marginRight: '30px'}}>Card #:</label>
          <input
            type="text"
            id="creditCard"
            value={creditCardNumber}
            onChange={(e) => setCreditCardNumber(e.target.value)}
          />
        </div>

        <div className="body">
          {/* Add credit card input field */}
          <label htmlFor="creditCard" style={{fontSize: 15, marginRight: '30px'}}>CVV:</label>
          <input
            type="text"
            id="creditCard"
            value={creditCardNumber}
            onChange={(e) => setCreditCardNumber(e.target.value)}
          />
        </div>


        <div className="body">
          {/* Add credit card input field */}
          <label htmlFor="creditCard" style={{fontSize: 15, marginRight: '30px'}}>Expiry:</label>
          <input
            type="text"
            id="creditCard"
            value={creditCardNumber}
            onChange={(e) => setCreditCardNumber(e.target.value)}
          />
        </div>

        <div className="footer">
          <button
            onClick={() => {
              setOpenModal(false);
            }}
            id="cancelBtn"
          >
            Cancel
          </button>
          <button onClick={handleContinueClick}>Continue</button>
        </div>
      </div>
    </div>
  );
}

export default Modal;