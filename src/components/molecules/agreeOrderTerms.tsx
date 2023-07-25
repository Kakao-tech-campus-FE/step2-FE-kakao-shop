import { useEffect, useState } from 'react';

interface AgreeOrderTermsProps {
  isAllAgreed: boolean;
  setIsAllAgreed: React.Dispatch<React.SetStateAction<boolean>>;
}

export default function AgreeOrderTerms({
  isAllAgreed,
  setIsAllAgreed,
}: AgreeOrderTermsProps) {
  const [isAgreed, setIsAgreed] = useState([false, false]);

  useEffect(() => {
    if (isAllAgreed) {
      if (isAgreed.filter((el) => el === false).length > 0) {
        setIsAllAgreed(false);
      }
    } else if (isAgreed.filter((el) => el === false).length === 0) {
      setIsAllAgreed(true);
    }
  }, [isAgreed]);

  return (
    <fieldset className="mb-4 flex flex-col gap-4 rounded-sm border border-stone-300 p-4">
      <section className="flex flex-col gap-1">
        <label
          htmlFor="agree-all"
          className="mb-2 flex flex-row gap-1"
        >
          <input
            type="checkbox"
            id="agree-all"
            checked={isAllAgreed}
            onChange={(e) => {
              setIsAgreed((prev) => prev.map(() => e.target.checked));
            }}
          />
          <span className="text-lg font-bold">전체 동의</span>
        </label>
        <label
          htmlFor="term-1"
          className="flex flex-row gap-1"
        >
          <input
            type="checkbox"
            id="term-1"
            checked={isAgreed[0]}
            onChange={(e) => {
              const isAgreedCopy = isAgreed.slice();
              isAgreedCopy[0] = e.target.checked;
              setIsAgreed(isAgreedCopy);
            }}
          />
          구매조건 확인 및 결제 진행 동의
        </label>
        <label
          htmlFor="term-2"
          className="flex flex-row gap-1"
        >
          <input
            type="checkbox"
            id="term-2"
            checked={isAgreed[1]}
            onChange={(e) => {
              const isAgreedCopy = isAgreed.slice();
              isAgreedCopy[1] = e.target.checked;
              setIsAgreed(isAgreedCopy);
            }}
          />
          개인정보 제 3자 제공 동의
        </label>
      </section>
      <section className="text-xs">
        <h3 className="font-bold">법적고지</h3>
        <p>
          (주)카카오에서 판매하는 상품 중에는 개별 판매자가 판매하는 상품이 포함되어 있습니다.
          개별 판매자가 판매하는 상품에 대해 (주)카카오는 통신중개 판매업자로서 통신판매의 당사자가 아니며
          상품의 주문, 배송 및 환불 등과 관련한 의무와 책임은 각 판매자에게 있습니다.
        </p>
      </section>
    </fieldset>
  );
}
