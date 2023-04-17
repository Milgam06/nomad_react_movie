import { useState } from 'react';
import { Link, Navigate, useNavigate } from 'react-router-dom';

function PageControl() {
  const [pgNum, setPgNum] = useState(1);
  const navigate = useNavigate();
  const plusClick = () => {
    console.log(pgNum);
    if (pgNum >= 1) {
      setPgNum((prev) => prev + 1);
      navigate(`/?page=${pgNum}`);
    }
  };
  const minusClick = () => {
    setPgNum(pgNum - 1);
  };
  return (
    <div>
      <span onClick={plusClick}>NExt</span>
      {/* <Link to={pgNum === 0 ? null : setPgNum(pgNum - 1)}>Prev</Link> */}
    </div>
  );
}

export default PageControl;
