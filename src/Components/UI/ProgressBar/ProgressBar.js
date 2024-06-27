import {UserContext} from "../../../Context/UserContext";
import {useContext} from "react";

const ProgressBar = (props) => {
    const {User} = useContext(UserContext)
    const {completed, val} = props;

    const takeColor = () => {
        switch (true) {
            case completed > User.bread_unit * 2/3:
                return "#00ff00"
            case completed < User.bread_unit * 1/3:
                return "#ff0000"
            default:
                return "#ffcf00"
        }
    }

    const containerStyles = {
        height: "3vh",
        width: '100%',
        backgroundColor: "#e0e0de",
        borderRadius: 50,
    }

    const fillerStyles = {
        height: '100%',
        width: `${Math.max((completed / User.bread_unit) * 100, 15)}%`,
        backgroundColor: takeColor(),
        borderRadius: 'inherit',
        transition: 'width 1s ease-in-out',
        justifyContent: 'flex-end',
        display: 'flex'
    }

    const labelStyles = {
        padding: 5,
        color: 'white',
        fontWeight: 'bold'
    }

    return (
        <div style={containerStyles}>
            <div style={fillerStyles}>
                <span style={labelStyles}>{`${val}хе`}</span>
            </div>
        </div>
    );
};

export default ProgressBar;