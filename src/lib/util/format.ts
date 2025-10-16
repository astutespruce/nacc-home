export const formatNumber = (
	number: number,
	decimals: number | null = null,
	auto: boolean = false
) => {
	const absNumber = Math.abs(number)
	let targetDecimals = decimals
	// guess number of decimals based on magnitude
	if (targetDecimals === null || auto) {
		if (absNumber > 10 || Math.round(absNumber) === absNumber) {
			targetDecimals = 0
		} else if (absNumber > 1) {
			targetDecimals = 1
		} else {
			targetDecimals = 2
		}
	}

	if (auto) {
		targetDecimals = Math.min(targetDecimals, decimals || 10)
	}

	const factor = 10 ** targetDecimals

	// format to localeString, and manually set the desired number of decimal places
	let formatted = (Math.round(number * factor) / factor).toLocaleString(undefined, {
		minimumFractionDigits: targetDecimals,
		maximumFractionDigits: targetDecimals
	})
	// trim trailing 0's after decimal
	if (formatted.length > 1 && formatted.indexOf('.') > 0 && formatted.endsWith('0')) {
		formatted = formatted.slice(0, formatted.length - 1)
	}
	if (formatted.endsWith('.')) {
		formatted = formatted.slice(0, formatted.length - 1)
	}
	return formatted
}
