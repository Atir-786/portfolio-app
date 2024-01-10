import { Outlet } from "react-router-dom";
import PageNav from "./PageNav";
export default function AppLayout() {
  return (
    <header className="app-layout">
      <PageNav />
      <Outlet />
    </header>
  );
}
