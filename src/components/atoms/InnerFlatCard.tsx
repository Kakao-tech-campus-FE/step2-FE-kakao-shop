import React from 'react';

interface InnerFlatCardProps {
  children: React.ReactNode;
}

const InnerFlatCard = ({ children }: InnerFlatCardProps) => {
  return <div className="my-3 p-4 rounded-2xl bg-lightPupple shadow-innerFlat">{children}</div>;
};

export default InnerFlatCard;
