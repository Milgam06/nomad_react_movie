import React, { useState, useEffect } from 'react';

function App() {
  const [toDo, setToDo] = useState('');
  const [toDos, setToDos] = useState([]);
  const Changing = (event) => {
    setToDo(event.target.value);
  };

  const onSubmit = (event) => {
    event.preventDefault();
    if (toDo === '') {
      return;
    }
    setToDos((currentArray) => [toDo, ...currentArray]);
    setToDo('');
  };
  useEffect(() => {
    console.log(toDos);
  }, [toDos]);
  return (
    <div>
      <h1>My toDo {toDos.len}</h1>
      <form onSubmit={onSubmit}>
        <input
          onChange={Changing}
          value={toDo}
          type="text"
          placeholder="Write you to do...."
        ></input>
        <button>Add ToDo..</button>
      </form>
    </div>
  );
}

export default App;
