import React from 'react';
import './UiBadge.css';

export const UiBadge = (props) => {
    return (
      <div className="text-center + {props.name.toLower()}">
        <div className="badge">
          <div className="badge-inner">
            <div className="badge-front">
            <i className={props.icon}></i>
            </div>
            <div className="badge-back">
              <div className="badge">
                {props.score}%
              </div>
            </div>
          </div>
        </div>
        <div>{props.name}</div>
      </div>
    );
};
