import React, { useState, useEffect, useRef } from 'react';

const useAgree = () => {
  const [agreePayment, setAgreePayment] = useState(false);
  const [agreePolicy, setAgreePolicy] = useState(false);

  const allAgreeRef = useRef(null);
  const agreePaymentRef = useRef(null);
  const agreePolicyRef = useRef(null);

  const handleAllAgree = (e) => {
    const value = e.target.checked;
    setAgreePayment(value);
    setAgreePolicy(value);
    if (allAgreeRef.current) {
      allAgreeRef.current.checked = value;
    }
  };
  const handleAgreement = (e) => {
    const { name, checked } = e.target;
    if (name === 'payment-agree') {
      setAgreePayment(checked);
    } else if (name === 'policy-agree') {
      setAgreePolicy(checked);
    }
  };
  return {
    agreePayment,
    agreePolicy,
    allAgreeRef,
    agreePaymentRef,
    agreePolicyRef,
    handleAllAgree,
    handleAgreement,
  };
};

export default useAgree;
