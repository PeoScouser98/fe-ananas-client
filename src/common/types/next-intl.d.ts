import { useLocale } from 'next-intl';
import { LOCALES } from '../constants/enums';

module 'next-intl' {
	declare type AppLocale = (typeof LOCALES)[number];
}
