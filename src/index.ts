export * from "./components/icons/index";
export { Button } from "./components/forms/Button";
export type { ButtonProps } from "./components/forms/Button";
export { Input } from "./components/forms/Input";
export type { InputProps } from "./components/forms/Input";
export { Select } from "./components/forms/Select";
export type { SelectProps } from "./components/forms/Select";
export { Textarea } from "./components/forms/Textarea";
export type { TextareaProps } from "./components/forms/Textarea";
export { FieldLabel } from "./components/forms/FieldLabel";
export type { FieldLabelProps } from "./components/forms/FieldLabel";
export { FieldHint } from "./components/forms/FieldHint";
export type { FieldHintProps } from "./components/forms/FieldHint";
export { Checkbox } from "./components/forms/Checkbox";
export type { CheckboxProps } from "./components/forms/Checkbox";
export { RadioButton } from "./components/forms/RadioButton";
export type { RadioButtonProps } from "./components/forms/RadioButton";
export { Spinner } from "./components/feedback/Spinner";
export type { SpinnerProps } from "./components/feedback/Spinner";
export { PageSpinner } from "./components/feedback/PageSpinner";
export { Toast } from "./components/feedback/Toast";
export type { ToastProps } from "./components/feedback/Toast";
export { ToastProvider, useToast } from "./components/feedback/ToastProvider";
export type { ToastProviderProps, ToastState } from "./components/feedback/ToastProvider";
export { FormError } from "./components/feedback/FormError";
export type { FormErrorProps } from "./components/feedback/FormError";
export {
  ErrorBoundary,
  DefaultErrorFallback,
  GridBg,
  Spotlight,
} from "./components/feedback/ErrorBoundary";
export { BaseModal } from "./components/modals/BaseModal";
export type { BaseModalProps } from "./components/modals/BaseModal";
export { ConfirmDialog } from "./components/modals/ConfirmDialog";
export type { ConfirmDialogProps } from "./components/modals/ConfirmDialog";
export { Tooltip } from "./components/shared/Tooltip";
export type { TooltipProps } from "./components/shared/Tooltip";
export { Card, CardBody, CardHeader } from "./components/shared/Card";
export type { CardProps, CardSectionProps, CardPadding, CardVariant } from "./components/shared/Card";
export { Skeleton } from "./components/shared/Skeleton";
export type { SkeletonProps } from "./components/shared/Skeleton";
export {
  SkeletonBanner,
  SkeletonCard,
  SkeletonKpiCard,
  SkeletonPageHeader,
  SkeletonTable,
} from "./components/shared/SkeletonBlocks";
export { Badge } from "./components/shared/Badge";
export { EmptyState, ErrorState } from "./components/shared/EmptyState";
export type { EmptyStateProps } from "./components/shared/EmptyState";
export { InfoBanner } from "./components/shared/InfoBanner";
export type { InfoBannerProps } from "./components/shared/InfoBanner";
export { PageHeader } from "./components/shared/PageHeader";
export type { PageHeaderProps } from "./components/shared/PageHeader";
export { MetricCard } from "./components/shared/MetricCard";
export type { MetricCardProps, MetricTrendTone } from "./components/shared/MetricCard";
export { StatGrid } from "./components/shared/StatGrid";
export type { StatGridProps } from "./components/shared/StatGrid";
export { SectionCard } from "./components/shared/SectionCard";
export type { SectionCardProps } from "./components/shared/SectionCard";
export { SearchInput } from "./components/shared/SearchInput";
export type { SearchInputProps } from "./components/shared/SearchInput";
export { Pagination } from "./components/shared/Pagination";
export type { PaginationLabels, PaginationProps } from "./components/shared/Pagination";
export { SectionTitle } from "./components/shared/SectionTitle";
export type { SectionTitleProps } from "./components/shared/SectionTitle";
export { StatusBadge } from "./components/shared/StatusBadge";
export type { StatusBadgeProps, StatusBadgeVariant } from "./components/shared/StatusBadge";
export { ActionMenu } from "./components/shared/ActionMenu";
export type { ActionMenuItem, ActionMenuProps } from "./components/shared/ActionMenu";
export { DataTable } from "./components/table/DataTable";
export type { DataTableDensity, DataTableProps, DataTableVariant } from "./components/table/DataTable";
export type {
  Column,
  ColumnAlign,
  ServerSort,
  SortDirection,
  SortState,
} from "./components/table/types";

