import { useContext, useEffect, useState } from 'react';
import { Navigate } from 'react-router-dom';

import { AuthContext } from '../auth/context/AuthContext';

export const PrivateRuoter = ({ children }) => {

  const { state } = useContext(AuthContext);

  return (
    <>
      {
        (state.looged)
          ? children
          : <Navigate to="/login" />
      }
    </>
  )
};
