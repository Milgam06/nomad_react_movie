import React, { useState } from 'react';

const Btn = ({ banana, big = false }) => {
  return (
    <button
      style={{
        backgroundColor: 'tomato',
        color: 'white',
        border: 0,
        borderRadius: 10,
        padding: '10px 20px',
        fontSize: big ? '30px' : '15px',
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
      <Btn banana={'Save Change'} big={true} />
      <Btn banana={'Confirm'} big={false} />
    </div>
  );
}

export default App;
