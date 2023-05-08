import { useContext, } from 'react';
import { Navigate } from 'react-router-dom';
import { AuthContext } from '../auth/context/AuthContext';


export const PrivateRuoter = ({ children }) => {

  const { state } = useContext(AuthContext);

  console.log(state.logged)
  return (
    <>
      {
        (state.logged)
          ? children
          : <Navigate to="/login" />
      }
    </>
  )
};
