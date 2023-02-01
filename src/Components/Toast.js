import '../App.css';
import '../Components/Toast.css';
import { useContext,useState } from 'react';
import ToastContext from "../Contexts/ToastContext";

function Toast(props) {
const TContext = useContext(ToastContext);
const toast = TContext.toasts ? TContext.toasts[0] : {};
console.log(toast);
  return (
     <div >
        {toast &&
        <div className="toast-div">
            <span>{TContext.toasts[0].text}</span>
            <a className="undo" href="">Undo</a>
            <svg className='close-icon' xmlns="http://www.w3.org/2000/svg" style={{transform: "rotate(45deg)"}}  viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="12" y1="5" x2="12" y2="19"></line><line x1="5" y1="12" x2="19" y2="12"></line></svg>
        </div>
    }
    </div>

  );
}
   
export default Toast;
    