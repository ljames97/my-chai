import { useState } from "react"

const useToggle = (initialState = false) => {
  const [isVisible, setIsVisible] = useState(initialState);

  const toggle = () => {
    setIsVisible(!isVisible)
  }

  return [isVisible, toggle];
}

export default useToggle;