import React from 'react';
import { useSelector } from 'react-redux';

function Greeting() {
  const greeting = useSelector((state) => state.greeting.message.message);
  const status = useSelector((state) => state.greeting.status);

  let anything;
  if (status === 'succeeded') {
    anything = greeting;
  }
  if (status === 'loading') {
    anything = '...';
  }

  return (
    <>
      <h1 className="title">{anything}</h1>
    </>
  );
}

export default Greeting;
