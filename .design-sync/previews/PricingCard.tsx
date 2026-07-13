import React from "react";
import { PricingCard, Button } from "@tapizlabs/ui";

export const Tiers = () => (
  <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 16, alignItems: "stretch" }}>
    <PricingCard
      name="Free"
      price="€0"
      description="For individual professors getting started."
      features={[
        "1 subject, up to 60 students",
        "QR attendance",
        "Basic score sheet",
      ]}
      cta={<Button variant="secondary" style={{ width: "100%" }}>Start free</Button>}
    />
    <PricingCard
      name="Faculty"
      price="€49/mo"
      description="Everything a department needs, per faculty."
      highlighted
      features={[
        "Unlimited subjects & students",
        "Knowledge checks & quizzes",
        "Office hours & todos",
        "Analytics and reports",
      ]}
      cta={<Button variant="primary" style={{ width: "100%" }}>Choose Faculty</Button>}
    />
    <PricingCard
      name="University"
      price="Custom"
      description="Campus-wide license with SSO and admin console."
      features={[
        "All Faculty features",
        "University-wide license binding",
        "Priority support & audit log",
      ]}
      cta={<Button variant="secondary" style={{ width: "100%" }}>Contact sales</Button>}
    />
  </div>
);

export const SingleHighlighted = () => (
  <div style={{ maxWidth: 360 }}>
    <PricingCard
      name="Faculty"
      price="€49/mo"
      description="Most popular — billed yearly per faculty."
      highlighted
      features={["Unlimited students", "All teaching tools", "Email support"]}
      cta={<Button variant="primary" style={{ width: "100%" }}>Upgrade now</Button>}
    />
  </div>
);
