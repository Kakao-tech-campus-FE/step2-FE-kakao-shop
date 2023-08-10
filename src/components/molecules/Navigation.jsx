import React from 'react'
import Li from '../atoms/Li'
import NavUl from '../atoms/NavUl'
import LinkTo from '../atoms/LinkTo'

const staticServerUri = process.env.REACT_APP_PATH || "";

function Navigation() {
  return (
    <NavUl>
     <Li style={{float: 'left'}}><LinkTo LinkTo={staticServerUri + '/'} style={{display:'block', padding:'31px 12px 29px', fontSize:'16px', lineHeight:'19px', color:'#000', textDecoration:'none', fontWeight: '700'}}>홈</LinkTo></Li>
     <Li style={{float: 'left'}}><LinkTo LinkTo={staticServerUri + '/'} style={{display:'block', padding:'31px 12px 29px', fontSize:'16px', lineHeight:'19px', color:'#000', textDecoration:'none'}}>브랜드데이</LinkTo></Li>
     <Li style={{float: 'left'}}><LinkTo LinkTo={staticServerUri + '/'} style={{display:'block', padding:'31px 12px 29px', fontSize:'16px', lineHeight:'19px', color:'#000', textDecoration:'none'}}>베스트</LinkTo></Li>
     <Li style={{float: 'left'}}><LinkTo LinkTo={staticServerUri + '/'} style={{display:'block', padding:'31px 12px 29px', fontSize:'16px', lineHeight:'19px', color:'#000', textDecoration:'none'}}>라이브</LinkTo></Li>
     <Li style={{float: 'left'}}><LinkTo LinkTo={staticServerUri + '/'} style={{display:'block', padding:'31px 12px 29px', fontSize:'16px', lineHeight:'19px', color:'#000', textDecoration:'none'}}>기획전</LinkTo></Li>
    </NavUl>
  )
}

export default Navigation