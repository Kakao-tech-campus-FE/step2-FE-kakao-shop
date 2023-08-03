import React, { useState, useEffect } from 'react';
import CheckAgree from '../atoms/CheckAgree';
import Announce from '../atoms/Announce';
import PayBtn from '../atoms/PayBtn';

function CheckAgrees() {
  const [allAgree, setAllAgree] = useState(false);
  const [toggle, setToggle] = useState(false);
  const [purchaseConditionAgree, setPurchaseConditionAgree] = useState(false);
  const [personalInfoAgree, setPersonalInfoAgree] = useState(false);
  useEffect(() => {
    if (purchaseConditionAgree && personalInfoAgree) {
      setAllAgree(true);
    } else {
      setAllAgree(false);
    }
  }, [purchaseConditionAgree, personalInfoAgree]);

  const handleAllAgree = (allAgreePrev: boolean) => {
    if (!allAgreePrev) {
      setPurchaseConditionAgree(true);
      setPersonalInfoAgree(true);
    } else {
      setPurchaseConditionAgree(false);
      setPersonalInfoAgree(false);
    }
  };
  return (
    <div>
      <div className="border border-gray-200 flex justify-between p-2">
        <label htmlFor="allAgree">
          <input
            id="allAgree"
            type="checkbox"
            checked={allAgree}
            className="mr-2"
            onChange={() =>
              setAllAgree((prev) => {
                handleAllAgree(prev);
                return !prev;
              })
            }
          />
          <span className="text-lg">전체동의</span>
        </label>
        <span className="text-lg rotate-90 cursor-pointer" onClick={() => setToggle((prev) => !prev)}>
          &gt;
        </span>
      </div>
      {toggle && (
        <div className="border-x border-b border-gray-200 flex flex-col p-2">
          <CheckAgree checkValue={purchaseConditionAgree} handler={setPurchaseConditionAgree}>
            구매조건 확인 및 결제 진행 동의
          </CheckAgree>
          <CheckAgree checkValue={personalInfoAgree} handler={setPersonalInfoAgree}>
            개인정보 제3자 제공 동의
          </CheckAgree>
          <Announce />
        </div>
      )}
      <PayBtn approved={allAgree} />
    </div>
  );
}

export default CheckAgrees;
