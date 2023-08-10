import Containor from "../atoms/Containor"
import LoginMenu from '../molecules/LoginMenu';
import ImageToLink from '../molecules/ImageToLink';
import Box from '../atoms/Box'
import logoKakao from '../../assets/img/logoKakao.png'
import Navigation from '../molecules/Navigation';
import SelectContainor from '../atoms/SelectContainor';
import FontToLink from '../molecules/FontToLink';
import { faMagnifyingGlass, faTruckFast, faCartShopping, faBars } from "@fortawesome/free-solid-svg-icons";
const staticServerUri = process.env.REACT_APP_PATH || "";
function GNB() {
  return (
    <Containor style={{height:'20%', width:'100%', position:'relative'}}>
        <Containor style={
        {
          position: 'fixed', 
          left: '0', 
          right: '0', 
          top: '0', 
          zIndex: '11000', 
          borderBottom:'1px solid #E5',
          backgroundColor: '#fff' 
       }}>
        <Containor style={{
          width: '1280px',
          display: 'flex',
          height: '79px',
          margin: '0 auto',
        }}>    

        <Box style={{paddingTop: '27px', fontSize: '2rem'}}>
          <ImageToLink src={logoKakao} to={staticServerUri + '/'} linkstyle={{color: '#333', fontSize:'2rem'}} 
          imagestyle={{display: 'block', width:'95px', height:'auto', border:'0 none'}}>
          </ImageToLink>
        </Box>

        <Containor style={{padding:'0 8px 0 38px',}}>
          <Navigation/>
        </Containor>

        <SelectContainor select={'before'} style={{
          position: 'relative',
          paddingLeft: '9px',
        }}
        contentstyle={{
          position: 'absolute',
          left: '0',
          top: '33px',
          width: '1px',
          height: '15px',
          }}>
            <FontToLink icon={faBars} to={staticServerUri + '/'} linkstyle={{
              display: "block",
              height: "19px",
              padding: '31px 12px 29px',
              fontWeight: '700',
              color: '#4684e9',
              textDecoration: 'none',
              lineHeight: '19px',
              iconsize: '16px',
            }}
            spanstyle={{
              width: '15px',
              hegith: '12px',
              margin: '4px 6px 0 0',
              backgroundPosition: '-90px 0',
            }}
            iconsize={'16px'}
            >카테고리</FontToLink>
        </SelectContainor>

        <SelectContainor select={'after'} style={{
          position: 'relative',
          marginLeft: 'auto',
          padding: '14px 13px 0 0',
        }}
        contentstyle={{
          position: 'absolute',
          top: '29px',
          right: "0",
          width: '1px',
          height: '22px',
        }}>
            <FontToLink icon={faMagnifyingGlass} to={staticServerUri + '/'} linkstyle={{
              display: "block",
              position: 'relative',
              width: '28px',
              height: '28px',
              padding: "16px",
              textAlign: "center",
              float: 'left',
            }}
            spanstyle={{
              margin: '0',
              backgroundPosition: '0 0',
              width: '28px',
              height: '28px',
              display: 'inline-block',
            }}
            ></FontToLink>
            <FontToLink icon={faTruckFast} to={staticServerUri + '/'} linkstyle={{
              display: "block",
              position: 'relative',
              width: '28px',
              height: '28px',
              padding: "16px",
              textAlign: "center",
              float: 'left',
            }}
            spanstyle={{
              margin: '0',
              backgroundPosition: '0 0',
              width: '28px',
              height: '28px',
              display: 'inline-block',
            }}
            ></FontToLink>
            <FontToLink icon={faCartShopping} to={staticServerUri + '/cart'} linkstyle={{
              display: "block",
              position: 'relative',
              width: '28px',
              height: '28px',
              padding: "16px",
              textAlign: "center",
              float: 'left',
            }}
            spanstyle={{
              margin: '0',
              backgroundPosition: '0 0',
              width: '28px',
              height: '28px',
              display: 'inline-block',
            }}
            ></FontToLink>
        </SelectContainor>

          <LoginMenu style={{
          display: 'flex',
          padding: '13px 0 13px 24px',
          position: 'relatvie'
          }}></LoginMenu>
        </Containor>
      </Containor>

    </Containor>
  )
}

export default GNB


