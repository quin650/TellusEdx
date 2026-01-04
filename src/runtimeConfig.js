export function getRuntimeConfig() {
	const el = document.getElementById("runtime-config");
	if (!el) return {};
	try {
		return JSON.parse(el.textContent || "{}");
	} catch (e) {
		return {};
	}
}

export function getBool(v) {
	const s = String(v ?? "").toLowerCase();
	return s === "1" || s === "true" || s === "yes";
}
