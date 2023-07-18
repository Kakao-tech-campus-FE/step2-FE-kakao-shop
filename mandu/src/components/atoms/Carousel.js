import {useState} from "react";
import {useEffect} from "react";

function Carousel({width = "100%", height = "400px", imgList = [], intervalTime = 6000}) {

    const [curImageIndex, setCurImageIndex] = useState(0);
    const transform = `translate(-${curImageIndex * 100}%)`;

    useEffect(() => {
        const interval = setInterval(() => {
            moveRight();
        }, intervalTime);
        return () => clearInterval(interval);
    }, [])

    const moveLeft = () => {
        setCurImageIndex((value) => {
            let index = (value - 1) % imgList.length;
            if (value < 0) {
                index = index + imgList.length;
            }
            return index;
        });
    }

    const moveRight = () => {
        setCurImageIndex((value) => {
            let index = (value + 1) % imgList.length;
            if (value >= imgList.length) {
                index = index - imgList.length;
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
            width: width,
            height: height,
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
                transform: transform,
            }}>
                {
                    imgList.map((url, index) => {
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