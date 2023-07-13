const Photo = ({ src, alt }) => {
  return (
    <picture className="w-100px">
      <source srcSet={`${src}`} />
      <img className="p-4" src={`${src}`} alt={alt} />
    </picture>
  )
}

export default Photo;