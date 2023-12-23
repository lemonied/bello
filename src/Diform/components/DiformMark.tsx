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
  const { statusInfo } = useDiformContext();

  return (
    <div
      className={classnames(className, 'bello-diform-mark')}
      style={{
        borderColor: statusInfo?.color,
        ...style,
      }}
    >
      <div className={'bello-diform-mark-divider'}>
        <span style={{ borderColor: statusInfo?.color }} />
        <span style={{ color: statusInfo?.color }}>{statusInfo?.text}</span>
        <span style={{ borderColor: statusInfo?.color }} />
      </div>
      {children}
    </div>
  );
};

export { DiformMark };
