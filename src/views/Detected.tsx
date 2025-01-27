import {useStore} from "@/stores/DBStore";
import {useLocation} from "react-router"

const Detected = () => {
    const {state} = useLocation();
    const {addFaces} = useStore();
    console.log('state', state);
    try {
        addFaces(state.descriptors);
    } catch (error) {
        console.log(error);
    }
    return <div>Detetcted</div>
}

export default Detected