const ToggleButton = () => {

  return (
    <>
      <input
      type="checkbox"
      id="toggle"
      hidden
      />
      <label htmlFor='toggle' className="toggleContainer">
        <span className="toggleButton"></span>
      </label>
    </>
  )
}

export default ToggleButton