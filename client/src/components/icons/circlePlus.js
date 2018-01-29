import React from 'react';

const CirclePlus = ({ style, stroke, fill, ...props}) => (
  <svg style={style || {width: '25px', height: '25px'}} {...props}>
    <g stroke={stroke || '#000' } fill={fill || 'none'}>
		  <circle cx="12" cy="12" r="11.5" />
		  <line x1="5.5" y1="12" x2="18.5" y2="12" />
		  <line x1="12" y1="18.5" x2="12" y2="5.5" />
    </g>      
  </svg>
);

export default CirclePlus;
