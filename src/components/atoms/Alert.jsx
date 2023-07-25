const Modal = ({ children, isOpen, onClose }) => {
    if (!isOpen) return null;

    return (
        <div className="modal">
        <div className="modal__overlay" onClick={onClose} />
        <div className="modal__content">{children}</div>
        </div>
    );
}