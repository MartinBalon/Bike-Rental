export const LOCATIONS = (
	<>
		<option value='Teplice' />
		<option value='Praha' />
		<option value='Brno' />
		<option value='Plzen' />
	</>
);

export const CATEGORIES: string[] = [
	'Cross Country (XC)',
	'Trail',
	'All Mountain (Enduro)',
	'Freeride',
	'Downhill (DH)',
];

export const WHEEL_SIZES: string[] = ['27.5"', '29"'];

export const FRAME_SIZES: string[] = ['S', 'M', 'L', 'XL'];

export const SUSPENSION: string[] = ['Front Suspension', 'Full Suspension'];

export const MATERIAL: string[] = ['Aluminium', 'Carbon'];

export const BRANDS: string[] = [
	'Specialized',
	'Trek',
	'Cube',
	'YT',
	'Propain',
];

type Model = {
	brand: string;
	models: string[];
};

export const MODELS: Model[] = [
	{ brand: 'Specialized', models: ['Demo', 'Status'] },
	{ brand: 'Trek', models: ['Session', 'Slash'] },
	{ brand: 'Cube', models: ['Two15', 'dwa'] },
	{ brand: 'YT', models: ['Tues', 'Capra'] },
	{ brand: 'Propain', models: ['Rage', 'Spindrift'] },
];