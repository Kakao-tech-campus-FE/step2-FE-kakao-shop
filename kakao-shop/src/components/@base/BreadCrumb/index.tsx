import styled from "@emotion/styled";
import {
  Children,
  cloneElement,
  isValidElement,
  ReactElement,
  ReactNode,
} from "react";
import BreadcrumbItem from "./BreadcrumbItem";

interface Props {
  children?: ReactNode;
}

const Breadcrumb = ({ children }: Props) => {
  const items = Children.toArray(children).map((item, index, elements) => {
    const element = item as ReactElement;

    // props의 active 를 업데이트합니다.
    return cloneElement(element, {
      ...element.props,
      active: index === elements.length - 1,
    });
  });

  return <BreadcrumbContainer>{items}</BreadcrumbContainer>;
};

const BreadcrumbContainer = styled.nav`
  display: inline-block;
`;

Breadcrumb.Item = BreadcrumbItem;

export default Breadcrumb;
