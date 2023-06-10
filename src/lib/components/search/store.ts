import { Post } from '$lib/utils/utils';
import { get, readable, writable } from 'svelte/store';

const getPosts = () => {
	const tmpPost: Array<Post> = [];

	const modules = import.meta.glob('../../posts/*.md', { eager: true });

	for (const path in modules) {
		const postData: Post = modules[path] as Post;
		const href = path.replace('../../posts', '').replace('.md', '');

		const post: Post = postData.metadata as unknown as Post;
		tmpPost.unshift(new Post(href, post.title, post.description, post.datetime));
	}

	tmpPost.sort((a, b) => {
		if (!a.datetime && !b.datetime) {
			return 0;
		}
		if (a.datetime && !b.datetime) {
			return -1;
		}
		if (!a.datetime && b.datetime) {
			return 1;
		}
		const dateA = Date.parse(a.datetime);
		const dateB = Date.parse(b.datetime);
		return dateB - dateA; // Compare dateB with dateA instead of dateA with dateB
	});

	return tmpPost;
};

export const Posts = readable<Array<Post>>(getPosts());

export const FilteredPosts = writable<Array<Post>>(get(Posts));
export const FilterValue = writable<string>('');
