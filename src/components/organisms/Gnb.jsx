import React from 'react'
import { Link } from "react-router-dom";
import Image from '../atoms/Image';
import Containor from "../atoms/Containor"
import homeLogo from '../../assets/img/logoKakao.png'
import BorderLine from '../atoms/BorderLine';
import GnbButton from '../molecules/GnbButton';
import { styled } from 'styled-components';

function GNB({ }) {
  return (
    <Containor style={{margin: 'auto'}}>
    <BorderLine/>
    <Containor style = {{display: 'flex', position: 'relative'}}>
      <Image style = {{display:'inline'}} src={homeLogo}/>
      <GnbButton style={{position: 'absolute', left: "83%", top:"-20%"}}/>
    </Containor>
    <BorderLine/>
    </Containor>
  )
}

export default GNB


