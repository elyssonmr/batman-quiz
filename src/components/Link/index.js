/* eslint-disable react/prop-types */
/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';

import NextLink from 'next/link';

export default function Link({
  children, href, disabled, ...props
}) {
  let style;

  if (disabled) {
    style = {
      pointerEvents: 'none',
    };
  }
  return (
    <NextLink href={href} passHref>
      <a {...props} style={style}>
        {children}
      </a>
    </NextLink>
  );
}
