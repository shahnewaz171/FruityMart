const renderer = ({ hours, minutes, seconds, completed }) => {

    return (
        <div className="countdown text-center text-wrap">
            <div className="countdown-section">
                <span className="countdown-number position-relative">{hours}</span>
                <span className="countdown-period">Hour</span>
            </div>
            <div className="countdown-section">
                <span className="countdown-number position-relative">{minutes}</span>
                <span className="countdown-period">Minutes</span>
            </div>
            <div className="countdown-section">
                <span className="countdown-number position-relative">{seconds}</span>
                <span className="countdown-period">Seconds</span>
            </div>
        </div>
    )
};

export default renderer;