import React from 'react';

const Greeting = () => (
  <div className="greeting">
    <h1>Welcome, stranger</h1>
    <p>Thanks for being you.</p>
    <p>Well done.</p>
    <p className="greeting__thumbsup">
      <a className="greeting__link" href={'/extra-info'}>
        &#x1F44D;
      </a>
    </p>
  </div>
);

export default Greeting;
