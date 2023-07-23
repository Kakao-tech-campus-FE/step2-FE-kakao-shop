import { css } from '@emotion/react';
import styled from '@emotion/styled';
import { ReactNode } from 'react';
import { BsChevronRight } from 'react-icons/bs';
import { Link } from 'react-router-dom';

type BreadcrumbItemProps = {
  children?: ReactNode;
  href: string;
  active?: boolean;
};

const BreadcrumbItem = ({ children, href, active = false, ...props }: BreadcrumbItemProps) => {
  return (
    <BreadcrumbItemContainer {...props}>
      <Anchor to={href}>
        <Text active={active}>{children}</Text>
      </Anchor>
      {!active && <BsChevronRight />}
    </BreadcrumbItemContainer>
  );
};

const BreadcrumbItemContainer = styled.div`
  display: inline-flex;
  align-items: center;
`;

const Anchor = styled(Link)`
  color: inherit;
  text-decoration: none;
`;

const Text = styled.span<{ active: boolean }>`
  font-size: 14px;
  ${({ active }) => css`
    font-weight: ${active ? 'bold' : 'normal'};
  `}
`;

export default BreadcrumbItem;
