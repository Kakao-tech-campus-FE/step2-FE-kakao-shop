import {useEffect} from "react";

//delay , autohide, animation, position, icon, title, message, close button,

function Toast({isOpen, setOpen, message, delay, hasProgressBar = true}) {
    useEffect(
        () => {
            let timer;
            if (isOpen) {
                timer = setTimeout(
                    () => {
                        setOpen(false);
                    }, delay
                )
            }
            return () => {
                if (timer !== undefined) {
                    clearTimeout(timer);
                }
            }
        }, [isOpen, delay]
    )

    return (
        <div style={{
            display: isOpen ? 'block' : 'none',
            zIndex: 9999,
            position: 'fixed',
            bottom: '20px',
            right: '20px',
            border: '1px solid black',
            borderRadius: '4px',
            minWidth: '300px',
            backgroundColor: 'white',
            opacity: 0.85,
        }}>
            <div style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                flexDirection: 'row',
                margin: '0px 12px',
            }}>
                <h4>{message}</h4>
                <button onClick={() => setOpen(false)}>✕</button>
            </div>
            {
                hasProgressBar && (<div className="progress-bar" style={{
                    backgroundColor: 'lightgreen',
                    width: '100%',
                    height: '8px',
                    animation: `progress ${delay ?? 3000}ms linear`,
                }}/>)
            }


        </div>
    );


}

export default Toast;