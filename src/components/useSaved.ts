"use client";

import { useCallback, useMemo, useSyncExternalStore } from "react";

const KEY = "soniazari:saved";
const EMPTY: string[] = [];

/**
 * A local "my shortlist" — the customer marks pieces here and shows the list at
 * the counter when they come in. Nothing leaves the browser; there is no order
 * flow on this site by design.
 *
 * Backed by useSyncExternalStore rather than an effect, so it hydrates without
 * a mismatch and stays in sync across tabs for free.
 */

const listeners = new Set<() => void>();

let cachedRaw: string | null = null;
let cached: string[] = EMPTY;

function readRaw(): string | null {
  try {
    return localStorage.getItem(KEY);
  } catch {
    return null; // private mode / storage disabled — shortlist stays empty
  }
}

/** Must return a stable reference while the underlying value is unchanged. */
function getSnapshot(): string[] {
  const raw = readRaw();
  if (raw !== cachedRaw) {
    cachedRaw = raw;
    try {
      const parsed = raw ? (JSON.parse(raw) as unknown) : null;
      cached = Array.isArray(parsed) ? (parsed as string[]) : EMPTY;
    } catch {
      cached = EMPTY;
    }
  }
  return cached;
}

function getServerSnapshot(): string[] {
  return EMPTY;
}

function subscribe(onChange: () => void) {
  listeners.add(onChange);
  window.addEventListener("storage", onChange);
  return () => {
    listeners.delete(onChange);
    window.removeEventListener("storage", onChange);
  };
}

function commit(next: string[]) {
  const raw = JSON.stringify(next);
  try {
    localStorage.setItem(KEY, raw);
  } catch {
    /* ignore — the in-memory copy below still drives this session */
  }
  cachedRaw = raw;
  cached = next;
  listeners.forEach((l) => l());
}

export function useSaved() {
  const saved = useSyncExternalStore(subscribe, getSnapshot, getServerSnapshot);

  // False during SSR and the hydration pass, true once the real store is read.
  const ready = useSyncExternalStore(
    subscribe,
    () => true,
    () => false,
  );

  const toggle = useCallback((slug: string) => {
    const current = getSnapshot();
    commit(
      current.includes(slug)
        ? current.filter((s) => s !== slug)
        : [slug, ...current],
    );
  }, []);

  const isSaved = useCallback(
    (slug: string) => saved.includes(slug),
    [saved],
  );

  return useMemo(
    () => ({ saved, ready, isSaved, toggle }),
    [saved, ready, isSaved, toggle],
  );
}
