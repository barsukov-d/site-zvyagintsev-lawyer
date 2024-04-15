import React from 'react';
import Link from 'next/link';
import clsx from 'clsx';

const NavHeader = () => {
	const navLinks = [
		{ href: '/posts', label: 'Публикации' },
		{ href: '/about-us', label: 'О нас' },
		{ href: '/contacts', label: 'Контакты' },
	];

	return (
		<nav>
			<ul className="flex">
				{navLinks.map((link, index) => (
					<li
						key={index}
						className={clsx({
							'mr-2': index !== navLinks.length - 1,
						})}
					>
						<Link href={link.href}>{link.label}</Link>
					</li>
				))}
			</ul>
		</nav>
	);
};

export const AppHeader: React.FC = () => {
	return (
		<header className="container mx-auto mt-2 flex justify-between pb-2 text-gray-300">
			<span>LOGO</span>
			<NavHeader />
		</header>
	);
};
