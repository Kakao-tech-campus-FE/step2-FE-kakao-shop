import {useState} from "react";

function Carousel() {
    const imageUrlList = [
        "https://images.unsplash.com/photo-1529788295308-1eace6f67388?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format",
        "https://images.unsplash.com/photo-1682686578615-39549501dd08?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format",
        "https://images.unsplash.com/photo-1687463221023-02f259da7d77?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format",
        "https://images.unsplash.com/photo-1444703686981-a3abbc4d4fe3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format",

    ];

    const [curImageIndex, setCurImageIndex] = useState(0);

    const transform = `translate(-${curImageIndex * 100}%)`;

    const moveLeft = () => {
        setCurImageIndex((value) => {
            let index = (value - 1) % imageUrlList.length;
            if (value < 0) {
                index = index + imageUrlList.length;
            }
            return index;

        });
    }
    const moveRight = () => {
        setCurImageIndex((value) => {
            let index = (value + 1) % imageUrlList.length;
            if (value >= imageUrlList.length) {
                index = index - imageUrlList.length;
            }
            return index;
        });

    }


    const buttonStyle = {
        border: '1px solid rgba(255,255,255,.23)',
        borderRadius: '50px',
        backgroundColor: 'rgba(255,255,255,.3)',
        boxShadow: '0 2px 4px 2px rgba(0,0,0,.04)',
        boxSizing: 'border-box',
        width: '50px',
        height: '50px',
        position: 'absolute',
        top: '50%',
        transform: 'translateY(-50%)',
        zIndex: 10

    }
    return (
        <div style={{
            width: '100%',
            height: '400px',
            overflow: 'hidden',
            position: 'relative',
        }}>
            <button
                style={{
                    left: '50px',
                    ...buttonStyle
                }}
                onClick={moveLeft}
            >◀
            </button>
            <button
                style={{
                    right: '50px',
                    ...buttonStyle
                }}
                onClick={moveRight}
            >▶
            </button>
            <div className="carousel" style={{
                width: '100%',
                height: '100%',
                display: 'flex',
                flexDirection: 'row',
                // transition: 'transform 1s ease-in-out',
                transform: transform,


            }}>

                {
                    imageUrlList.map((url, index) => {
                            return (<div style={{width: '100%', height: '100%', flex: '1 0 100%'}} key={index}>
                                <img
                                    style={{width: '100%', height: '100%', objectFit: 'cover'}}
                                    src={url} alt={index.toString()}/>
                            </div>);

                        }
                    )
                }
            </div>
        </div>
    );
}


export default Carousel;