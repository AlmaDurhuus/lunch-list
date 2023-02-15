import ListCreator from './ListCreator';
import { useState } from 'react';





function CreateListButton() {
  const [showListCreator, setShowListCreator] = useState(false)
  const [listCreatorKey, setListCreatorKey] = useState(0);


  const handleButtonClick = () => {
    setShowListCreator(true)
    setListCreatorKey(listCreatorKey + 1);

  }
  return (

      <div>
        <button onClick={handleButtonClick}> Create List!</button>
        {showListCreator || showListCreator === null ? <ListCreator key={listCreatorKey} /> : null}
      </div>

  );
}

export default CreateListButton;


