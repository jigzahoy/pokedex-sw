import { useState, useEffect } from 'react'

/**
 *  Custom Hook by sulbekk
 * @param {string} key 
 * @param {object} defaultValue 
 */
export default function usePersistedState(key, defaultValue) {
  const [state, setState] = useState(
    () => JSON.parse(localStorage.getItem(key)) || defaultValue
  );
  useEffect(() => {
    localStorage.setItem(key, JSON.stringify(state));
  }, [key, state]);
  return [state, setState];
}