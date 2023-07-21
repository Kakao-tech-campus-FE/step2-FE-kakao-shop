import React from 'react'

const Spinner = () => {
  const spinnerStyle = {
    width: '4em',
    height: '4em',
    border: '0.5em solid rgba(0, 0, 0, 0.1)',
    borderLeftColor: '#7983ff',
    borderRadius: '50%',
    animation: 'spin 1s linear infinite',
  }

  return (
    <div style={{
      padding: 0,
      margin: 0,
      display: 'flex',
      width: '100vw',
      height: '100vh',
      justifyContent: 'center',
      alignItems: 'center',
    }}>
      <div className="spinner" style={spinnerStyle}></div>
    </div>
  )
}

export default Spinner
