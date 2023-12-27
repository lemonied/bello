import React from 'react';
import type { CSSProperties, FC, ReactNode } from 'react';
import classnames from 'classnames';
import { useDiformContext } from '../hooks';

interface DiformMarkProps {
  className?: string;
  style?: CSSProperties;
  children?: ReactNode;
}
const DiformMark: FC<DiformMarkProps> = (props) => {

  const { className, style, children } = props;
  const { statusInfo, firstStatus } = useDiformContext();

  const status = firstStatus ? statusInfo : null;

  return (
    <div
      className={classnames(
        className,
        {
          'bello-diform-mark': status,
        },
      )}
      style={{
        borderColor: status?.color,
        ...style,
      }}
    >
      {
        status ?
          <div className={'bello-diform-mark-divider'}>
            <span style={{ borderColor: status.color }} />
            <span style={{ color: status.color }}>{statusInfo?.text}</span>
            <span style={{ borderColor: status.color }} />
          </div> :
          null
      }
      {children}
    </div>
  );
  
};

export { DiformMark };
