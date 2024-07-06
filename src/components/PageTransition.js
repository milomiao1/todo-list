import React from 'react';
import { CSSTransition, SwitchTransition } from 'react-transition-group';

const PageTransition = ({ children, location }) => {
  return (
    <SwitchTransition>
      <CSSTransition
        key={location.pathname}
        classNames="fade"
        timeout={300}
      >
        {children}
      </CSSTransition>
    </SwitchTransition>
  );
};

export default PageTransition;