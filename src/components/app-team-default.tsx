export default function AppTeamDefault() {
	return (
		<section className="bg-white dark:bg-gray-900">
			<div className="container mx-auto px-6 py-10">
				<div className="xL:-mx-4 xl:flex xl:items-center">
					<div className="xl:mx-4 xl:w-1/2">
						<h1 className="text-2xl font-semibold capitalize text-gray-800 lg:text-3xl dark:text-white">
							Our Team
						</h1>

						<p className="mt-4 max-w-2xl text-gray-500 dark:text-gray-300">
							Lorem ipsum dolor sit amet consectetur adipisicing
							elit. Illo incidunt ex placeat modi magni quia error
							alias, adipisci rem similique, at omnis eligendi
							optio eos harum.
						</p>
					</div>

					<div className="mt-8 grid grid-cols-1 gap-8 md:grid-cols-2 xl:mx-4 xl:mt-0 xl:w-1/2">
						<div>
							<img
								className="aspect-square rounded-xl object-cover"
								src="https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80"
								alt=""
							/>

							<h1 className="mt-4 text-2xl font-semibold capitalize text-gray-700 dark:text-white">
								John Doe
							</h1>

							<p className="mt-2 capitalize text-gray-500 dark:text-gray-300">
								Full stack developer
							</p>
						</div>

						<div>
							<img
								className="aspect-square rounded-xl object-cover"
								src="https://images.unsplash.com/photo-1499470932971-a90681ce8530?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80"
								alt=""
							/>

							<h1 className="mt-4 text-2xl font-semibold capitalize text-gray-700 dark:text-white">
								Mia
							</h1>

							<p className="mt-2 capitalize text-gray-500 dark:text-gray-300">
								Graphic Designer
							</p>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
}
