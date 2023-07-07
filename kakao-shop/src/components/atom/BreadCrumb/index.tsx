import styled from '@emotion/styled';
import { Children, cloneElement, ReactElement } from 'react';
import type { PropsWithChildren } from 'react';

import BreadcrumbItem from './BreadcrumbItem';

const Breadcrumb = ({ children }: PropsWithChildren) => {
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
