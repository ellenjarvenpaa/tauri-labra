import {useDB} from "@/hooks/DBHooks";
import {useLocation} from "react-router"

const Detected = () => {
    const {state} = useLocation();
    const {addFaces} = useDB();
    console.log('state', state);
    try {
        addFaces(state.descriptors);
    } catch (error) {
        console.log(error);
    }
    return <div>Detetcted</div>
}

export default Detected