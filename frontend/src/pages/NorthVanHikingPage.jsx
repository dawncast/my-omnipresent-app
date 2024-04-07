import NorthVanHiking from "../components/northvanhiking";
import Nav from "../components/nav";

export default function NorthVanHikingPage() {
    return(<div>
        <Nav feed={<NorthVanHiking/>}/>
    </div>);
}