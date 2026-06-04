import HeroSection from "../sections/HeroSection";
import FeaturesSection from "../sections/FeaturesSection";
import UsageSection from "../sections/UsageSection";
import ShowcaseSection from "../sections/ShowcaseSection";

interface LandingPageProps {
  onBrowse: () => void;
}

export default function LandingPage({ onBrowse }: LandingPageProps) {
  return (
    <div style={{ paddingTop: "3.25rem" }}>
      <HeroSection onBrowse={onBrowse} />
      <FeaturesSection />
      <UsageSection />
      <ShowcaseSection />

      <footer
        style={{
          borderTop: "1px solid var(--color-border)",
          padding: "2rem 1.5rem",
          textAlign: "center",
        }}
      >
        <p
          style={{
            fontFamily: "var(--font-mono)",
            fontSize: "0.75rem",
            color: "var(--color-txt-4)",
            letterSpacing: "0.05em",
          }}
        >
          @tapizlabs/ui — MIT License
        </p>
      </footer>
    </div>
  );
}
