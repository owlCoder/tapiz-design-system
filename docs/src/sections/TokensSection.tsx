interface ColorSwatch {
  name: string;
  varName: string;
}

const INK_COLORS: ColorSwatch[] = [
  { name: "ink-000", varName: "--color-ink-000" },
  { name: "ink-100", varName: "--color-ink-100" },
  { name: "ink-200", varName: "--color-ink-200" },
  { name: "ink-300", varName: "--color-ink-300" },
  { name: "ink-400", varName: "--color-ink-400" },
  { name: "ink-500", varName: "--color-ink-500" },
];

const PRIMARY_COLORS: ColorSwatch[] = [
  { name: "primary-300", varName: "--color-primary-300" },
  { name: "primary-400", varName: "--color-primary-400" },
  { name: "primary-500", varName: "--color-primary-500" },
  { name: "primary-600", varName: "--color-primary-600" },
  { name: "primary-700", varName: "--color-primary-700" },
  { name: "primary-800", varName: "--color-primary-800" },
  { name: "primary-950", varName: "--color-primary-950" },
];

const SIGNAL_COLORS: ColorSwatch[] = [
  { name: "signal-300", varName: "--color-signal-300" },
  { name: "signal-400", varName: "--color-signal-400" },
  { name: "signal-500", varName: "--color-signal-500" },
];

const SEMANTIC_COLORS: ColorSwatch[] = [
  { name: "warn", varName: "--color-warn" },
  { name: "good", varName: "--color-good" },
  { name: "border", varName: "--color-border" },
  { name: "border-hi", varName: "--color-border-hi" },
];

const TEXT_COLORS: ColorSwatch[] = [
  { name: "txt-1", varName: "--color-txt-1" },
  { name: "txt-2", varName: "--color-txt-2" },
  { name: "txt-3", varName: "--color-txt-3" },
  { name: "txt-4", varName: "--color-txt-4" },
];

interface SwatchGroupProps {
  label: string;
  colors: ColorSwatch[];
}

function SwatchGroup({ label, colors }: SwatchGroupProps) {
  return (
    <div className="mb-8">
      <p className="kicker mb-3">{label}</p>
      <div className="flex flex-wrap gap-3">
        {colors.map((c) => (
          <div key={c.varName} className="flex flex-col gap-1 items-center">
            <div
              className="w-14 h-14 border border-border"
              style={{ backgroundColor: `var(${c.varName})` }}
            />
            <span
              className="text-xs text-txt-3 text-center"
              style={{ fontFamily: "var(--font-mono)", maxWidth: "3.5rem" }}
            >
              {c.name}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}

const FONT_EXAMPLES = [
  {
    label: "Display — IBM Plex Sans",
    varName: "--font-display",
    text: "The quick brown fox",
    className: "text-2xl font-bold",
  },
  {
    label: "Body — IBM Plex Sans",
    varName: "--font-body",
    text: "The quick brown fox jumps over the lazy dog.",
    className: "text-base",
  },
  {
    label: "Mono — IBM Plex Mono",
    varName: "--font-mono",
    text: "const x = design.system;",
    className: "text-sm",
  },
];

const UTILITY_EXAMPLES: { label: string; className: string; content: string }[] = [
  { label: "card", className: "card p-4", content: "card utility class" },
  { label: "btn-primary", className: "btn-primary", content: "btn-primary" },
  { label: "btn-secondary", className: "btn-secondary", content: "btn-secondary" },
  { label: "skeleton", className: "skeleton h-4 w-32 rounded", content: "" },
  { label: "kicker", className: "kicker", content: "Section Label" },
];

export default function TokensSection() {
  return (
    <div>
      <h2 className="text-2xl font-bold text-txt-1 mb-1">
        Design Tokens
      </h2>
      <p className="text-txt-3 mb-8 text-sm">
        CSS custom properties defined in{" "}
        <code
          className="text-primary-400"
          style={{ fontFamily: "var(--font-mono)" }}
        >
          dist/theme.css
        </code>
      </p>

      <section className="mb-10">
        <h3 className="text-lg font-semibold text-txt-1 mb-4 border-b border-border pb-2">
          Colors
        </h3>
        <SwatchGroup label="Surfaces (Ink)" colors={INK_COLORS} />
        <SwatchGroup label="Primary (Electric Cyan)" colors={PRIMARY_COLORS} />
        <SwatchGroup label="Signal (Lime)" colors={SIGNAL_COLORS} />
        <SwatchGroup label="Semantic" colors={SEMANTIC_COLORS} />
        <SwatchGroup label="Text" colors={TEXT_COLORS} />
      </section>

      <section className="mb-10">
        <h3 className="text-lg font-semibold text-txt-1 mb-4 border-b border-border pb-2">
          Typography
        </h3>
        <div className="flex flex-col gap-6">
          {FONT_EXAMPLES.map((f) => (
            <div key={f.varName} className="card p-4">
              <p className="kicker mb-2">{f.label}</p>
              <p
                className={`${f.className} text-txt-1`}
                style={{ fontFamily: `var(${f.varName})` }}
              >
                {f.text}
              </p>
              <p
                className="text-xs text-txt-4 mt-1"
                style={{ fontFamily: "var(--font-mono)" }}
              >
                font-family: var({f.varName})
              </p>
            </div>
          ))}
        </div>
      </section>

      <section className="mb-10">
        <h3 className="text-lg font-semibold text-txt-1 mb-4 border-b border-border pb-2">
          Utility Classes
        </h3>
        <div className="flex flex-wrap gap-4 items-start">
          {UTILITY_EXAMPLES.map((u) => (
            <div key={u.label} className="flex flex-col gap-2 items-start">
              <p
                className="text-xs text-txt-3"
                style={{ fontFamily: "var(--font-mono)" }}
              >
                .{u.label}
              </p>
              <div className={u.className}>{u.content}</div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
