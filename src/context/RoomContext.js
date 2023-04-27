import React, {createContext, useState, useEffect} from 'react';
import {roomData} from "../data"

export const RoomContext = createContext();

const RoomProvider = ({children}) => {
  const [rooms, setRooms] = useState(roomData)
  
  return (
    <RoomContext.Provider value={{rooms}}>
      {children}
      </RoomContext.Provider>
  )
};

export default RoomProvider;

