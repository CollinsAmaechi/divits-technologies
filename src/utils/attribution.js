const STORAGE_KEY = 'divits_attribution';

function normalize(value) {
  if (!value) return null;
  return String(value).trim().toLowerCase();
}

export function getUrlAttribution() {
  const params = new URLSearchParams(window.location.search);
  const source = params.get('utm_source');
  const referral = params.get('utm_campaign');

  if (!source) return null;
  return {
    source: normalize(source) || 'direct',
    referral: normalize(referral),
  };
}

export function getStoredAttribution() {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (!raw) return null;
    const parsed = JSON.parse(raw);
    if (parsed && parsed.source) return parsed;
  } catch {
    // ignore malformed storage
  }
  return null;
}

export function saveAttribution(attribution) {
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(attribution));
  } catch {
    // storage unavailable
  }
}

/**
 * Returns the current attribution.
 * Priority:
 *  1. Fresh URL UTM params (updates storage)
 *  2. Previously stored attribution
 *  3. Direct traffic default
 */
export function getAttribution() {
  const urlAttr = getUrlAttribution();
  if (urlAttr) {
    saveAttribution(urlAttr);
    return urlAttr;
  }
  const stored = getStoredAttribution();
  if (stored) return stored;
  return { source: 'direct', referral: null };
}
