/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/**/*.{html,js,svelte,ts}'],
	theme: {
		extend: {
			colors: {
				primary: {
					50: '#D8D7D4',
					100: '#CFCDC9',
					200: '#BBB8B4',
					300: '#A8A49F',
					400: '#949089',
					500: '#817C74',
					600: '#6B6761',
					700: '#4E4B46',
					800: '#302E2C',
					900: '#131211'
				},
				secondary: {
					50: '#FFF2DB',
					100: '#FFE9C2',
					200: '#FFD78F',
					300: '#FFC55C',
					400: '#FFB329',
					500: '#F59E00',
					600: '#C27D00',
					700: '#8A5900',
					800: '#523500',
					900: '#1A1000'
				},
				text: {
					50: '#f7f7f6',
					100: '#e5e4e2',
					200: '#cbc7c4',
					300: '#aaa49e',
					400: '#87817a',
					500: '#6d665f',
					600: '#56514b',
					700: '#47433e',
					800: '#403d39',
					900: '#33312e'
				},
				success: {
					50: '#f2fbf9',
					100: '#d3f4ed',
					200: '#a6e9db',
					300: '#72d6c6',
					400: '#44bdac',
					500: '#2a9d8f',
					600: '#208177',
					700: '#1d6861',
					800: '#1c534f',
					900: '#1b4642'
				},
				error: {
					50: '#fdf5f3',
					100: '#fde8e3',
					200: '#fbd6cd',
					300: '#f8b9a9',
					400: '#f19078',
					500: '#e76f51',
					600: '#d3502f',
					700: '#b14024',
					800: '#933821',
					900: '#7a3422'
				},
				warning: {
					50: '#fdf9ed',
					100: '#f8edcd',
					200: '#f0d997',
					300: '#e9c46a',
					400: '#e2ab3d',
					500: '#da8d26',
					600: '#c16c1e',
					700: '#a04f1d',
					800: '#833e1d',
					900: '#6c331b'
				}
			},
			typography: ({ theme }) => ({
				primary: {
					css: {
						'--tw-prose-body': theme('colors.primary[800]'),
						'--tw-prose-headings': theme('colors.primary[900]'),
						'--tw-prose-lead': theme('colors.primary[700]'),
						'--tw-prose-links': theme('colors.primary[900]'),
						'--tw-prose-bold': theme('colors.primary[900]'),
						'--tw-prose-counters': theme('colors.primary[600]'),
						'--tw-prose-bullets': theme('colors.primary[400]'),
						'--tw-prose-hr': theme('colors.primary[300]'),
						'--tw-prose-quotes': theme('colors.primary[900]'),
						'--tw-prose-quote-borders': theme('colors.primary[300]'),
						'--tw-prose-captions': theme('colors.primary[700]'),
						'--tw-prose-code': theme('colors.primary[900]'),
						'--tw-prose-pre-code': theme('colors.primary[100]'),
						'--tw-prose-pre-bg': theme('colors.primary[900]'),
						'--tw-prose-th-borders': theme('colors.primary[300]'),
						'--tw-prose-td-borders': theme('colors.primary[200]'),

						'--tw-prose-invert-body': theme('colors.primary[200]'),
						'--tw-prose-invert-headings': theme('colors.primary[100]'),
						'--tw-prose-invert-lead': theme('colors.primary[200]'),
						'--tw-prose-invert-links': theme('colors.primary[100]'),
						'--tw-prose-invert-bold': theme('colors.primary[100]'),
						'--tw-prose-invert-counters': theme('colors.primary[300]'),
						'--tw-prose-invert-bullets': theme('colors.primary[500]'),
						'--tw-prose-invert-hr': theme('colors.primary[600]'),
						'--tw-prose-invert-quotes': theme('colors.primary[100]'),
						'--tw-prose-invert-quote-borders': theme('colors.primary[600]'),
						'--tw-prose-invert-captions': theme('colors.primary[300]'),
						'--tw-prose-invert-code': theme('colors.primary[100]'),
						'--tw-prose-invert-pre-code': theme('colors.primary[200]'),
						'--tw-prose-invert-pre-bg': 'rgb(0 0 0 / 50%)',
						'--tw-prose-invert-th-borders': theme('colors.primary[500]'),
						'--tw-prose-invert-td-borders': theme('colors.primary[600]')
					}
				}
			})
		}
	},
	plugins: [require('@tailwindcss/typography')]
};
