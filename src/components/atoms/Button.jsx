import { styled } from 'styled-components';

/**
 * type이 "button"인 Button Component
 * @param {ReactNode} children - 하위 컴포넌트
 * @param {string} className - 클래스 이름
 * @param {function} onClick - 버튼 클릭 시 실행되는 함수
 * @returns {JSX.Element} 컴포넌트 반환
 */

const Button = ({ children, className = 'default', onClick }) => {
    return (
        <button className={`${style[className]}`} onClick={onClick} type="button">
            {children}
        </button>
    );
};

const style = {
    default: 'p-3 min-w-[20rem] mt-3 mb-1 bg-yellow-300 hover:bg-yellow-400 m-2 rounded-lg',
    container: 'p-2 w-2 m-2 bg-white',
};

export default Button;