export { MarketingShell } from "./components/marketing/MarketingShell";
export type { MarketingShellProps } from "./components/marketing/MarketingShell";
export { HeroFrame } from "./components/marketing/HeroFrame";
export type { HeroFrameProps } from "./components/marketing/HeroFrame";
export { FeatureCard } from "./components/marketing/FeatureCard";
export type { FeatureCardProps } from "./components/marketing/FeatureCard";
export { FeatureGrid } from "./components/marketing/FeatureGrid";
export type { FeatureGridProps } from "./components/marketing/FeatureGrid";
export { CTASection } from "./components/marketing/CTASection";
export type { CTASectionProps } from "./components/marketing/CTASection";
export { MockupFrame } from "./components/marketing/MockupFrame";
export type { MockupFrameProps } from "./components/marketing/MockupFrame";
export { ComparisonTable } from "./components/marketing/ComparisonTable";
export type { ComparisonTableProps, ComparisonTableRow } from "./components/marketing/ComparisonTable";


// Framework layout
export { AppShell } from "./components/layout/AppShell";
export type { AppShellProps } from "./components/layout/AppShell";
export { SplitPane } from "./components/layout/SplitPane";
export type { SplitPaneProps } from "./components/layout/SplitPane";
export { Stack } from "./components/layout/Stack";
export type { StackProps } from "./components/layout/Stack";
export { Cluster } from "./components/layout/Cluster";
export type { ClusterProps } from "./components/layout/Cluster";

// Framework navigation
export { Breadcrumbs } from "./components/navigation/Breadcrumbs";
export type { BreadcrumbItem, BreadcrumbsProps } from "./components/navigation/Breadcrumbs";
export { SidebarNav } from "./components/navigation/SidebarNav";
export type { SidebarNavGroup, SidebarNavItem, SidebarNavProps } from "./components/navigation/SidebarNav";
export { TopNav } from "./components/navigation/TopNav";
export type { TopNavLink, TopNavProps } from "./components/navigation/TopNav";

// Disclosure and workflow
export { Tabs } from "./components/disclosure/Tabs";
export type { TabItem, TabsProps } from "./components/disclosure/Tabs";
export { Accordion } from "./components/disclosure/Accordion";
export type { AccordionItem, AccordionProps } from "./components/disclosure/Accordion";
export { Stepper } from "./components/disclosure/Stepper";
export type { StepItem, StepperProps } from "./components/disclosure/Stepper";

// Overlays
export { Drawer } from "./components/overlays/Drawer";
export type { DrawerProps } from "./components/overlays/Drawer";
export { Popover } from "./components/overlays/Popover";
export type { PopoverProps } from "./components/overlays/Popover";
export { CommandMenu } from "./components/overlays/CommandMenu";
export type { CommandGroup, CommandItem, CommandMenuProps } from "./components/overlays/CommandMenu";

// Extended forms and feedback
export { FormField } from "./components/forms/FormField";
export type { FormFieldProps } from "./components/forms/FormField";
export { Switch } from "./components/forms/Switch";
export type { SwitchProps } from "./components/forms/Switch";
export { ToggleGroup } from "./components/forms/ToggleGroup";
export type { ToggleGroupProps, ToggleOption } from "./components/forms/ToggleGroup";
export { InputGroup } from "./components/forms/InputGroup";
export type { InputGroupProps } from "./components/forms/InputGroup";
export { Alert } from "./components/feedback/Alert";
export type { AlertProps, AlertTone } from "./components/feedback/Alert";
export { Progress } from "./components/feedback/Progress";
export type { ProgressProps } from "./components/feedback/Progress";

