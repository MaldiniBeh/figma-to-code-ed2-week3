export interface SubMenuItem {
    icon?: string;
    iconDark?: string;
    iconWhite?: string;
    label?: string;
    index?: string;
    route?: string | null;
    expanded?: boolean;
    active?: boolean;
    children?: Array<SubMenuItem>;
  }
  export interface MenuItem {
    selected?: boolean;
    active?: boolean;
    items: Array<SubMenuItem>;
  }