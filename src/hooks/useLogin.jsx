
import React, {useEffect, useState} from 'react';

const useLogin = (state) => {
  const [passedIn, setPassedIn] = useState(false)
  const [loggedIn, setLoggedIn] = useState(false);
  // if (state) {
  useEffect(() => {
    setLoggedIn(passedIn)
  }, [passedIn])
  // }
  return loggedIn;
} 

export default useLogin;