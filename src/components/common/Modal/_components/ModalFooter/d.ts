import { LinkProps } from "next/link";

export interface IModalFooterProps {
  primaryButton?: React.PropsWithChildren<LinkProps>;
  secondaryButton?: React.PropsWithChildren<LinkProps>;
}
