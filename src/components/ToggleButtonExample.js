import { useState, useCallback } from "react";

function Button({ count, buttonClick }) {
  return <button onClick={buttonClick}>You clicked {count} times.</button>;
}

export default () => {
  const [count, setCount] = useState(0);
  const buttonClick = useCallback(() => {
    setCount(count + 1);
  }, [count]);
  return (
    <>
      <div>
        <Button count={count} buttonClick={buttonClick}></Button>
      </div>
    </>
  );
};
