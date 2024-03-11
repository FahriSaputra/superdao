export interface IModalHeaderProps {
  contentBeforeTitle?: React.ReactNode;
  hideCloseButton?: boolean;
  onCloseClick?: () => void;
  title: string;
}
