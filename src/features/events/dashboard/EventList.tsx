import EventListItem from './EventListItem'
import { AppEvent } from '../../../app/types/event'

type Props = {
  events:AppEvent[]
  selectEvent:(event:AppEvent)=> void
  deleteEvent:(eventId:string)=> void
}

const EventList = ({events, selectEvent, deleteEvent}:Props) => {
  return (
	<>
  {events.map((event)=>(
    <EventListItem 
    key={event.id} 
    event={event} selectEvent={selectEvent}
    deleteEvent={deleteEvent}
    />
  ))}
  </>
  )
}
export default EventList