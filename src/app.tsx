import React from 'react';
import { updateName, updateSurname, updateEmail, updateTitle, updateMessage, updateNotifications, clearAll } from "./storeData";
import { useSelector, useDispatch } from "react-redux";
import { AppDispatch, RootState } from './store';

const App = () => {
  const {name, surname, email, title, message} = useSelector((state: RootState) => state.data);
  const notifications = useSelector((state: RootState) => state.data.notifications);
  const dispatch: AppDispatch = useDispatch();

  const handleSubmit = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    if (
      name != "" &&
      surname != "" &&
      email != "" &&
      title != "" &&
      message != ""
    ) {
      dispatch(updateNotifications());
      dispatch(clearAll());
    }
  }; 

  return (
    <>
      <div style={{width: "100vw", height: "100vh"}} className="d-flex flex-column justify-content-center align-items-center">
        <form className="d-flex h-50 justify-content-center align-items-center flex-column">
          <input id="inputName" className="mb-3" type="text" placeholder="Name" value={name} onChange={(e) => dispatch(updateName(e.target.value))}/>
          <input id="inputSurname" className="mb-3" type="text" placeholder="Surname" value={surname} onChange={(e) => dispatch(updateSurname(e.target.value))}/>
          <input id="inputEmail" className="mb-3" type="text" placeholder="Email" value={email} onChange={(e) => dispatch(updateEmail(e.target.value))}/>
          <input id="inputTitle" className="mb-3" type="text" placeholder="Title" value={title} onChange={(e) => dispatch(updateTitle(e.target.value))}/>
          <input id="inputMessage" className="mb-3" type="textarea" placeholder="Message" value={message} onChange={(e) => dispatch(updateMessage(e.target.value))}/>
          <button id="btn" onClick={(e) => {handleSubmit(e)}}>Submit</button>
        </form>
        <p id="notifications">Messages received: <span id="not-number">{notifications}</span></p>
      </div>
    </>
  )
}

export default App;