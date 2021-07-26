import { Redirect, useParams } from "react-router-dom";
import "./Color.css";

const Color = ({colors}) => {
    const { color } = useParams();

    if(!colors.includes(color)){
        return <Redirect to="/colors" />
    }
    return (
        <div className="color-glory" style={{backgroundColor: color}}>
            <h1>{color}</h1>
        </div>
    );
}

export default Color;