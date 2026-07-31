
export type EmptyStateGlyphName =
  | "empty"
  | "documents"
  | "grades"
  | "attendance"
  | "people"
  | "schedule"
  | "search"
  | "building"
  | "layers"
  | "fetching"
  | "knowledge"
  | "forms"
  | "materials"
  | "timetable"
  | "messages"
  | "notifications"
  | "billing"
  | "media";

export interface EmptyStateGlyphProps {
  name: EmptyStateGlyphName;
  /** Rendered size in px. The viewBox is fixed at 96, so strokes scale with it. */
  size?: number;
  /** Cycles the strokes instead of resolving them, for in-flight states. */
  loading?: boolean;
  className?: string;
}

/*
 * Animated counterpart to the static icon tile in EmptyState.
 *
 * Each glyph is three strokes in the house "Niti" language, traced on with
 * stroke-dashoffset and then left alone: a one-shot draw, not a loop, so a page
 * full of empty states never turns into competing motion. Only the ambient
 * backdrop keeps breathing.
 *
 * `pathLength={100}` normalizes every path to the same coordinate space, so the
 * dash array is 100 regardless of the path's real geometry — no per-path length
 * measurement, no getTotalLength() in an effect, no layout read at all.
 *
 * Motion lives in CSS (theme.css keyframes + the reduced-motion block at the end
 * of this file's styles), so prefers-reduced-motion users get the completed
 * drawing on first paint instead of an animation they have to sit through.
 */

interface GlyphShape {
  /** Three strokes, drawn in order. */
  strokes: string[];
  /** Filled accents drawn after the strokes; they fade rather than trace. */
  accents?: { cx: number; cy: number; r: number }[];
}

const GLYPHS: Record<EmptyStateGlyphName, GlyphShape> = {
  /*
   * The house empty state, used by every "nothing here yet" region regardless of
   * domain. A circled "i": neutral by design, because a checkmark here read as
   * "done — everything is complete", which is the opposite of what an empty
   * region means. Domain glyphs below stay available for the rare hero-sized
   * state, but this is the default — a screen full of different drawings was the
   * thing this replaced.
   */
  empty: {
    strokes: [
      "M48 82a34 34 0 1 0 0-68 34 34 0 0 0 0 68Z",
      "M48 44v22",
    ],
    accents: [{ cx: 48, cy: 32, r: 3.6 }],
  },
  // A sheet with a folded corner and two content lines.
  documents: {
    strokes: [
      "M26 18h28l16 16v44a4 4 0 0 1-4 4H26a4 4 0 0 1-4-4V22a4 4 0 0 1 4-4Z",
      "M54 18v16h16",
      "M34 52h28M34 64h20",
    ],
  },
  // A rising bar trio with a trend line over it.
  grades: {
    strokes: [
      "M24 78V58M40 78V44M56 78V50M72 78V34",
      "M22 78h52",
      "M24 52l16-14 16 6 16-16",
    ],
    accents: [{ cx: 72, cy: 28, r: 4 }],
  },
  // A calendar frame with a check inside.
  attendance: {
    strokes: [
      "M22 30h52a4 4 0 0 1 4 4v40a4 4 0 0 1-4 4H22a4 4 0 0 1-4-4V34a4 4 0 0 1 4-4Z",
      "M32 22v14M64 22v14M18 46h60",
      "M36 60l9 9 16-18",
    ],
  },
  // Two overlapping figures.
  people: {
    strokes: [
      "M38 44a11 11 0 1 0 0-22 11 11 0 0 0 0 22Z",
      "M20 76c0-11 8-18 18-18s18 7 18 18",
      "M62 34a9 9 0 0 1 0 18M60 60c9 1 16 7 16 16",
    ],
  },
  // A clock face.
  schedule: {
    strokes: [
      "M48 82a34 34 0 1 0 0-68 34 34 0 0 0 0 68Z",
      "M48 30v18l13 9",
      "M48 14v6M82 48h-6M48 82v-6M14 48h6",
    ],
  },
  // A magnifier with a level line inside.
  search: {
    strokes: [
      "M44 70a26 26 0 1 0 0-52 26 26 0 0 0 0 52Z",
      "M63 63l17 17",
      "M34 44h20M34 54h12",
    ],
  },
  // An institutional facade: base line, columned block, windows.
  building: {
    strokes: [
      "M16 80h64",
      "M24 80V38l24-16 24 16v42",
      "M38 80V58h20v22M38 44h8M54 44h4",
    ],
  },
  // Three stacked planes, the house metaphor for a chair under a department.
  layers: {
    strokes: [
      "M48 16 16 34l32 18 32-18-32-18Z",
      "M48 48l32-18M48 48 16 30",
      "M16 62l32 18 32-18",
    ],
  },
  /*
   * Domain-neutral wait glyph: a rounded table whose rows arrive one by one
   * while a cursor clicks it. Shows the app fetching rows rather than borrowing
   * the button spinner, which belongs to a pressed control, not to a region.
   * Only the frame is a stroke here; rows and cursor are animated separately.
   */
  fetching: {
    strokes: [
      "M20 22h56a6 6 0 0 1 6 6v40a6 6 0 0 1-6 6H20a6 6 0 0 1-6-6V28a6 6 0 0 1 6-6Z",
      "M14 38h68",
      "M28 30h10",
    ],
  },
  // An open book: quizzes, question banks, practical activities.
  knowledge: {
    strokes: [
      "M48 28v46",
      "M48 28c-6-5-15-8-26-8v46c11 0 20 3 26 8",
      "M48 28c6-5 15-8 26-8v46c-11 0-20 3-26 8",
    ],
  },
  // A clipboard with ticked lines: forms and their responses.
  forms: {
    strokes: [
      "M30 24h-4a4 4 0 0 0-4 4v46a4 4 0 0 0 4 4h44a4 4 0 0 0 4-4V28a4 4 0 0 0-4-4h-4",
      "M38 16h20a2 2 0 0 1 2 2v8H36v-8a2 2 0 0 1 2-2Z",
      "M32 46l5 5 9-10M32 64l5 5 9-10M54 46h12M54 64h12",
    ],
  },
  // Stacked sheets with a corner fold: uploaded course materials.
  materials: {
    strokes: [
      "M28 16h24l14 14v38a4 4 0 0 1-4 4H28a4 4 0 0 1-4-4V20a4 4 0 0 1 4-4Z",
      "M52 16v14h14",
      "M18 30v46a4 4 0 0 0 4 4h34",
    ],
  },
  // A week grid: timetable slots laid across days.
  timetable: {
    strokes: [
      "M20 26h56a4 4 0 0 1 4 4v44a4 4 0 0 1-4 4H20a4 4 0 0 1-4-4V30a4 4 0 0 1 4-4Z",
      "M16 42h64M38 42v36M60 42v36",
      "M30 18v12M66 18v12",
    ],
  },
  // A speech bubble with lines: mailbox threads and conversations.
  messages: {
    strokes: [
      "M22 22h52a6 6 0 0 1 6 6v30a6 6 0 0 1-6 6H44L28 78V64h-6a6 6 0 0 1-6-6V28a6 6 0 0 1 6-6Z",
      "M30 36h36",
      "M30 50h22",
    ],
  },
  // A bell: notification feeds.
  notifications: {
    strokes: [
      "M48 18a18 18 0 0 1 18 18v14l6 12H24l6-12V36a18 18 0 0 1 18-18Z",
      "M48 12v6",
      "M40 62a8 8 0 0 0 16 0",
    ],
  },
  // A card with a stripe: plans, invoices, licence seats.
  billing: {
    strokes: [
      "M18 28h60a4 4 0 0 1 4 4v32a4 4 0 0 1-4 4H18a4 4 0 0 1-4-4V32a4 4 0 0 1 4-4Z",
      "M14 42h68",
      "M26 56h14",
    ],
  },
  // A frame with a play mark: slides, decks, recorded media.
  media: {
    strokes: [
      "M20 24h56a4 4 0 0 1 4 4v40a4 4 0 0 1-4 4H20a4 4 0 0 1-4-4V28a4 4 0 0 1 4-4Z",
      "M42 40l16 8-16 8V40Z",
      "M16 66h64",
    ],
  },
};

