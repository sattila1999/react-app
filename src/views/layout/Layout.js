import { Menu } from "../menu/Menu";

export function Layout({ children }) {
  return (
    <div className="container">
      <Menu />
      {children}
    </div>
  );
}
