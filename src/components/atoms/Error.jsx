const Error = ({errorStatus}) => {

  return (
    <div className="w-screen h-screen flex justify-center items-center">
      <div>
        <h1 className="text-9xl">Error!</h1>
        <h2 className="text-2xl">{errorStatus}</h2>
      </div>
    </div>
  )
}

export default Error;