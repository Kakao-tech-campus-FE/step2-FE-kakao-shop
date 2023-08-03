import '../../styles/atoms/Photo.css'

const Photo =({ className, src, alt}) =>{
  return (
    <picture >
      <source srcSet={src}/>
      <img src={src} alt={alt} className={className}/>
    </picture>
  )
}

export default Photo