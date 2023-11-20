export const LOCALES = ['vi', 'en'] as const;

export const MEDIA_QUERIES = {
	SMALL: '(min-width: 384px) and (max-width: 767px)',
	MEDIUM: '(min-width: 768px) and (max-width: 1365px)',
	LARGE: '(min-width: 1366px) and (max-width: 1920px)',
	EXTRA_LARGE: '(min-width: 1921px)'
} as const;

export enum NEXT_THEMES {
	LIGHT = 'light',
	DARK = 'dark',
	SYSTEM = 'system'
}
