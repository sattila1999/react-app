import { Menu } from "../menu/Menu";

export function Layout({ children }: any) {
  return (
    <div className="container">
      <Menu />
      {children}
    </div>
  );
}
