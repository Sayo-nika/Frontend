import React from 'react';

// If we ever need more global storage, use zustand

const UserContext = React.createContext({
  user: null,
  setUser() {}
});
export default UserContext;
