import React, { createContext, useState, useReducer } from 'react';

export const UserContext = createContext();

const initialUser = {
  name: 'jce',
  job: 'FE-developer',
};

const userReducer = (state, action) => {
  switch (action.type) {
    case 'changeJob':
      // state의 job에 해당하는 데이터를 action.text로
      return { ...state, job: action.text };
      break;

    default:
      break;
  }
};

export default function UserStore(props) {
  const [user, dispatch] = useReducer(userReducer);
  console.log(user);

  return (
    <UserContext.Provider value={{ user, dispatch }}>
      {props.children}
    </UserContext.Provider>
  );
}
