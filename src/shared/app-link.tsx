import Link from 'next/link';

interface AppLinkProps {
	href: string;
	label: string;
}

export const AppLink = ({ href, label }: AppLinkProps) => {
	return (
		<Link data-component="app-link" href={href} className="">
			{label}
		</Link>
	);
};
