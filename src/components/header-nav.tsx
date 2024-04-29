import { AppLink } from '@/shared/app-link';
import clsx from 'clsx';

export const HeaderNav = () => {
	const navLinks = [
		{ href: '/about-us', label: 'О нас' },
		{ href: '/services', label: 'Услуги' },
		{ href: '/posts', label: 'Публикации' },
		{ href: '/contacts', label: 'Контакты' },
	];

	return (
		<nav>
			<ul className="flex">
				{navLinks.map((link, index) => (
					<li
						key={index}
						className={clsx(
							{
								'mr-2': index !== navLinks.length - 1,
							},
							'text-black',
						)}
					>
						<AppLink href={link.href} label={link.label} />
					</li>
				))}
			</ul>
		</nav>
	);
};
