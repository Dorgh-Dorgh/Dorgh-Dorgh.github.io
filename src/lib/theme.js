const KEY = "dorgh_theme";
export function getInitialTheme(){ try { return localStorage.getItem(KEY) || "light"; } catch { return "light"; } }
export function applyTheme(theme){ document.documentElement.setAttribute("data-theme", theme); try { localStorage.setItem(KEY, theme); } catch {} }
