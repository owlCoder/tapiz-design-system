import { useState } from "react";
import Navbar from "./components/Navbar";
import LandingPage from "./pages/LandingPage";
import ComponentsPage from "./pages/ComponentsPage";

type Page = "landing" | "components";

export default function App() {
  const [page, setPage] = useState<Page>("landing");

  return (
    <div
      style={{
        minHeight: "100vh",
        background: "var(--color-ink-000)",
        color: "var(--color-txt-1)",
      }}
    >
      <Navbar onNavigate={setPage} />

      {page === "landing" ? (
        <LandingPage onBrowse={() => setPage("components")} />
      ) : (
        <ComponentsPage />
      )}
    </div>
  );
}
