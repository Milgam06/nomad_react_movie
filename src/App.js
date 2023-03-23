import React, { useState } from 'react';

const Btn = ({ banana }) => {
  return (
    <button
      style={{
        backgroundColor: 'tomato',
        color: 'white',
        border: 0,
        borderRadius: 10,
        padding: '10px 20px',
      }}
    >
      {banana}
    </button>
  );
};
// const ConfirmBtn = () => {
//   return (
//     <button
//       style={{
//         backgroundColor: 'tomato',
//         color: 'white',
//         border: 0,
//         borderRadius: 10,
//         padding: '10px 20px',
//       }}
//     >
//       Confirm
//     </button>
//   );
// };
function App() {
  return (
    <div>
      <Btn banana={'Save Change'} />
      <Btn banana={'Confirm'} />
    </div>
  );
}

export default App;
