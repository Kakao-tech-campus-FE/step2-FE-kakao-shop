import { instance } from "../../Servicies";

const Photo = ({ src, alt }) => {
  return (
    <picture className="w-100px">
      <source srcSet={`http://kakao-app-env.eba-kfsgeb74.ap-northeast-2.elasticbeanstalk.com${src}`} />
      <img className="p-4" src={`http://kakao-app-env.eba-kfsgeb74.ap-northeast-2.elasticbeanstalk.com${src}`} alt={alt} />
    </picture>
  )
}

export default Photo;