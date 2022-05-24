import { useState, useEffect } from "react";

const useKeyValue = (domNode = document.body) => {
  const [key, setKey] = useState(null);
  useEffect(() => {
    function handleKeyPress(event) {
      setKey(event.keyCode);
    }
    domNode.addEventListener("keypress", handleKeyPress);
    return () => {
      domNode.removeEventListener("keypress", handleKeyPress);
    };
  }, [domNode]);
  return key;
};

export default () => {
  const key = useKeyValue();
  // const key = 12;
  return (
    <>
      <div>pressed key code.</div>
      <div>{key}</div>
    </>
  );
};
