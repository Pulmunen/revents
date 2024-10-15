import { Grid, GridColumn } from "semantic-ui-react"
import EventList from "./EventList"
import { AppEvent } from "../../../app/types/event"
import { sampleData } from "../../../app/api/sampleData"
import EventForm from "../../form/EventForm"
import {useState, useEffect} from 'react'

type Props = {
  formOpen:boolean
  setFormOpen:(value:boolean)=> void
  selectEvent:(event:AppEvent | null)=> void
  selectedEvent:(AppEvent | null)
}

function EventDashboard({formOpen, setFormOpen, selectEvent, selectedEvent}: Props) {

  const [events, setEvents] = useState<AppEvent[]>([])
  
  useEffect(()=>{
    setEvents(sampleData)
  },[])

  function addEvent(event:AppEvent){
    setEvents(prevState=> {
      return [...prevState, event]
    })
  }

  function updateEvent(updatedEvent:AppEvent){
    setEvents(events.map(event => event.id === updatedEvent.id ? updatedEvent: event))
    selectEvent(null)
    setFormOpen(false)
  }

  function deleteEvent(eventId:string){
    setEvents(events.filter(event => event.id !== eventId))
  }

  return (
    <Grid>
      <GridColumn width={10}>
        <EventList 
          events={events} 
          selectEvent={selectEvent}
          deleteEvent={deleteEvent}
          />
      </GridColumn>
      <GridColumn width={6}>
      <h2>Right column</h2>
      {formOpen && 
      <EventForm 
        setFormOpen={setFormOpen} 
        updateEvent={updateEvent}
        addEvent = {addEvent}
        selectedEvent={selectedEvent}
        key={selectedEvent ? selectedEvent.id: 'create'}
        />
      }
      </GridColumn>
    </Grid>
  )
}
export default EventDashboard