import React from 'react';
import type { CSSProperties, FC, ReactNode } from 'react';
import styled from 'styled-components';
import classnames from 'classnames';
import { useDiffStatus } from '../hooks';
import type { StatusInfo } from '../utils';

const Wrapper = styled.div<{ $status?: StatusInfo | null }>`
  &.diff-form-mark{
    padding: 8px;
    border-style: dashed;
    border-top: none;
    border-left-width: 1px;
    border-bottom-width: 1px;
    border-right-width: 1px;
    border-color: ${props => props.$status?.color};
    position: relative;

    .diff-form-mark-divider{
      position: absolute;
      bottom: 100%;
      width: 100%;
      left: 0;
      transform: translate(0, 50%);
      display: flex;
      align-items: center;

      & > span{
        font-size: 12px;
        color: ${props => props.$status?.color};

        &:first-child{
          flex: 0 0 25%;
        }

        &:last-child {
          flex: 1;
        }

        &:first-child, &:last-child{
          border-top-width: 1px;
          border-top-style: dashed;
          border-color: ${props => props.$status?.color};
        }
      }
    }
  }
`;

interface DiffFormMarkProps {
  className?: string;
  style?: CSSProperties;
  children?: ReactNode;
}
const DiffFormMark: FC<DiffFormMarkProps> = (props) => {

  const { className, style, children } = props;
  const status = useDiffStatus();

  return (
    <Wrapper
      className={classnames(
        className,
        {
          'diff-form-mark': status,
        },
      )}
      style={style}
      $status={status}
    >
      {
        status ?
          <div className={'diff-form-mark-divider'}>
            <span />
            <span>{status?.text}</span>
            <span />
          </div> :
          null
      }
      {children}
    </Wrapper>
  );
  
};

export { DiffFormMark };
