import {forwardRef} from "react";
import {Link} from "react-router-dom";
import {convertUrl} from "../../const";

const Dialog = forwardRef(({title, subTitle, continueName, link}, ref) => {
    return (
        <dialog ref={ref}>
            <div className="w-72">
                <div className="text-md">{title}</div>
                <div className="text-md pb-4">{subTitle}</div>
                <div className="flex">
                    <button onClick={() => {
                        ref.current.close();
                    }} className="flex-grow py-1">
                        취소
                    </button>
                    <div className="bg-gray-600 w-0.5"/>
                    <Link to={convertUrl(link)} className="flex-grow py-1 text-gray-800 font-bold text-center">
                        {continueName}
                    </Link>
                </div>
            </div>
        </dialog>
    );
});

export default Dialog;
