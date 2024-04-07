import Friends from "../components/friends";
import Nav from "../components/nav";

export default function FriendsPage() {
    return(<div>
        <Nav feed={<Friends/>}/>
    </div>);
}