export function EmptyStateGlyph({ name, size = 44, loading = false, className = "" }: EmptyStateGlyphProps) {
  const glyph = GLYPHS[name];

  return (
    <svg
      viewBox="0 0 96 96"
      width={size}
      height={size}
      fill="none"
      aria-hidden="true"
      focusable="false"
      className={`tapiz-glyph ${loading ? "tapiz-glyph-loading" : ""} ${name === "fetching" ? "tapiz-glyph-fetching" : ""} ${className}`.replace(/\s+/g, " ").trim()}
    >
      {/* No backdrop shape here: the call site's icon tile already supplies the
          surface, and a second filled circle inside it just competes with the
          strokes it is meant to sit behind. */}
      {/* The float lives on its own wrapper: the strokes' transform budget is
          spent on nothing, so drawing and drifting never fight over one property. */}
      <g className="tapiz-glyph-float">
        <g
          className="tapiz-glyph-strokes"
          stroke="currentColor"
          strokeWidth="4.5"
          strokeLinecap="round"
          strokeLinejoin="round"
          vectorEffect="non-scaling-stroke"
        >
          {glyph.strokes.map((d, index) => (
            <path
              // Order is the identity here: these are fixed, hand-authored strokes
              // in a static table, never reordered or filtered at runtime.
              key={index}
              d={d}
              pathLength={100}
              style={{ animationDelay: `${index * 140}ms` }}
            />
          ))}
        </g>
        {name === "fetching" ? (
          <>
            {/* Rows land one after another, so the table visibly fills up. */}
            <g className="tapiz-glyph-rows" fill="currentColor">
              <rect className="tapiz-glyph-row" x="22" y="45" width="30" height="5" rx="2.5" />
              <rect className="tapiz-glyph-row" x="22" y="56" width="42" height="5" rx="2.5" />
              <rect className="tapiz-glyph-row" x="22" y="67" width="24" height="5" rx="2.5" />
            </g>
            {/* Modern arrow cursor: filled body plus a click ripple on tap. */}
            <g className="tapiz-glyph-cursor">
              <circle className="tapiz-glyph-click" cx="62" cy="58" r="9" fill="none" stroke="currentColor" strokeWidth="2.5" />
              <path
                d="M58 50l14 5.5-5.6 2.2-2.2 5.6L58 50Z"
                fill="currentColor"
                stroke="currentColor"
                strokeWidth="2.5"
                strokeLinejoin="round"
              />
            </g>
          </>
        ) : null}
        {glyph.accents?.map((accent, index) => (
          <circle
            key={index}
            className="tapiz-glyph-accent"
            cx={accent.cx}
            cy={accent.cy}
            r={accent.r}
            fill="currentColor"
            style={{ animationDelay: `${420 + index * 120}ms` }}
          />
        ))}
      </g>
    </svg>
  );
}
