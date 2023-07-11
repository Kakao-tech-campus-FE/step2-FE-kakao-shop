import * as Picture from "../../styles/atoms/Photo";

const Photo = ({className, src, alt}) => {
    return(
        <Picture.ImageContainer>
            <source media="(min-width: 650px)" srcSet={src}/>
            <img src={src} alt={alt} className={className}/>
        </Picture.ImageContainer>
    );
};

export default Photo;