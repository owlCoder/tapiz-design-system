export interface SpinnerProps {
  size?: string;
  color?: string;
}

export const Spinner = ({ size = "w-3 h-3", color = "text-primary-700" }: SpinnerProps) => (
  <svg
    className={`inline-block ${size} animate-spin ${color}`}
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <circle
      cx="12"
      cy="12"
      r="10"
      stroke="currentColor"
      strokeWidth="3"
      strokeLinecap="round"
      strokeDasharray="31.4 31.4"
      strokeDashoffset="15.7"
    />
  </svg>
);
