export interface ISubMenuAction {
  title: string;
  rightIcon?: string;
  altRightIcon?: string;
}

export interface ISubMenuItem {
  id: number;
  title: string;
  linkTo: string;
  value?: number;
}

export interface IMenuItem {
  id: number;
  title: string;
  icon: string;
  activeIcon: string;
  linkTo: string;
  defaultOpen: boolean;
  subMenu: ISubMenuItem[];
  action?: ISubMenuAction;
}
