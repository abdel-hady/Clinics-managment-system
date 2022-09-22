import React from 'react';

export const Day = ({ day, onClick }) => {
  const className = `day ${day.value === 'padding' ? 'padding' : ''} ${day.isCurrentDay ? 'currentDay' : ''}`;
  // const par=document.querySelector(onClick-{ onClick})
  // const divs=document.createElement("div")
  // const t=document.createTextNode("hello")
  // divs.setAttribute(className,"event")
  // divs.className.add("event")
  // if(divs)
    // par.appendChild(divs)
  // console.log(day.event)
  // if(day.title)
  // console.log(day.event.title)
  return (
    <div onClick={onClick} className={className}>
      {day.value === 'padding' ? '' : day.value}
        
      {day.event && <div className='event'>{day.event.title}</div>}
    </div>
  );
};
