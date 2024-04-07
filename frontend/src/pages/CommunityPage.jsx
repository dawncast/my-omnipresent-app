import Communities from "../components/communities";
import Nav from "../components/nav";

export default function CommunityPage() {
    return(<div>
        <Nav feed={<Communities/>}/>
    </div>);
}