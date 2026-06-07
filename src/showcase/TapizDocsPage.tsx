import type { ReactNode } from "react";
import { Button } from "../components/forms/Button";
import { Input } from "../components/forms/Input";
import { Select } from "../components/forms/Select";
import { Textarea } from "../components/forms/Textarea";
import { FormField } from "../components/forms/FormField";
import { Switch } from "../components/forms/Switch";
import { ToggleGroup } from "../components/forms/ToggleGroup";
import { InputGroup } from "../components/forms/InputGroup";
import { Slider } from "../components/forms/Slider";
import { FileDropzone } from "../components/forms/FileDropzone";
import { PasswordInput } from "../components/forms/PasswordInput";
import { TextareaCounter } from "../components/forms/TextareaCounter";
import { Card } from "../components/shared/Card";
import { Badge } from "../components/shared/Badge";
import { StatusBadge } from "../components/shared/StatusBadge";
import { MetricCard } from "../components/shared/MetricCard";
import { StatGrid } from "../components/shared/StatGrid";
import { SectionCard } from "../components/shared/SectionCard";
import { EmptyState } from "../components/shared/EmptyState";
import { Skeleton } from "../components/shared/Skeleton";
import { Avatar } from "../components/shared/Avatar";
import { Kbd } from "../components/shared/Kbd";
import { Timeline } from "../components/shared/Timeline";
import { KeyValueList } from "../components/shared/KeyValueList";
import { CodeBlock } from "../components/shared/CodeBlock";
import { PageHeader } from "../components/shared/PageHeader";
import { SearchInput } from "../components/shared/SearchInput";
import { Pagination } from "../components/shared/Pagination";
import { DataTable } from "../components/table/DataTable";
import { Container } from "../components/layout/Container";
import { Surface } from "../components/layout/Surface";
import { Divider } from "../components/layout/Divider";
import { ResponsiveGrid } from "../components/layout/ResponsiveGrid";
import { AppShell } from "../components/layout/AppShell";
import { Stack } from "../components/layout/Stack";
import { Cluster } from "../components/layout/Cluster";
import { SplitPane } from "../components/layout/SplitPane";
import { TopNav } from "../components/navigation/TopNav";
import { SidebarNav } from "../components/navigation/SidebarNav";
import { Breadcrumbs } from "../components/navigation/Breadcrumbs";
import { Tabs } from "../components/disclosure/Tabs";
import { Accordion } from "../components/disclosure/Accordion";
import { Stepper } from "../components/disclosure/Stepper";
import { Drawer } from "../components/overlays/Drawer";
import { Popover } from "../components/overlays/Popover";
import { CommandMenu } from "../components/overlays/CommandMenu";
import { Alert } from "../components/feedback/Alert";
import { Progress } from "../components/feedback/Progress";
import { Callout } from "../components/feedback/Callout";
import { LoadingOverlay } from "../components/feedback/LoadingOverlay";
import { NotificationList } from "../components/feedback/NotificationList";
import { BarList } from "../components/data-display/BarList";
import { Sparkline } from "../components/data-display/Sparkline";
import { DonutMetric } from "../components/data-display/DonutMetric";
import { DataToolbar } from "../components/data-display/DataToolbar";
import { FilterChip } from "../components/data-display/FilterChip";
import { ResourceCard } from "../components/framework/ResourceCard";
import { IntegrationCard } from "../components/framework/IntegrationCard";
import { HealthIndicator } from "../components/framework/HealthIndicator";
import { AuditLog } from "../components/framework/AuditLog";
import { KanbanBoard } from "../components/framework/KanbanBoard";
import { AccessMatrix } from "../components/framework/AccessMatrix";
import { CalendarGrid } from "../components/framework/CalendarGrid";
import { HeroFrame } from "../components/marketing/HeroFrame";
import { FeatureCard } from "../components/marketing/FeatureCard";
import { FeatureGrid } from "../components/marketing/FeatureGrid";
import { CTASection } from "../components/marketing/CTASection";
import { MockupFrame } from "../components/marketing/MockupFrame";
import { LogoCloud } from "../components/marketing/LogoCloud";
import { TestimonialCard } from "../components/marketing/TestimonialCard";
import { PricingCard } from "../components/marketing/PricingCard";
import { StatsBand } from "../components/marketing/StatsBand";
import { ComparisonTable } from "../components/marketing/ComparisonTable";
import { MasonryGrid } from "../components/layout/MasonryGrid";
import { PageRail } from "../components/layout/PageRail";
import { StickyBar } from "../components/layout/StickyBar";
import { Combobox } from "../components/forms/Combobox";
import { DateRangePicker } from "../components/forms/DateRangePicker";
import { ColorSwatchPicker } from "../components/forms/ColorSwatchPicker";
import { RatingInput } from "../components/forms/RatingInput";
import { ScoreRing } from "../components/data-display/ScoreRing";
import { HeatmapGrid } from "../components/data-display/HeatmapGrid";
import { FunnelChart } from "../components/data-display/FunnelChart";
import { ComparisonMeter } from "../components/data-display/ComparisonMeter";
import { ActivityFeed } from "../components/framework/ActivityFeed";
import { InboxList } from "../components/framework/InboxList";
import { ApprovalQueue } from "../components/framework/ApprovalQueue";
import { SLAStatus } from "../components/framework/SLAStatus";
import { FeatureFlagTable } from "../components/framework/FeatureFlagTable";
import { PlanUsage } from "../components/framework/PlanUsage";
import { AnnouncementBar } from "../components/marketing/AnnouncementBar";
import { FAQSection } from "../components/marketing/FAQSection";
import { RoadmapList } from "../components/marketing/RoadmapList";
import { InlineStatus } from "../components/feedback/InlineStatus";

