import React from 'react';

interface FormContainerProps {
  children: React.ReactNode;
}

const FormContainer = ({ children }: FormContainerProps) => {
  return <form className='space-y-5'>{children}</form>;
};

export default FormContainer;
