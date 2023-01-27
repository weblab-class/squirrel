import FullCalendar from '@fullcalendar/react'
import {formatDate} from '@fullcalendar/core'
import dayGridPlugin from '@fullcalendar/daygrid'
import timeGridPlugin from '@fullcalendar/timegrid'
import interactionPlugin from '@fullcalendar/interaction'
import { INITIAL_EVENTS, createEventId } from './event-utils'
import NavBar from '../modules/NavBar.js'
import { post, get } from "../../utilities";
import React, { useState } from "react";

import "./Calendar.css"

export default class Calendar extends React.Component {
  state = {
    weekendsVisible: true,
    currentEvents: []
  }

  componentDidMount(){
    window.scrollTo(0, 0);
  }

  render() {
    return (
    <div>
        {/* <NavBar/> */}
      <div className='demo-app'>
        {this.renderSidebar()}
        <br/>
        <div className='demo-app-main'>
          <FullCalendar
            plugins={[dayGridPlugin, timeGridPlugin, interactionPlugin]}
            headerToolbar={{
              left: 'prev,next today',
              center: 'title',
              right: 'dayGridMonth,timeGridWeek,timeGridDay'
            }}
            initialView='dayGridMonth'
            editable={true}
            selectable={true}
            selectMirror={true}
            dayMaxEvents={true}
            weekends={this.state.weekendsVisible}
            initialEvents={INITIAL_EVENTS} // alternatively, use the `events` setting to fetch from a feed
            select={this.handleDateSelect}
            eventContent={renderEventContent} // custom render function
            eventClick={this.handleEventClick}
            eventsSet={this.handleEvents} // called after events are initialized/added/changed/removed
            events="/api/get_events"
            eventChange={function(){}}
            eventRemove={function(){}}
          />
        </div>


      </div>
      </div>
    )
  }

  renderSidebar() {
    return (
      <div className='demo-app-sidebar'>
        <div className='demo-app-sidebar-section'>
          <h2>Instructions</h2>
          <ul>
            <li>Select dates and you will be prompted to create a new event.</li>
            <li>Drag, drop, and resize events.</li>
            <li>Click an event to delete it.</li>
            <li>Be glad you were spared the horrors of an embedded Google Calendar.</li>
          </ul>
        </div>
        <div className='demo-app-sidebar-section'>
          <label>
            <input
              type='checkbox'
              checked={this.state.weekendsVisible}
              onChange={this.handleWeekendsToggle}
            ></input>
            Toggle Weekends
            <br/>
            <br/>
          </label>
        </div>
        <div className='demo-app-sidebar-section'>
          <h2>All Events ({this.state.currentEvents.length})</h2>
          <ul>
            {this.state.currentEvents.sort((a,b) => a['start'] > b['start'] ? 1 : a['start'] < b['start'] ? -1 : 0).map(renderSidebarEvent)}
          </ul>
        </div>
      </div>
    )
  }

  handleWeekendsToggle = () => {
    this.setState({
      weekendsVisible: !this.state.weekendsVisible
    })
  }

  handleDateSelect = (selectInfo) => {
    let title = prompt('Please enter a new title for your event')
    let calendarApi = selectInfo.view.calendar

    calendarApi.unselect() // clear date selection

    if (title) {

      console.log("added event yay");
      const body = { name: title, start: selectInfo.startStr, end: selectInfo.endStr, allDay: selectInfo.allDay, description: "new event!", group: "no group" };
      post("/api/event", body).then((comment) => {
         // props.addNewComment(comment);
      });

      calendarApi.addEvent({
        id: createEventId(),
        title,
        start: selectInfo.startStr,
        end: selectInfo.endStr,
        allDay: selectInfo.allDay
      })
    }
  }
  
  handleEventClick = (clickInfo) => {
    if (confirm(`Are you sure you want to delete the event? '${clickInfo.event.title}'`)) {
      clickInfo.event.remove()
      post("/api/del_event", clickInfo.event).then((res) => console.log(res))
    }
  }

  handleEvents = (events) => {
    this.setState({
      currentEvents: events
    })
  }

}

function renderEventContent(eventInfo) {
  return (
    <>
      <b>{eventInfo.timeText}</b>
      <i>{eventInfo.event.title}</i>
    </>
  )
}

function renderSidebarEvent(event) {
  console.log(event);



  return (
    <li key={event.id}>
      <b>{formatDate(event.start, {year: 'numeric', month: 'short', day: 'numeric'})}</b>
      <i>{event.title}</i>
    </li>
  )
}
