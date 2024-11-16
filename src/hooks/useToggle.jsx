import { useState } from "react"

/**
 * Manages boolean state with a toggle function.
 * 
 * @param {boolean} [initialState=false] - The initial state of the toggle (default is `false`).
 * @returns {Array} - An array containing:
 *   - `isVisible`: The current boolean state.
 *   - `toggle`: A function to toggle the state between `true` and `false`.
 */
const useToggle = (initialState = false) => {
  const [isVisible, setIsVisible] = useState(initialState);

  const toggle = () => {
    setIsVisible(!isVisible)
  }

  return [isVisible, toggle];
}

export default useToggle;