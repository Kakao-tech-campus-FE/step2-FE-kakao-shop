import React from 'react';
import LinkTo from '../atoms/LinkTo';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { styled } from 'styled-components';

function FontToLink({to, linkstyle, spanstyle, icon, children, iconsize}) {

  return (
    <LinkTo to={to} style={{display: 'block', position: 'relative', ...linkstyle}}>
      <span style={{...spanstyle}}>
        <FontAwesomeIcon iconsize={iconsize} icon={icon}/>
      </span>
      {children}
    </LinkTo>
  )
}

export default FontToLink