// Framework shared primitives
export { Avatar } from "./components/shared/Avatar";
export type { AvatarProps } from "./components/shared/Avatar";
export { Kbd } from "./components/shared/Kbd";
export type { KbdProps } from "./components/shared/Kbd";
export { Timeline } from "./components/shared/Timeline";
export type { TimelineItem, TimelineProps } from "./components/shared/Timeline";
export { KeyValueList } from "./components/shared/KeyValueList";
export type { KeyValueItem, KeyValueListProps } from "./components/shared/KeyValueList";
export { CodeBlock } from "./components/shared/CodeBlock";
export type { CodeBlockProps } from "./components/shared/CodeBlock";

// Marketing expansion
export { LogoCloud } from "./components/marketing/LogoCloud";
export type { LogoCloudItem, LogoCloudProps } from "./components/marketing/LogoCloud";
export { TestimonialCard } from "./components/marketing/TestimonialCard";
export type { TestimonialCardProps } from "./components/marketing/TestimonialCard";
export { PricingCard } from "./components/marketing/PricingCard";
export type { PricingCardProps } from "./components/marketing/PricingCard";
export { StatsBand } from "./components/marketing/StatsBand";
export type { StatsBandItem, StatsBandProps } from "./components/marketing/StatsBand";

export { tapizFrameworkPresets } from "./presets/framework";
export type { TapizFrameworkPreset, TapizPresetDefinition } from "./presets/framework";

// Framework expansion: layout helpers
export { Container } from "./components/layout/Container";
export type { ContainerProps, ContainerSize } from "./components/layout/Container";
export { Surface } from "./components/layout/Surface";
export type { SurfacePadding, SurfaceProps, SurfaceVariant } from "./components/layout/Surface";
export { Divider } from "./components/layout/Divider";
export type { DividerProps } from "./components/layout/Divider";
export { ResponsiveGrid } from "./components/layout/ResponsiveGrid";
export type { ResponsiveGridProps } from "./components/layout/ResponsiveGrid";

// Framework expansion: data display
export { Sparkline } from "./components/data-display/Sparkline";
export type { SparklineProps } from "./components/data-display/Sparkline";
export { BarList } from "./components/data-display/BarList";
export type { BarListItem, BarListProps } from "./components/data-display/BarList";
export { DonutMetric } from "./components/data-display/DonutMetric";
export type { DonutMetricProps } from "./components/data-display/DonutMetric";
export { FilterChip } from "./components/data-display/FilterChip";
export type { FilterChipProps } from "./components/data-display/FilterChip";
export { DataToolbar } from "./components/data-display/DataToolbar";
export type { DataToolbarProps } from "./components/data-display/DataToolbar";

// Framework expansion: enterprise application blocks
export { ResourceCard } from "./components/framework/ResourceCard";
export type { ResourceCardProps } from "./components/framework/ResourceCard";
export { IntegrationCard } from "./components/framework/IntegrationCard";
export type { IntegrationCardProps, IntegrationStatus } from "./components/framework/IntegrationCard";
export { HealthIndicator } from "./components/framework/HealthIndicator";
export type { HealthIndicatorProps, HealthTone } from "./components/framework/HealthIndicator";
export { AuditLog } from "./components/framework/AuditLog";
export type { AuditLogItem, AuditLogProps } from "./components/framework/AuditLog";
export { KanbanBoard } from "./components/framework/KanbanBoard";
export type { KanbanBoardProps, KanbanColumn, KanbanCardItem } from "./components/framework/KanbanBoard";
export { AccessMatrix } from "./components/framework/AccessMatrix";
export type { AccessMatrixPermission, AccessMatrixProps, AccessMatrixRole } from "./components/framework/AccessMatrix";
export { CalendarGrid } from "./components/framework/CalendarGrid";
export type { CalendarGridDay, CalendarGridProps } from "./components/framework/CalendarGrid";

