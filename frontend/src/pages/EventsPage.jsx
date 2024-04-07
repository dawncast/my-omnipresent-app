import EventDetails from "../components/eventDetails";
import Nav from "../components/nav";

export default function EventsPage() {
    return(<div>
        <Nav feed={<EventDetails/>}/>
    </div>);
}