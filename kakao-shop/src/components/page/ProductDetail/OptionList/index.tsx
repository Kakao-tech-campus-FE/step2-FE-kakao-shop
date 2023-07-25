import arrow from '@assets/arrow.webp';
import { css } from '@emotion/react';
import styled from '@emotion/styled';
import { Fragment } from 'react';
import type { UserSelectOption } from 'types/product';

import { Button, Photo } from '@components/atom';
import OptionItem from '@components/page/ProductDetail/OptionItem';

type Props = {
  isOpenList: boolean;
  options?: UserSelectOption[];
  onSelectOption: (id: number) => void;
  onToggle: () => void;
};
const OptionList = ({ isOpenList, options, onSelectOption, onToggle }: Props) => {
  return (
    <S.Root isOpenOptionList={isOpenList}>
      <Button css={S.ButtonCSS(isOpenList)} onClick={onToggle}>
        <span>-주문 선택-</span>
        <Photo imageClassName={isOpenList ? S.ArrowDownIconCSS : S.ArrowUpIconCSS} src={arrow} alt={'화살표'} />
      </Button>

      <ul>
        {isOpenList && (
          <Fragment>
            {options?.map(option => (
              <OptionItem key={option.id} {...option} onSelectOption={onSelectOption} />
            ))}
          </Fragment>
        )}
      </ul>
    </S.Root>
  );
};
export default OptionList;

const S = {
  Root: styled.div<{ isOpenOptionList: boolean }>`
    border-radius: 3px;

    ${({ isOpenOptionList }) => css`
      border: ${isOpenOptionList ? '1px solid #888' : '1px solid  #fafafa'};
    `}
  `,

  ButtonCSS: (isOpenOptionList: boolean) => css`
    display: flex;
    justify-content: space-between;
    align-items: center;

    position: relative;

    width: 100%;
    padding: 11px 13px 12px 14px;

    background-color: #fafafa;
    border: ${isOpenOptionList ? '1px solid #fafafa' : '1px solid #d5d5d5'};
    border-radius: 3px;

    font-size: 15px;
    line-height: 19px;
    color: #222;
    text-align: left;
  `,

  ArrowDownIconCSS: css`
    display: block;

    width: 18px;
    height: 18px;

    transform: rotate(270deg);
    filter: invert(95%) sepia(0%) saturate(1826%) hue-rotate(191deg) brightness(85%) contrast(107%);
  `,

  ArrowUpIconCSS: css`
    display: block;

    width: 18px;
    height: 18px;

    transform: rotate(90deg);
    filter: invert(57%) sepia(10%) saturate(13%) hue-rotate(27deg) brightness(93%) contrast(81%);
  `,
};