// Framework expansion: advanced forms and feedback
export { Slider } from "./components/forms/Slider";
export type { SliderProps } from "./components/forms/Slider";
export { FileDropzone } from "./components/forms/FileDropzone";
export type { FileDropzoneProps } from "./components/forms/FileDropzone";
export { PasswordInput } from "./components/forms/PasswordInput";
export type { PasswordInputProps } from "./components/forms/PasswordInput";
export { TextareaCounter } from "./components/forms/TextareaCounter";
export type { TextareaCounterProps } from "./components/forms/TextareaCounter";
export { Callout } from "./components/feedback/Callout";
export type { CalloutProps, CalloutTone } from "./components/feedback/Callout";
export { LoadingOverlay } from "./components/feedback/LoadingOverlay";
export type { LoadingOverlayProps } from "./components/feedback/LoadingOverlay";
export { NotificationList } from "./components/feedback/NotificationList";
export type { NotificationItem, NotificationListProps } from "./components/feedback/NotificationList";

// Framework max expansion: layout utilities
export { MasonryGrid } from "./components/layout/MasonryGrid";
export type { MasonryGridProps } from "./components/layout/MasonryGrid";
export { PageRail } from "./components/layout/PageRail";
export type { PageRailItem, PageRailProps } from "./components/layout/PageRail";
export { StickyBar } from "./components/layout/StickyBar";
export type { StickyBarProps } from "./components/layout/StickyBar";

// Framework max expansion: advanced inputs
export { Combobox } from "./components/forms/Combobox";
export type { ComboboxOption, ComboboxProps } from "./components/forms/Combobox";
export { DateRangePicker } from "./components/forms/DateRangePicker";
export type { DateRangePickerProps } from "./components/forms/DateRangePicker";
export { ColorSwatchPicker } from "./components/forms/ColorSwatchPicker";
export type { ColorSwatchOption, ColorSwatchPickerProps } from "./components/forms/ColorSwatchPicker";
export { RatingInput } from "./components/forms/RatingInput";
export type { RatingInputProps } from "./components/forms/RatingInput";

// Framework max expansion: analytics display
export { ScoreRing } from "./components/data-display/ScoreRing";
export type { ScoreRingProps } from "./components/data-display/ScoreRing";
export { HeatmapGrid } from "./components/data-display/HeatmapGrid";
export type { HeatmapCell, HeatmapGridProps } from "./components/data-display/HeatmapGrid";
export { FunnelChart } from "./components/data-display/FunnelChart";
export type { FunnelChartProps, FunnelStep } from "./components/data-display/FunnelChart";
export { ComparisonMeter } from "./components/data-display/ComparisonMeter";
export type { ComparisonMeterProps } from "./components/data-display/ComparisonMeter";

// Framework max expansion: enterprise blocks
export { ActivityFeed } from "./components/framework/ActivityFeed";
export type { ActivityFeedItem, ActivityFeedProps } from "./components/framework/ActivityFeed";
export { InboxList } from "./components/framework/InboxList";
export type { InboxItem, InboxListProps } from "./components/framework/InboxList";
export { ApprovalQueue } from "./components/framework/ApprovalQueue";
export type { ApprovalItem, ApprovalQueueProps } from "./components/framework/ApprovalQueue";
export { SLAStatus } from "./components/framework/SLAStatus";
export type { SLAStatusProps } from "./components/framework/SLAStatus";
export { FeatureFlagTable } from "./components/framework/FeatureFlagTable";
export type { FeatureFlag, FeatureFlagTableProps } from "./components/framework/FeatureFlagTable";
export { PlanUsage } from "./components/framework/PlanUsage";
export type { PlanUsageItem, PlanUsageProps } from "./components/framework/PlanUsage";

// Framework max expansion: marketing and feedback
export { AnnouncementBar } from "./components/marketing/AnnouncementBar";
export type { AnnouncementBarProps } from "./components/marketing/AnnouncementBar";
export { FAQSection } from "./components/marketing/FAQSection";
export type { FAQItem, FAQSectionProps } from "./components/marketing/FAQSection";
export { RoadmapList } from "./components/marketing/RoadmapList";
export type { RoadmapItem, RoadmapListProps } from "./components/marketing/RoadmapList";
export { InlineStatus } from "./components/feedback/InlineStatus";
export type { InlineStatusProps, InlineStatusTone } from "./components/feedback/InlineStatus";
export type { BaseProps } from "./types";
