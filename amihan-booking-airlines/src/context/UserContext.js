import React from 'react';


// Creates a context object
// The User COntext will be globally accessible.
	//empty object
const UserContext = React.createContext();

export const UserProvider = UserContext.Provider;

export default UserContext;