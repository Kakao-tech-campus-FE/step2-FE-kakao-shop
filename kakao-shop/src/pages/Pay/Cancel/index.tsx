import { useEffect } from 'react';

const Cancel = () => {
  useEffect(() => {
    window.close();
  }, []);

  return <div>Cancel</div>;
};

export default Cancel;