export interface TapizDocsPageProps {
  title?: string;
  subtitle?: string;
}

const demoRows = [
  { id: "1", student: "Mila Petrović", status: "Active", score: 94 },
  { id: "2", student: "Vuk Jovanović", status: "Pending", score: 82 },
  { id: "3", student: "Sara Ilić", status: "Blocked", score: 68 },
];

const calendarDays = Array.from({ length: 35 }, (_, index) => ({
  date: index + 1,
  selected: index === 10,
  muted: index > 30,
  events: index === 10 ? ["Exam review", "Parent sync"] : index === 15 ? ["Quiz"] : undefined,
}));

function DemoSection({ id, title, description, children }: { id: string; title: string; description: string; children: ReactNode }) {
  return (
    <section id={id} className="scroll-mt-20 border-t border-[var(--tapiz-border-subtle)] py-12">
      <div className="mb-6 flex flex-col gap-2 md:flex-row md:items-end md:justify-between">
        <div>
          <div className="kicker">{id}</div>
          <h2 className="mt-2 text-3xl font-semibold tracking-[-0.05em] text-[var(--tapiz-text-primary)]">{title}</h2>
          <p className="mt-2 max-w-2xl text-sm leading-6 text-[var(--tapiz-text-muted)]">{description}</p>
        </div>
        <a href="#top" className="font-mono text-xs uppercase tracking-[0.16em] text-[var(--tapiz-accent)]">Back to top</a>
      </div>
      {children}
    </section>
  );
}

