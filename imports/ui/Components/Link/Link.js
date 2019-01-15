import React from 'react';

const Link = ({url, children, className}) => (
  <a href={url} className={className}> 
    {children} 
  </a>
);

export default Link;