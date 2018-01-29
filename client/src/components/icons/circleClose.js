import React from 'react';

const CircleClose = ({ style, stroke, fill, ...props}) => (
  <svg style={style || {width: '25px', height: '25px'}} {...props}>
    <g stroke={stroke || '#000' } fill={fill || 'none'}>
		  <circle cx="12" cy="12" r="11.5" />
		  <line x1="7.5" y1="7.5" x2="16.5" y2="16.5" />
		  <line x1="16.5" y1="7.5" x2="7.5" y2="16.5" />    
	  </g>      
  </svg>
);

export default CircleClose;
