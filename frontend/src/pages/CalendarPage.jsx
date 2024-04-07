import Calendar from "../components/calendar";
import Nav from "../components/nav";

export default function CalendarPage() {
    return(<div>
        <Nav feed={<Calendar/>}/>
    </div>);
}