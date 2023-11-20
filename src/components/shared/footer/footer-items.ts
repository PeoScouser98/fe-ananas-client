import { UrlObject } from 'url';

declare type TFooterColumn = {
	title: string;
	items: Array<{
		text: string;
		href: UrlObject;
	}>;
};

const FOOTER_ITEMS: Array<TFooterColumn> = [
	{
		title: 'titles.products',
		items: [
			{
				text: 'links.men_sneaker',
				href: { pathname: '/products', query: { category: 'shoes', gender: 'men' } }
			},
			{
				text: 'links.women_sneaker',
				href: { pathname: '/products', query: { category: 'shoes', gender: 'women' } }
			},
			{ text: 'links.accessories', href: { pathname: '/acessories' } },
			{ text: 'links.sale_off', href: { pathname: '/sale-off' } }
		]
	},
	{
		title: 'titles.about',
		items: [
			{ text: 'links.hiring', href: { pathname: '/hiring' } },
			{ text: 'links.franchise_policy', href: { pathname: '/franchise-policy' } },
			{ text: 'links.about_us', href: { pathname: '/about' } }
		]
	},
	{
		title: 'titles.support',
		items: [
			{ text: 'links.faqs', href: { pathname: '#' } },
			{ text: 'links.information_protection', href: { pathname: '#' } },
			{ text: 'links.general_policy', href: { pathname: '#' } },
			{ text: 'links.search_order', href: { pathname: '#' } }
		]
	},
	{
		title: 'titles.contact',
		items: [
			{ text: 'links.email_feedback', href: { pathname: '#' } },
			{ text: 'links.hotline', href: { pathname: '#' } }
		]
	}
];

export default FOOTER_ITEMS;
