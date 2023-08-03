import { Fragment, useEffect } from 'react';

const Cancel = () => {
  useEffect(() => {
    window.close();
  }, []);

  return <Fragment />;
};

export default Cancel;
