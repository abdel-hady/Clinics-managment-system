import React, { useState, useEffect } from 'react';
import { CalendarHeader } from '../CalendarHeader';
import { Day } from '../Day';
import { NewEventModal } from '../NewEventModal';
import { DeleteEventModal } from '../DeleteEventModal';
import { useDate } from '../hooks/useDate';
import moment from 'moment'
import './../style.css';
import Popup_Chevron from './../../images/popupvhevron.png'
import axios from 'axios';
import { handleBreakpoints } from '@mui/system';
export const App = (get_calender) => {
  const [nav, setNav] = useState(0);
  const [clicked, setClicked] = useState();
  const [events, setEvents] = useState(
    localStorage.getItem('events') ? 
      JSON.parse(localStorage.getItem('events')) : 
      []
  );

  const eventForDate = date => events.find(e => e.date === date);
  // console.log( events.find(e => e.date === date))
  useEffect(() => {
    localStorage.setItem('events', JSON.stringify(events));
  }, [events]);

  const { days, dateDisplay } = useDate(events, nav);

    function handleday(day){
      // console.log(day)
      const list_calender=get_calender;
      let r=null;
      for (let i = 0; i < list_calender.list.length; i++) {
        // console.log(list_calender.list[i])
        if(day.date===moment(list_calender.list[i], "YYYY-MM-DD").format("M/D/YYYY")){
          // console.log(d.date)
          // console.log(list_calender.list[i])
          r=(day.value).toString()
          r=r.concat(` see All`)
          // console.log(r)
          if(day.value.toString().includes("se")){
            // day.value=day.value;
          }else{
            day.value=`${r}`;
          }
        }
      }

      const daysSee=document.querySelectorAll(".day")
      for(var i = 0; i < daysSee.length; i++) 
      {
          if(daysSee[i])
            if(daysSee[i].innerHTML.includes("see All")){
            daysSee[i].style.backgroundColor="#01379A";
            daysSee[i].style.color="white";
            // daysSee[i].onclick=function() {handleClickCell();}
            daysSee[i].addEventListener('click',handleClickCell)
            // daysSee[i].setAttribute('onclick','handleClickCell();')
          }
      }
      // console.log(day)
      return day
    }
    const [date, setDate] = useState("2022-07-27")

    function handleClickCell(e){
        // console.log(e)
        console.log(e.target)
        // console.log("hello")
        axios.post("appointments/get-events-doctor",{
          date
        }).then(
          res =>{
            get_events_doctor(res.data.data)
          },err =>{
            console.log(err)
          }
        )
        // console.log()
        function get_events_doctor(date1){
        const dat=date1
        // for(let i =0 ; i<dat.length; i++){
        //   console.log(dat[i].date)
        //   console.log(dat[i].time)
        //   console.log(dat[i].name)
        //   console.log(dat[i].is_review)
        //   console.log(dat[i].statue)
        // }
        const section = document.querySelector("section")
        const div= document.createElement("div");
        const img_Chevron= document.createElement("img");
        const div_header= document.createElement("div");
        const div_body= document.createElement("div");
        const div_element= document.createElement("div");
        const div_square_status= document.createElement("div");
        const div_square= document.createElement("div");
        const div_status= document.createElement("div");
        const div_data= document.createElement("div");
        const div_name_time_rev= document.createElement("div");
        const div_name= document.createElement("div");
        const div_time_date= document.createElement("div");
        const div_time= document.createElement("div");
        const div_date= document.createElement("div");
        const div_review= document.createElement("div");
        const review_square= document.createElement("div");
        const review_text= document.createElement("div");
        const Link= document.createElement("a");
        div.classList.add("div-popup")
        div_header.classList.add("div_header")
        div_body.classList.add("div_body")
        div_element.classList.add("div_element")
        div_square_status.classList.add("div_square_status")
        div_square.classList.add("div_square")
        div_status.classList.add("div_status")
        div_data.classList.add("div_data")
        div_name_time_rev.classList.add("div_name_time_rev")
        div_name.classList.add("div_name")
        div_time_date.classList.add("div_time_date")
        div_time.classList.add("div_time")
        div_review.classList.add("div_review")
        review_square.classList.add("review_square")
        Link.classList.add("open_session")
        Link.setAttribute( "href","https://www.google.com/google.com")
        img_Chevron.src= Popup_Chevron
        // console.log(img_Chevron)
        if(section)
        section.appendChild(div)
        div.appendChild(div_header)
        div.appendChild(div_body)
        div_body.appendChild(div_element)
        div_element.appendChild(div_square_status)
        div_element.appendChild(div_data)
        div_square_status.appendChild(div_square)
        div_square_status.appendChild(div_status)
        div_data.appendChild(div_name_time_rev)
        div_name_time_rev.appendChild(div_name)
        div_name_time_rev.appendChild(div_time_date)
        div_name_time_rev.appendChild(div_review)
        // div_name_time_rev.appendChild(div_status)
        const text_link = document.createTextNode("OPEN SESSION")
        Link.appendChild(text_link)
        div_name.innerHTML= dat[0].name;
        div_time_date.appendChild(div_time)
        div_time_date.appendChild(div_date)
        div_time.innerHTML= `${dat[0].time}`;
        div_date.innerHTML= `${dat[0].date}`;
        div_header.innerHTML= dat[0].date;
        div_header.appendChild(img_Chevron);
        
        div_review.appendChild(review_square)
        div_review.appendChild(review_text)
        // console.log(dat[0].statue)
        if(dat[0].statue==="Canceled"){
          div_square.style.backgroundColor="#B50000"
        }else if(dat[0].statue==="Pending"){
          div_square.style.backgroundColor="#EAD900"
        }
        div_status.innerHTML= dat[0].statue;
        if(dat[0].is_review===1){
          review_square.style.backgroundColor="blue"
          review_text.innerHTML="New appointment"
        }else {
          review_square.style.backgroundColor="green"
          review_text.innerHTML="Review appointment"
        }
        div_data.appendChild(Link)
        const overlay= document.querySelector(".opacity")
        overlay.classList.add("overlay");
      }
    }
      

  return(
    <>
      <div id="container">
      <div className='mobileCalendar'>
        <CalendarHeader 
          dateDisplay={dateDisplay}
          onNext={() => setNav(nav + 1)}
          onBack={() => setNav(nav - 1)}
        />

        <div id="weekdays">
          <div>Sunday</div>
          <div>Monday</div>
          <div>Tuesday</div>
          <div>Wednesday</div>
          <div>Thursday</div>
          <div>Friday</div>
          <div>Saturday</div>
        </div>

        <div id="calendar">
          {days.map((d, index) => (
            <Day
              key={index}
              day={handleday(d)}
              onClick={() => {
                if (d.value !== 'padding') {
                  setClicked(d.date);
                }
              }}
            />
          ))}
        </div>
      </div>

      {/* {
        clicked && !eventForDate(clicked) &&
        <NewEventModal
          onClose={() => setClicked(null)}
          onSave={title => {
            setEvents([ ...events, { title, date: clicked }]);
            setClicked(null);
          }}
        />
      }

      {
        clicked && eventForDate(clicked) &&
        <NewEventModal
          onClose={() => setClicked(null)}
          onSave={title => {
            setEvents([ ...events, { title, date: clicked }]);
            setClicked(null);
          }}
        />
      } */}
      </div>
    </>
  );
};
