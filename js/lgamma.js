// https://mrob.com/pub/ries/lanczos-gamma.html#code
const LG_g = 5.0;
const LG_N = 6;

const lct = [
	1.000000000190015,
	76.18009172947146,
	-86.50532032941677,
	24.01409824083091,
	-1.231739572450155,
	0.1208650973866179e-2,
	-0.5395239384953e-5
];

const ln_sqrt_2_pi = 0.91893853320467274178;
const g_pi = 3.14159265358979323846;

export function lgamma(z) {
	let sum = 0;
	let rv;
	if (z < 0.5) {
		return Math.log(g_pi / Math.sin(g_pi * z)) - lgamma(1.0 - z);
	}
	z = z - 1.0;
	let base = z + LG_g + 0.5; // Base of the Lanczos exponential
	for (let i = LG_N; i >= 1; i--) {
		sum += lct[i] / (z + i);
	}
	sum += lct[0];
	return ((ln_sqrt_2_pi + Math.log(sum)) - base) + Math.log(base) * (z + 0.5);
}
