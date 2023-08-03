import '../../styles/atoms/Photo.css'

const staticServerUrl = process.env.REACT_APP_PATH || "";
const Photo =({ className, src, alt}) =>{
  return (
    <picture >
      <source srcSet={staticServerUrl + src}/>
      <img src={staticServerUrl + src} alt={alt} className={className}/>
    </picture>
  )
}

export default Photo