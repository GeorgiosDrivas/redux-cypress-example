import { updateName, updateSurname, updateEmail, updateTitle, updateMessage, updateNotifications } from "./storeData";
import { useSelector, useDispatch } from "react-redux";

const App = () => {
  const name = useSelector(state => state.data.name);
  const surname = useSelector(state => state.data.surname);
  const email = useSelector(state => state.data.email);
  const title = useSelector(state => state.data.title);
  const message = useSelector(state => state.data.message);
  const notifications = useSelector(state => state.data.notifications);
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    if(name != '' && surname != '' && email != '' && title != '' && message != ''){
      dispatch(updateNotifications());
    }
  } 

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