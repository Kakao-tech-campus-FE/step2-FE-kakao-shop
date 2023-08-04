import { styled } from 'styled-components';

/**
 * Text를 반환하는 컴포넌트
 * @param {ReactNode} children - 하위 컴포넌트
 * @param {string} className - 컴포넌트 클래스명
 * @returns {JSX.Element} 컴포넌트 반환
 */

const Text = ({ children, className = '' }) => {
    return <span className={className}>{children}</span>;
};

export default Text;
