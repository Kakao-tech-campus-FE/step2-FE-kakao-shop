import {useEffect} from "react";

function Toast({isOpen, setOpen, message, delay}) {
    useEffect(
        () => {
            if (isOpen) {
                setTimeout(
                    () => {
                        setOpen(false);
                    }, delay
                )
            }
        }, [isOpen, delay]
    )

    //delay , autohide, animation, position, icon, title, message, close button,
    return (
        <div style={{
            display: isOpen ? 'flex' : 'none',
            zIndex: 9999,
            position: 'fixed',
            bottom: '20px',
            right: '20px',
            border: '1px solid black',
            borderRadius: '4px',
            padding: '0px 12px',
            minWidth: '200px',
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
        }}>
            <h4>{message}</h4>
            <button onClick={() => setOpen(false)}>X</button>
        </div>
    );


}

export default Toast;