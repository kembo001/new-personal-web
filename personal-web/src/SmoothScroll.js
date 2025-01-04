import { useEffect } from "react"
import Scrollbar from 'smooth-scrollbar';

var options  = {
    damping: 0.07,
    thumbMinSize: 20,
    renderByPixels: true,
    continuousScrolling: true
}

const Scroll = () => {

    useEffect(() => {
        Scrollbar.init(document.body, options);

    }, [])

    return null;
}

export default Scroll