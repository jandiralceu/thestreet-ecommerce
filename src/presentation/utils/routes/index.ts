export class RouteName {
  static home = "/";
  static login = "/auth/login";
  static register = "/auth/register";
  static shop = "/shop";
  static profile = "/profile";
  static cart = "/cart";
  static checkout = "/checkout";
}

export const routeAnimationProps = {
  initial: { opacity: 0 },
  animate: { opacity: 1 },
  exit: { opacity: 0 },
};
