import { createContext, useContext, useState } from "react";
import { useNavigate } from "react-router-dom";


const AlertContext = createContext(undefined);

export const AlertProvider = ({ children }) => {
  const [state, setState] = useState({
    isOpen: false,
    // Type can be either "success" or "error"
    type: 'success',
    // Message to be displayed, can be any string
    message: '',
  });
  const navigate = useNavigate();

  return (
    <AlertContext.Provider
      value={{
        ...state,
        onOpen: (type, message) => setState({ isOpen: true, type, message }),
        onClose: () => {
          setState({ isOpen: false, type: '', message: '' });
          navigate('/confirmation');  // should be placed outside somewhere, here just for convinient.
        },
      }}
    >
      {children}
    </AlertContext.Provider>
  );
};

export const useAlertContext = () => useContext(AlertContext);
