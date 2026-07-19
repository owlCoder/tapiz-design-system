import { useState } from "react";
import type { DragEvent, InputHTMLAttributes, ReactNode } from "react";
import { UploadCloud } from "../icons/index";

export interface FileDropzoneProps extends Omit<InputHTMLAttributes<HTMLInputElement>, "type" | "title" | "onChange" | "size"> {
  title?: ReactNode;
  /** Shown instead of `title` while a file is being dragged over the zone. Defaults to `title` itself if omitted, so callers that don't localize this still get sensible (if static) text instead of a hardcoded English string. */
  dragActiveTitle?: ReactNode;
  description?: ReactNode;
  actionLabel?: ReactNode;
  /** Called with the dropped/selected FileList — fires for both drag&drop and the native picker. */
  onFilesSelected: (files: FileList) => void;
  /** Disables drop/click interaction (e.g. while an upload is already in flight). */
  disabled?: boolean;
  /** `compact` trims padding/icon size for use inside already-boxed panels (e.g. a submission card). Defaults to `default`. */
  dropzoneSize?: "default" | "compact";
}

/** Drag-and-drop capable file dropzone: real `onDrop`/`onDragOver` handling with
 * a visible highlight while a file is dragged over it, plus a fallback click-to-browse
 * (native picker) via the same hidden input. */
export function FileDropzone({
  title = "Drop files here",
  dragActiveTitle,
  description,
  actionLabel = "Browse",
  className = "",
  onFilesSelected,
  disabled = false,
  dropzoneSize = "default",
  ...props
}: FileDropzoneProps) {
  const [isDragOver, setIsDragOver] = useState(false);

  const handleDragOver = (e: DragEvent<HTMLLabelElement>) => {
    e.preventDefault();
    if (disabled) return;
    setIsDragOver(true);
  };

  const handleDragLeave = (e: DragEvent<HTMLLabelElement>) => {
    e.preventDefault();
    setIsDragOver(false);
  };

  const handleDrop = (e: DragEvent<HTMLLabelElement>) => {
    e.preventDefault();
    setIsDragOver(false);
    if (disabled) return;
    if (e.dataTransfer.files.length > 0) onFilesSelected(e.dataTransfer.files);
  };

  return (
    <label
      onDragOver={handleDragOver}
      onDragEnter={handleDragOver}
      onDragLeave={handleDragLeave}
      onDrop={handleDrop}
      className={`block rounded-lg border-2 border-dashed text-center transition-colors duration-150 ${
        dropzoneSize === "compact" ? "p-4" : "p-6"
      } ${
        disabled
          ? "cursor-not-allowed border-border bg-ink-300 opacity-60"
          : isDragOver
            ? "cursor-pointer border-primary-300 bg-primary-300/8"
            : "cursor-pointer border-border-hi bg-ink-300 hover:bg-ink-200"
      } ${className}`}
    >
      <input
        {...props}
        type="file"
        className="sr-only"
        disabled={disabled}
        onChange={(e) => {
          if (e.target.files && e.target.files.length > 0) onFilesSelected(e.target.files);
          e.target.value = "";
        }}
      />
      <UploadCloud size={dropzoneSize === "compact" ? 18 : 22} className="mx-auto mb-1.5 text-txt-4" />
      <span className="block text-sm font-semibold text-txt-1">
        {isDragOver ? (dragActiveTitle ?? title) : title}
      </span>
      {description ? <span className="mt-1 block text-xs text-txt-4">{description}</span> : null}
      <span className="mt-3 inline-flex rounded-sm border border-border-hi px-3 py-1.5 text-xs font-semibold text-primary-300">
        {actionLabel}
      </span>
    </label>
  );
}
