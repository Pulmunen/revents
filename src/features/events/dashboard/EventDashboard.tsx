import { Grid, GridColumn } from "semantic-ui-react"
import EventList from "./EventList"
import { AppEvent } from "../../../app/types/event"
import { sampleData } from "../../../app/api/sampleData"
import EventForm from "../../form/EventForm"
import {useState, useEffect} from 'react'

type Props = {
  formOpen:boolean
  setFormOpen:(value:boolean)=> void
}

function EventDashboard({formOpen, setFormOpen}: Props) {

  const [events, setEvents] = useState<AppEvent[]>([])
  
  useEffect(()=>{
    setEvents(sampleData)
  },[])

  return (
    <Grid>
      <GridColumn width={10}>
        <EventList events={events}/>
      </GridColumn>
      <GridColumn width={6}>
      <h2>Right column</h2>
      {formOpen && 
      <EventForm setFormOpen={setFormOpen}/>
      }
      </GridColumn>
    </Grid>
  )
}
export default EventDashboard