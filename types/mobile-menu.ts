import { NavigationNode } from "./navigation";

export interface MobileMenuProps {
  routes: NavigationNode[];
  isOpen: boolean;
  toggleMenu: () => void;
  scrolledPast: boolean;
}
