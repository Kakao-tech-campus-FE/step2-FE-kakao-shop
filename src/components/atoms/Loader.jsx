import { PulseLoader } from 'react-spinners';

import "../../styles/loader.css";
const Loader = () => {
    return (
        <div className={"loader"}>
        <PulseLoader/>
        </div>
    )
}

export default Loader;