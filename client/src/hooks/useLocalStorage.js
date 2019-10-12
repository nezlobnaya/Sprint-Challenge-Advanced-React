import { useState } from "react";

export const useLocalStorage = (key, initialValue) => {
  const [storedValue, setStoredValue] = useState(() => { //pass callback for useState
    const item = window.localStorage.getItem(key); //search for existing key in localStorage
    return item ? JSON.parse(item) : initialValue; //if item is defined, return item stringified, or the initialValue
  });

  //we don't want to use setStoredValue - we need a setter function that was implementing the localStorage 
  const setValue = value => {
    setStoredValue(value);
    window.localStorage.setItem(key, JSON.stringify(value)); // converts a JavaScript object or value to a JSON string
  };
  return [storedValue, setValue];
};

