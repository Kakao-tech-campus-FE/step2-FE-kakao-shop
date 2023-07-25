import styles from "./Footer.module.css";

const Footer = () => {
    return (
        <footer className={styles.footer}>
            <div className={styles.corp_info}>
                <p>
                    <span>(주)카카오</span>
                    <span>대표이사 : 홍은택</span>
                    <span>주소 : 제주특별자치도 제주시 첨단로 242</span>
                </p>
                <p>
                    <span>사업자등록번호 : 120-81-47521</span>
                    <span>통신판매업신고 : 제2015 - 제주아라 - 0032호</span>
                    <span>호스팅 사업자 : (주)카카오</span>
                </p>
                <p>
                    <span>이메일 : <span>cs.shopping@kakaocorp.com</span></span>
                    <span>고객센터 : 1544-5664 (통화료 발생 / 평일 09:00~18:00) 
                        <a href="">톡 상담하기</a> (평일 09:00~18:00)
                    </span>
                </p>
                <small>
                    <span>Copyright &copy; Kakao Corp. All rights reserved</span>
                </small>
                <p>
                    (주)카카오에서 판매하는 상품 중에는 개별판매자가 판매하는 상품이 포함되어 있습니다.<br />
                    개별판매자가 판매하는 상품에 대해 (주)카카오는 통신중개판매업자로서 통신판매의 당사자가 아니며 상품의 주문, 배송 및 환불 등과 관련한 의무와 책임은 각 판매자에게 있습니다.
                </p>
                
            </div>
        </footer>
    )
}

export default Footer;