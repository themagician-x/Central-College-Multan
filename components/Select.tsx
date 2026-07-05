"use client";

import { useEffect, useId, useRef, useState } from "react";

/**
 * Accessible custom dropdown styled in the Central College palette.
 * Native <select> popups can't be themed (the OS draws them), so we render
 * our own listbox. A hidden input keeps the value form-submittable.
 */
export default function Select({
  name,
  options,
  placeholder = "Choose…",
}: {
  name: string;
  options: string[];
  placeholder?: string;
}) {
  const [open, setOpen] = useState(false);
  const [value, setValue] = useState("");
  const [active, setActive] = useState(0); // keyboard-highlighted index
  const rootRef = useRef<HTMLDivElement>(null);
  const listRef = useRef<HTMLUListElement>(null);
  const listId = useId();

  // close on outside click
  useEffect(() => {
    if (!open) return;
    const onDown = (e: MouseEvent) => {
      if (rootRef.current && !rootRef.current.contains(e.target as Node)) {
        setOpen(false);
      }
    };
    document.addEventListener("mousedown", onDown);
    return () => document.removeEventListener("mousedown", onDown);
  }, [open]);

  // keep the highlighted option in view
  useEffect(() => {
    if (!open || !listRef.current) return;
    const el = listRef.current.children[active] as HTMLElement | undefined;
    el?.scrollIntoView({ block: "nearest" });
  }, [active, open]);

  const choose = (i: number) => {
    setValue(options[i]);
    setActive(i);
    setOpen(false);
  };

  const onKeyDown = (e: React.KeyboardEvent) => {
    switch (e.key) {
      case "ArrowDown":
        e.preventDefault();
        if (!open) setOpen(true);
        else setActive((a) => Math.min(a + 1, options.length - 1));
        break;
      case "ArrowUp":
        e.preventDefault();
        if (open) setActive((a) => Math.max(a - 1, 0));
        break;
      case "Home":
        if (open) { e.preventDefault(); setActive(0); }
        break;
      case "End":
        if (open) { e.preventDefault(); setActive(options.length - 1); }
        break;
      case "Enter":
      case " ":
        e.preventDefault();
        if (open) choose(active);
        else setOpen(true);
        break;
      case "Escape":
        setOpen(false);
        break;
      case "Tab":
        setOpen(false);
        break;
    }
  };

  return (
    <div ref={rootRef} className="relative">
      <input type="hidden" name={name} value={value} />
      <button
        type="button"
        role="combobox"
        aria-haspopup="listbox"
        aria-expanded={open}
        aria-controls={listId}
        onClick={() => setOpen((o) => !o)}
        onKeyDown={onKeyDown}
        className={`flex w-full items-center justify-between gap-3 rounded-xl border bg-cream px-4 py-3 text-left text-sm outline-none transition-colors focus:ring-2 focus:ring-gold-500/25 ${
          open ? "border-gold-500 ring-2 ring-gold-500/25" : "border-mist-deep"
        } ${value ? "text-ink" : "text-ink-mute/70"}`}
      >
        <span className="truncate">{value || placeholder}</span>
        <svg
          viewBox="0 0 24 24"
          className={`h-4 w-4 flex-none text-gold-600 transition-transform ${open ? "rotate-180" : ""}`}
          fill="none"
          stroke="currentColor"
          strokeWidth="2.2"
          strokeLinecap="round"
          strokeLinejoin="round"
          aria-hidden="true"
        >
          <path d="m6 9 6 6 6-6" />
        </svg>
      </button>

      {open && (
        <ul
          ref={listRef}
          id={listId}
          role="listbox"
          tabIndex={-1}
          className="absolute z-30 mt-2 max-h-64 w-full overflow-auto rounded-xl border border-mist-deep bg-paper p-1.5 shadow-[0_16px_40px_rgba(5,31,66,0.18)]"
        >
          {options.map((opt, i) => {
            const selected = value === opt;
            const highlighted = active === i;
            return (
              <li
                key={opt}
                role="option"
                aria-selected={selected}
                onMouseEnter={() => setActive(i)}
                onClick={() => choose(i)}
                className={`flex cursor-pointer items-center justify-between gap-2 rounded-lg px-3 py-2.5 text-sm transition-colors ${
                  highlighted
                    ? "bg-navy-900 text-cream"
                    : selected
                      ? "bg-mist text-navy-900"
                      : "text-ink-soft"
                }`}
              >
                <span className={selected ? "font-semibold" : ""}>{opt}</span>
                {selected && (
                  <svg
                    viewBox="0 0 24 24"
                    className={`h-4 w-4 flex-none ${highlighted ? "text-gold-400" : "text-gold-600"}`}
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2.4"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    aria-hidden="true"
                  >
                    <path d="M20 6 9 17l-5-5" />
                  </svg>
                )}
              </li>
            );
          })}
        </ul>
      )}
    </div>
  );
}