export function TapizDocsPage({ title = "Tapiz UI Framework", subtitle = "A brutal-enterprise React component system with tokens, primitives, patterns, and ready-made application blocks." }: TapizDocsPageProps) {
  return (
    <main id="top" className="tapiz-enterprise-shell min-h-screen tapiz-noise-bg">
      <TopNav
        brand={<span className="font-display text-lg font-semibold tracking-[-0.04em]">Tapiz UI</span>}
        links={[
          { label: "Foundations", href: "#foundations" },
          { label: "Forms", href: "#forms" },
          { label: "Data", href: "#data" },
          { label: "Framework", href: "#framework" },
          { label: "Advanced", href: "#advanced" },
          { label: "Marketing", href: "#marketing" },
        ]}
        actions={<Button size="sm" variant="brutal">Install</Button>}
      />

      <HeroFrame
        eyebrow="Design system / React framework"
        title={title}
        description={subtitle}
        actions={<><Button variant="primary">Start building</Button><Button variant="secondary">View tokens</Button></>}
        meta="Light/dark safe · token driven · no app-specific dependencies"
        visual={
          <MockupFrame title="Component registry">
            <StatGrid >
              <MetricCard label="Components" value="80+" trend="expanded" trendTone="positive" />
              <MetricCard label="Themes" value="2" trend="light/dark" />
              <MetricCard label="Patterns" value="12" trend="framework" trendTone="warning" />
            </StatGrid>
            <div className="mt-4"><Sparkline values={[18, 24, 21, 32, 44, 39, 58]} width={420} height={56} /></div>
          </MockupFrame>
        }
      />

      <Container size="xl" className="pb-16">
        <Surface variant="brutal" padding="md" className="mb-8">
          <Cluster justify="between" align="center">
            <Breadcrumbs items={[{ label: "Docs", href: "#top" }, { label: "Components" }]} />
            <Cluster gap="sm"><Kbd>⌘</Kbd><Kbd>K</Kbd><span className="text-sm text-[var(--tapiz-text-muted)]">Command-first framework UX</span></Cluster>
          </Cluster>
        </Surface>

        <DemoSection id="foundations" title="Foundations" description="Core surfaces, cards, badges, layout helpers, empty states, skeletons and typography primitives.">
          <ResponsiveGrid min="16rem">
            <Card variant="surface"><div className="kicker">surface</div><p className="mt-2 text-sm text-[var(--tapiz-text-muted)]">Default card treatment.</p></Card>
            <Card variant="raised"><div className="kicker">raised</div><p className="mt-2 text-sm text-[var(--tapiz-text-muted)]">Elevated enterprise panel.</p></Card>
            <Card variant="brutal"><div className="kicker">brutal</div><p className="mt-2 text-sm text-[var(--tapiz-text-muted)]">Hard border + hard shadow.</p></Card>
            <Card variant="glass"><div className="kicker">glass</div><p className="mt-2 text-sm text-[var(--tapiz-text-muted)]">Backdrop style surface.</p></Card>
          </ResponsiveGrid>
          <Divider label="status tokens" className="my-8" />
          <Cluster>
            <Badge>Default</Badge><Badge variant="success">Success</Badge><Badge variant="warning">Warning</Badge><Badge variant="danger">Danger</Badge><Badge variant="info">Info</Badge>
            <StatusBadge label="Active" variant="active" /><StatusBadge label="Pending" variant="pending" /><StatusBadge label="Inactive" variant="inactive" />
          </Cluster>
          <ResponsiveGrid min="20rem" className="mt-8">
            <EmptyState title="No records" description="Use empty states instead of blank panels." />
            <SectionCard title="Skeleton loading" description="Use while data is loading."><Stack><Skeleton className="h-4 w-3/4" /><Skeleton className="h-4 w-1/2" /><Skeleton className="h-20 w-full" /></Stack></SectionCard>
            <KeyValueList density="compact" items={[{ keyLabel: "Package", value: "@tapizlabs/ui" }, { keyLabel: "Mode", value: "Framework" }, { keyLabel: "Theme", value: "Token-first" }]} />
          </ResponsiveGrid>
        </DemoSection>

        <DemoSection id="forms" title="Forms" description="Controlled-ready field primitives for enterprise CRUD, settings, onboarding and import flows.">
          <ResponsiveGrid min="20rem">
            <SectionCard title="Fields">
              <Stack>
                <FormField label="Workspace name" hint="Shown in the app shell"><Input placeholder="Tapiz Academy" /></FormField>
                <FormField label="Role"><Select><option>Teacher</option><option>Admin</option></Select></FormField>
                <FormField label="Notes"><Textarea placeholder="Internal note" /></FormField>
              </Stack>
            </SectionCard>
            <SectionCard title="Advanced inputs">
              <Stack>
                <InputGroup prefix="https://" suffix=".tapiz.app"><Input placeholder="school" /></InputGroup>
                <PasswordInput placeholder="Password" />
                <Slider label="Automation level" valueLabel="72%" defaultValue={72} />
                <ToggleGroup value="monthly" options={[{ label: "Monthly", value: "monthly" }, { label: "Yearly", value: "yearly" }]} />
                <Switch label="Enable notifications" checked />
                <Combobox placeholder="Choose workspace" options={[{ value: "academy", label: "Academy" }, { value: "enterprise", label: "Enterprise" }]} />
                <DateRangePicker />
                <ColorSwatchPicker value="accent" options={[{ value: "accent", label: "Accent", color: "var(--tapiz-accent)" }, { value: "success", label: "Success", color: "var(--tapiz-success)" }, { value: "warning", label: "Warning", color: "var(--tapiz-warning)" }]} />
                <RatingInput value={4} />
              </Stack>
            </SectionCard>
            <SectionCard title="Upload and text area">
              <Stack>
                <FileDropzone title="Import CSV" description="Drag attendance data or click to browse." />
                <TextareaCounter maxLength={120} value="Reusable character-count textarea for messages and descriptions." readOnly />
              </Stack>
            </SectionCard>
          </ResponsiveGrid>
        </DemoSection>

        <DemoSection id="data" title="Data display" description="Tables, charts, progress, metrics, filters and visual summaries for dense products.">
          <DataToolbar
            title="Students"
            description="Search, filter and operate on tabular data."
            search={<SearchInput placeholder="Search students" value="" onChange={() => undefined} />}
            filters={<><FilterChip active>Active</FilterChip><FilterChip>Grade 8</FilterChip><FilterChip>High score</FilterChip></>}
            actions={<Button size="sm">Export</Button>}
            className="mb-4"
          />
          <DataTable
            variant="enterprise"
            data={demoRows}
            rowKey={(row) => row.id}
            columns={[
              { id: "student", header: "Student", cell: (row) => row.student, sortAccessor: (row) => row.student },
              { id: "status", header: "Status", cell: (row) => <StatusBadge label={row.status} variant={row.status === "Active" ? "success" : row.status === "Pending" ? "pending" : "danger"} /> },
              { id: "score", header: "Score", cell: (row) => `${row.score}%`, align: "right", sortAccessor: (row) => row.score },
            ]}
          />
          <ResponsiveGrid min="19rem" className="mt-8">
            <MetricCard label="Attendance" value="96.4%" trend="+4.2%" trendTone="positive" description="vs last month" />
            <SectionCard title="Bar list"><BarList items={[{ label: "Quiz", value: 42 }, { label: "Attendance", value: 68 }, { label: "Assignments", value: 54 }]} /></SectionCard>
            <SectionCard title="Donut"><DonutMetric value={82} label="Completion" caption="Average across active classes" /></SectionCard>
            <SectionCard title="Progress"><Progress value={64} label="Migration" /></SectionCard>
            <SectionCard title="Score ring"><ScoreRing value={88} label="quality" /></SectionCard>
            <SectionCard title="Heatmap"><HeatmapGrid cells={Array.from({ length: 35 }, (_, index) => ({ value: (index * 7) % 18, title: `Day ${index + 1}` }))} /></SectionCard>
            <SectionCard title="Funnel"><FunnelChart steps={[{ label: "Visited", value: 1200 }, { label: "Started", value: 820 }, { label: "Completed", value: 540 }]} /></SectionCard>
            <SectionCard title="Comparison"><ComparisonMeter leftLabel="Manual" rightLabel="Automated" value={72} /></SectionCard>
          </ResponsiveGrid>
        </DemoSection>

        <DemoSection id="navigation" title="Navigation and disclosure" description="Application shell, nav bars, tabs, accordion, stepper and overlays.">
          <ResponsiveGrid min="23rem">
            <SectionCard title="App shell preview">
              <AppShell
                sidebar={<SidebarNav groups={[{ label: "Workspace", items: [{ label: "Dashboard", active: true }, { label: "Students" }, { label: "Reports" }] }]} />}
                topbar={<TopNav brand="Tapiz" links={[{ label: "Docs", href: "#top" }]} />}
              >
                <div className="p-4 text-sm text-[var(--tapiz-text-muted)]">Shell content slot</div>
              </AppShell>
            </SectionCard>
            <SectionCard title="Tabs and accordion">
              <Tabs activeId="usage" variant="boxed" items={[{ id: "usage", label: "Usage", content: "Use tabs for related panels." }, { id: "api", label: "API", content: "Prop-driven and typed." }]} />
              <Accordion className="mt-4" openIds={["one"]} items={[{ id: "one", title: "Token-first", content: "No raw hex colors in application code." }, { id: "two", title: "Accessible", content: "Keyboard-friendly primitives." }]} />
            </SectionCard>
            <SectionCard title="Stepper / overlay states">
              <Stepper steps={[{ id: "create", label: "Create", status: "complete" }, { id: "configure", label: "Configure", status: "current" }, { id: "launch", label: "Launch", status: "upcoming" }]} />
              <Cluster className="mt-4"><Popover trigger={<Button size="sm">Popover</Button>}>Contextual content</Popover><Drawer open={false} title="Drawer">Drawer content</Drawer></Cluster>
              <CommandMenu open={false} groups={[{ label: "Actions", items: [{ id: "open-dashboard", label: "Open dashboard" }, { id: "create-class", label: "Create class" }] }]} />
            </SectionCard>
          </ResponsiveGrid>
        </DemoSection>

        <DemoSection id="feedback" title="Feedback" description="Alerts, callouts, notifications, health states and loading overlays.">
          <ResponsiveGrid min="22rem">
            <Alert tone="info" title="Info alert">Use for important inline messages.</Alert>
            <Callout tone="warning" title="Migration warning">Review token usage before publishing.</Callout>
            <SectionCard title="Notifications"><NotificationList items={[{ id: "1", title: "New import completed", description: "1,204 rows processed.", time: "2m", unread: true }, { id: "2", title: "Report ready", time: "1h" }]} /></SectionCard>
            <SectionCard title="Health"><Stack><HealthIndicator tone="operational" detail="99.99%" /><HealthIndicator tone="degraded" detail="API latency" /><HealthIndicator tone="outage" detail="1 service" /><InlineStatus tone="success" pulse>Realtime sync active</InlineStatus></Stack></SectionCard>
            <LoadingOverlay visible label="Syncing"><div className="h-28 border border-[var(--tapiz-border-subtle)] bg-[var(--tapiz-bg-surface-muted)]" /></LoadingOverlay>
          </ResponsiveGrid>
        </DemoSection>

        <DemoSection id="framework" title="Framework patterns" description="Higher-level enterprise blocks for admin panels, permissions, integrations, calendars and workflows.">
          <ResponsiveGrid min="23rem">
            <ResourceCard title="Classroom OS" eyebrow="resource" description="Reusable resource card for project, course, class or team entities." status="Live" meta="Updated today" />
            <IntegrationCard name="Google Classroom" description="Sync rosters and assignments." status="connected" lastSync="Synced 12m ago" />
            <AuditLog items={[{ actor: "Danijel", action: "updated permissions", timestamp: "09:42" }, { actor: "System", action: "synced attendance", timestamp: "09:30" }]} />
          </ResponsiveGrid>
          <SplitPane className="mt-8" primary={<KanbanBoard columns={[{ id: "todo", title: "Todo", items: [{ id: "a", title: "Design docs page", tone: "accent" }] }, { id: "doing", title: "Doing", items: [{ id: "b", title: "Build components", tone: "warning" }] }, { id: "done", title: "Done", items: [{ id: "c", title: "Tokens", tone: "success" }] }]} />} secondary={<AccessMatrix roles={[{ key: "admin", label: "Admin" }, { key: "teacher", label: "Teacher" }]} permissions={[{ key: "users", label: "Manage users", roles: { admin: true, teacher: false } }, { key: "classes", label: "Manage classes", roles: { admin: true, teacher: true } }]} />} />
          <CalendarGrid className="mt-8" days={calendarDays} />
        </DemoSection>


        <DemoSection id="advanced" title="Advanced framework blocks" description="More product-grade patterns for operations, approvals, feature management, usage, rails and sticky controls.">
          <StickyBar className="mb-6"><Cluster justify="between"><InlineStatus tone="info">Previewing max component set</InlineStatus><Button size="sm" variant="secondary">Copy layout</Button></Cluster></StickyBar>
          <SplitPane
            primary={<Stack>
              <ApprovalQueue items={[{ title: "Publish new grading rubric", requester: "Mila", priority: "high", description: "Requires admin approval before rollout." }, { title: "Invite external mentor", requester: "Vuk", priority: "medium" }]} />
              <FeatureFlagTable flags={[{ key: "ai.quiz", name: "AI quiz generator", description: "Enable assisted quiz creation.", enabled: true, rollout: "80%" }, { key: "reports.v2", name: "Reports v2", description: "New analytics dashboard.", enabled: false, rollout: "Beta" }]} />
            </Stack>}
            secondary={<PageRail title="Docs rail" items={[{ label: "Forms", href: "#forms", active: true, meta: "12" }, { label: "Data", href: "#data", meta: "9" }, { label: "Framework", href: "#framework", meta: "18" }]} />}
          />
          <ResponsiveGrid min="22rem" className="mt-8">
            <PlanUsage items={[{ label: "Seats", used: 128, limit: 200 }, { label: "Storage", used: 64, limit: 100 }, { label: "Automations", used: 18, limit: 25 }]} />
            <SectionCard title="SLA"><Stack><SLAStatus label="API uptime" value={99} /><SLAStatus label="Queue latency" value={91} target={95} /></Stack></SectionCard>
            <SectionCard title="Inbox"><InboxList items={[{ title: "Import completed", sender: "System", snippet: "Attendance import finished with 0 errors.", time: "2m", unread: true, tag: "Ops" }, { title: "Teacher request", sender: "Ana", snippet: "Needs access to Grade 8 workspace.", time: "1h" }]} /></SectionCard>
            <SectionCard title="Activity"><ActivityFeed items={[{ actor: "Danijel", action: "enabled Reports v2", time: "now" }, { actor: "System", action: "rotated API keys", time: "1h" }]} /></SectionCard>
          </ResponsiveGrid>
          <MasonryGrid columns={3} className="mt-8">
            {["Token contract", "Component variants", "Agent docs", "A11y states", "Dark mode", "Framework patterns"].map((item) => <Card key={item} variant="brutal" className="mb-5 break-inside-avoid"><div className="kicker">module</div><h3 className="mt-2 font-semibold">{item}</h3></Card>)}
          </MasonryGrid>
        </DemoSection>

        <DemoSection id="marketing" title="Marketing blocks" description="Landing-page building blocks for SaaS, education and enterprise presentation pages.">
          <AnnouncementBar action={<Button size="sm" variant="brutal">Read changelog</Button>}>New Tapiz UI max component pack is available.</AnnouncementBar>
          <FeatureGrid >
            <FeatureCard title="Token architecture" description="Centralized semantic tokens for consistent light/dark UI." />
            <FeatureCard title="Framework blocks" description="Move faster with app shell, tables, forms and overlays." />
            <FeatureCard title="Brutal enterprise" description="Strong borders, sharp rhythm and professional hierarchy." />
          </FeatureGrid>
          <StatsBand className="mt-8" items={[{ value: "80+", label: "Components" }, { value: "2", label: "Themes" }, { value: "0", label: "App deps" }]} />
          <LogoCloud className="mt-8" title="Works for product surfaces" items={[{ name: "Dashboard" }, { name: "Admin" }, { name: "Landing" }, { name: "Docs" }, { name: "Forms" }, { name: "Data" }]} />
          <ResponsiveGrid min="20rem" className="mt-8">
            <TestimonialCard quote="Tapiz UI gives the product an instant enterprise backbone." author="Design Lead" role="Tapiz Labs" />
            <PricingCard name="Framework" price="€0" highlighted features={["Token system", "Components", "Docs page"]} />
            <ComparisonTable includedHeader="Tapiz" alternativeHeader="Ad-hoc UI" rows={[{ feature: "Light/dark", included: "Yes", alternative: "Manual" }, { feature: "Agent docs", included: "Included", alternative: "No" }]} />
          </ResponsiveGrid>
          <RoadmapList className="mt-8" items={[{ quarter: "Q1", title: "Core framework", status: "Done", description: "Shell, nav, forms and table primitives." }, { quarter: "Q2", title: "Analytics blocks", status: "Now", description: "Charts, status and operational views." }, { quarter: "Q3", title: "AI workflows", status: "Next", description: "Agent-ready docs and generated screens." }]} />
          <FAQSection className="mt-8" description="Common framework usage questions." items={[{ question: "Can this be used outside Tapiz?", answer: "Yes. Components are generic and token-driven." }, { question: "Does it require app router?", answer: "No. The package avoids app-specific dependencies." }]} />
          <CTASection className="mt-8" eyebrow="Ready" title="Build with Tapiz UI" description="Copy this page into your docs app or export TapizDocsPage from the package." actions={<Button variant="primary">Use framework</Button>} />
        </DemoSection>

        <DemoSection id="code" title="Usage snippets" description="Copyable examples for agents and developers.">
          <CodeBlock language="tsx">{`import { TapizDocsPage } from "@tapizlabs/ui";\nimport "@tapizlabs/ui/theme.css";\n\nexport default function Docs() {\n  return <TapizDocsPage />;\n}`}</CodeBlock>
        </DemoSection>
      </Container>
    </main>
  );
}
