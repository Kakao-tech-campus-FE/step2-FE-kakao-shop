import styled from "styled-components";
import { useState } from "react";

const UnStyledLink = styled.a`
  all: unset;
  padding: 0.3rem;
  cursor: pointer;

  &:nth-last-child(1) {
    font-weight: bold;
  }
`;

const BreadCrumbNav = styled.nav`
  margin-bottom: 0.8rem;
  > ${UnStyledLink}:not(:last-child) {
    color: gray;
  }
`;

const CategoryList = styled.div`
  .categoryList {
    background-color: #d9d9d9;
    padding: 0.2rem;
  }

  .categoryList div:hover {
    cursor: pointer;
    text-decoration: underline;
  }
`;

const TotalDiv = styled.body`
  width: 13rem;
  height: fit-content;
`;

const breadCrumbArr = [
  "여성의류",
  "남성의류",
  "언더웨어",
  "신발/수제화",
  "가방/지갑/잡화",
];

const Breadcrumb = ({ main }) => {
  const [selectedItem, setSelectedItem] = useState("");

  const handleItemClick = (item) => {
    setSelectedItem(item);
  };

  return (
    <TotalDiv>
      <BreadCrumbNav>
        <UnStyledLink href={main}>{main} ></UnStyledLink>
        <UnStyledLink href={selectedItem}>{selectedItem}</UnStyledLink>
      </BreadCrumbNav>
      <CategoryList className="categoryList">
        {breadCrumbArr.map((item, index) => (
          <div key={index} onClick={() => handleItemClick(item)}>
            {item}
          </div>
        ))}
      </CategoryList>
    </TotalDiv>
  );
};

export default Breadcrumb;
