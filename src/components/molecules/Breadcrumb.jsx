import React from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import AppRoutes from '../routes/route';

const Breadcrumb = () => {
	const staticServerUri = process.env.REACT_APP_PATH || "";
  const navigate = useNavigate();
  const location = useLocation();
  const path = location.pathname.split("/").filter(path => path !== "")

  const buttonStyle = {
    border: 'none',
    color: 'blue', 
    cursor: 'pointer'
  }

  const handleClick = (page) => {
    switch (page) {
      case 'home':
        navigate(staticServerUri + '/')
        break
      case 'subpage':
        navigate(staticServerUri + '/home/subpage')
        break
      default:
        alert('경로가 잘못되었습니다.')
        break
    }
  }

  return (
      <>
        <div style={{textAlign: 'center'}}>
          {path.map((page) => {
            if (page === 'subpage') {
              return <>
                <span>{`>`}</span>
                <button style={buttonStyle} onClick={() => {handleClick(page)}}>{page}</button>
              </>
            }
            return <button style={buttonStyle} onClick={() => handleClick(page)}>{page}</button>
          })}
        </div>
        <AppRoutes />
    </>
  );
}

export default Breadcrumb