/**
 * 뱃지 컴포넌트 생성
 * @param {string} style - 색(white, red, ...)
 * @param {React.ReactNode} children
 * @returns 뱃지 컴포넌트
 */
const Badge = ({ style, children }) => {
	const styleObj = {
		white: "bg-gray-50 text-gray-600 ring-gray-500/10",
		red: "bg-red-50 text-red-700 ring-red-600/10",
		yellow: "bg-yellow-50 text-yellow-800 ring-yellow-600/20",
		green: "bg-green-50 text-green-700 ring-green-600/20",
		blue: "bg-blue-50 text-blue-700 ring-blue-700/10",
		indigo: "bg-indigo-50 text-indigo-700 ring-indigo-700/10",
		purple: "bg-purple-50 text-purple-700 ring-purple-700/10",
		pink: "bg-pink-50 text-pink-700 ring-pink-700/10",
	}
	
	return (
		<span className={`inline-flex items-center rounded-md px-2 py-1 text-xs font-medium text-gray-600 ring-1 ring-inset ${styleObj[style]}`}>
			{children}
		</span>
	);
};

export default Badge;