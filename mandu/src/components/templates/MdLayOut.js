const MdLayOut = ({children}) => {
    return (
        <div className="bg-gray-100 py-8 min-h-screen">
            <div className="max-w-screen-md w-full mx-auto mb-24">
                {children}
            </div>
        </div>
    );
};

export default MdLayOut;