interface PassPropsProps<P=any> {
  children: (props: P) => JSX.Element;
  [props: string]: any;
}
export const PassProps = <P extends object = Record<string, any>>(props: PassPropsProps<P>) => {
  const { children, ...extra } = props;
  return children(extra as P);
};
