import Link from 'next/link';

interface AppLinkProps {
	href: string;
	label: string;
}

export const AppLink = ({ href, label }: AppLinkProps) => {
	return (
		<Link href={href} className="mt-10 text-amber-950">
			{label}
		</Link>
	);
};
