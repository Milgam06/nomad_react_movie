import React, { useState } from 'react';
import SecPage from './ConfirmPage';

const Btn = ({ text, changeValue }) => {
  return (
    <button
      style={{
        backgroundColor: 'tomato',
        color: 'white',
        border: 0,
        borderRadius: 10,
        padding: '10px 20px',
        fontSize: '16px',
      }}
      onClick={changeValue}
    >
      {text}
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
  const [Value, setValue] = useState('Save Change');
  const changeValue = () => {
    setValue('Revert Change');
  };
  return (
    <div>
      <Btn text={Value} changeValue={changeValue} />
      <Btn text={'Confirm'} />
    </div>
  );
}

export default App;
