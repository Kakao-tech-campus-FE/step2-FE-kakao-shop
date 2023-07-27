import { useState } from "react";
import Box from "./Box";
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";

/**
 * 제목과 보조내용이 존재하고 제목을 클릭하면 내용이 접히고 펼쳐지는 박스
 *
 * @param {React.ReactNode} children - 박스에 담길 내용
 * @param {string} className - 박스에 추가할 클래스 (박스에 담기는 요소마다 다른 스타일을 적용할 수 있도록 사용)
 * @returns {JSX.Element} - 박스 컴포넌트의 JSX 요소
 */
const FoldingBox = ({ children, title, sub }) => {
  const [isShow, setIsShow] = useState(true);

  return (
    <Box>
      <div className="flex justify-between">
        <div className="flex items-center gap-1">
          <h2 className="font-bold text-lg">{title}</h2>
          <span className="">{sub}</span>
        </div>
        {isShow ? (
          <IoIosArrowUp size="23" onClick={() => setIsShow(!isShow)} />
        ) : (
          <IoIosArrowDown size="23" onClick={() => setIsShow(!isShow)} />
        )}
      </div>
      {isShow && children}
    </Box>
  );
};

export default FoldingBox;
