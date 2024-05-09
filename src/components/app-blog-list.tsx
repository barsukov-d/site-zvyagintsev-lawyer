import Image from 'next/image';

const blogPosts = [
	{
		image: 'https://images.unsplash.com/photo-1644018335954-ab54c83e007f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80',
		title: 'All the features you want to know',
		description:
			'Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure veritatis sint autem nesciunt, laudantium quia tempore delect',
		date: '21 October 2019',
	},
	{
		image: 'https://images.unsplash.com/photo-1497032628192-86f99bcd76bc?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80',
		title: 'How to use sticky note for problem solving',
		description:
			'Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure veritatis sint autem nesciunt, laudantium quia tempore delect',
		date: '20 October 2019',
	},
	{
		image: 'https://images.unsplash.com/photo-1644018335954-ab54c83e007f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80',
		title: 'All the features you want to know',
		description:
			'Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure veritatis sint autem nesciunt, laudantium quia tempore delect',
		date: '21 October 2019',
	},
	{
		image: 'https://images.unsplash.com/photo-1497032628192-86f99bcd76bc?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80',
		title: 'How to use sticky note for problem solving',
		description:
			'Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure veritatis sint autem nesciunt, laudantium quia tempore delect',
		date: '20 October 2019',
	},
	// добавьте больше объектов для каждого блока
];

const BlogList = () => {
	return blogPosts.map((post, index) => (
		<div key={index}>
			<Image
				width={150}
				height={150}
				className="relative z-10 h-96 w-full rounded-md object-cover"
				src={post.image}
				alt={post.title}
			/>

			<div className="relative z-20 mx-auto -mt-20 max-w-lg rounded-md bg-white p-6 shadow dark:bg-gray-900">
				<a
					href="#"
					className="font-semibold text-gray-800 hover:underline md:text-xl dark:text-white"
				>
					{post.title}
				</a>

				<p className="mt-3 text-sm text-gray-500 md:text-sm dark:text-gray-300">
					{post.description}
				</p>

				<p className="mt-3 text-sm text-blue-500">{post.date}</p>
			</div>
		</div>
	));
};

export default function AppBlogList() {
	return (
		<section className="bg-white dark:bg-gray-900">
			<div className="container mx-auto px-6 py-10">
				<div className="text-center">
					<h1 className="text-2xl font-semibold capitalize text-gray-800 lg:text-3xl dark:text-white">
						From the blog
					</h1>

					<p className="mx-auto mt-4 max-w-lg text-gray-500">
						Lorem ipsum dolor sit amet consectetur adipisicing elit.
						Iure veritatis sint autem nesciunt, laudantium quia
						tempore delect
					</p>
				</div>

				<div className="mt-8 grid grid-cols-1 gap-8 lg:grid-cols-2">
					<BlogList />
				</div>
			</div>
		</section>
	);
}
