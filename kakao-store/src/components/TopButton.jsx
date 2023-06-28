import { useState } from "react";

const TopButton = () => {
    const [showButton, setShowButton] = useState(false);

    const scrollToTop = () => {
        window.scroll({
            top: 0,
            behavior: 'smooth'
        })
    };

    useEffect( () => {
        const handleShowButton = () => {
            if(window.scrollY > 500) {
                setShowButton(true);
            } 
						else {
                setShowButton(false);
            }
        }

        window.addEventListener("scroll", handleShowButton);
        
				return () => {
            window.removeEventListener("scroll", handleShowButton);
        }
    }, []);

    return showButton && (
        <div className="scroll_container">
            <button id="top" onClick={scrollToTop} type="button" >위로</button>
        </div>
    );
};