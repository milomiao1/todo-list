import React from 'react';
import { CSSTransition ,SwitchTransition } from 'react-transition-group';
import '../styles/TransitionEffects.css';

const TransitionEffects = ({ children, location, effect }) => {
  return (
    <SwitchTransition>
      <CSSTransition
        key={location.pathname}
        classNames={effect}
        timeout={300}
      >
        <div className="route-section">
          {children}
        </div>
      </CSSTransition>
    </SwitchTransition>
  );
};

export default TransitionEffects;