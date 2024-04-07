import Profiles from "../components/profiles";
import Nav from "../components/nav";

export default function ProfilesPage() {
    return(<div>
        <Nav feed={<Profiles/>}/>
    </div>);
}