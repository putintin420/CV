import { request, gql } from "graphql-request";

const graphqlAPI = import.meta.env.VITE_API;

export const getCategories = async () => {
	try {
		const query = gql`
			query getCategories {
				languagesConnection {
					edges {
						node {
							name
							slug
							categories {
								name
								slug
								posts {
									title
									slug
								}
							}
						}
					}
				}
			}
		`;
		const result = await request(graphqlAPI, query);

		return result.languagesConnection.edges;
	} catch (error) {
		return error;
	}
};

export const getPosts = async () => {
	try {
		const query = gql`
			query getPostPreviews {
				postsConnection(orderBy: publishedAt_DESC) {
					edges {
						node {
							exerpt
							slug
							author {
								bio
								name
								id
								photo {
									url
								}
							}
							createdAt
							title
							featuredImage {
								url
							}
							categories {
								name
								slug
								posts {
									id
								}
							}
							language {
								slug
								name
								icon {
									url
								}
							}
						}
					}
				}
			}
		`;
		const result = await request(graphqlAPI, query);
		return result.postsConnection.edges;
	} catch (error) {
		return error;
	}
};

export const getRecentPosts = async () => {
	try {
		const query = gql`
    query GetPostDetails() {
        posts(
        orderBy: createdAt_ASC
        last:3
        ){
    title
    slug
    createdAt
    language {
      name
      slug    
      icon {url}
    }
    categories {
      name
      slug
    }
    featuredImage{url}
  }
    }

    `;
		const result = await request(graphqlAPI, query);
		return result.posts;
	} catch (error) {
		return error;
	}
};

export const getSimilarPosts = async (categories2, slug2) => {
	try {
		const query = gql`
			query GetSimilarPosts($slug2: String!, $categories2: String!) {
				posts(
					where: {
						slug_not: $slug2
						AND: { categories_some: { slug: $categories2 } }
					}
				) {
					title
					slug
					createdAt
					language {
						name
						slug
						icon {
							url
						}
					}
					categories {
						name
						slug
					}
					featuredImage {
						url
					}
				}
			}
		`;
		const result = await request(graphqlAPI, query, { slug2, categories2 });

		return result.posts;
	} catch (error) {
		return error;
	}
};

export const getSimilarPosts2 = async (categories2, slug2, language) => {
	try {
		const query = gql`
			query GetSimilarPosts2(
				$slug2: String!
				$language: String!
				$categories2: String!
			) {
				posts(
					where: {
						slug_not: $slug2
						OR: [
							{ categories_some: { slug: $categories2 } }
							{ language: { slug: $language } }
						]
					}
				) {
					title
					slug
					createdAt
					language {
						name
						slug
						icon {
							url
						}
					}
					featuredImage {
						url
					}
					categories {
						name
						slug
					}
				}
			}
		`;
		const result = await request(graphqlAPI, query, {
			slug2,
			categories2,
			language,
		});
		return result.posts;
	} catch (error) {
		return error;
	}
};

export const getCategoriesSimple = async category => {
	try {
		const query = gql`
			query GetCategoriesSimple($category: String!) {
				languagesConnection {
					edges {
						node {
							name
							slug
							icon {
								url
							}
							categories(where: { NOT: { slug: $category } }) {
								name
								slug
							}
						}
					}
				}
			}
		`;
		const result = await request(graphqlAPI, query, { category });
		return result.languagesConnection.edges;
	} catch (error) {
		return error;
	}
};

export const getLanguagePosts = async slug => {
	try {
		const query = gql`
			query GetLanguagePosts($slug: String!) {
				postsConnection(where: { language: { slug: $slug } }) {
					edges {
						node {
							exerpt
							slug
							author {
								bio
								name
								id
								photo {
									url
								}
							}
							createdAt
							title
							featuredImage {
								url
							}
							categories {
								name
								slug
								posts {
									id
								}
							}
							language {
								slug
								name
								icon {
									url
								}
							}
						}
					}
				}
			}
		`;
		const result = await request(graphqlAPI, query, { slug });
		return result.postsConnection.edges;
	} catch (error) {
		return error;
	}
};

export const getCategoryPosts = async slug => {
	try {
		const query = gql`
			query GetCategoryPosts($slug: String!) {
				postsConnection(where: { categories_some: { slug: $slug } }) {
					edges {
						node {
							exerpt
							slug
							author {
								bio
								name
								id
								photo {
									url
								}
							}
							createdAt
							title
							featuredImage {
								url
							}
							categories {
								name
								slug
								posts {
									id
								}
							}
							language {
								slug
								name
								icon {
									url
								}
							}
						}
					}
				}
			}
		`;
		const result = await request(graphqlAPI, query, { slug });
		return result.postsConnection.edges;
	} catch (error) {
		return error;
	}
};

export const getPostDetails = async slug => {
	try {
		const query = gql`
			query GetPostDetails($slug: String!) {
				posts(where: { slug: $slug }) {
					exerpt
					slug
					content {
						raw
					}
					author {
						bio
						name
						id
						photo {
							url
						}
					}
					createdAt
					title
					featuredImage {
						url
					}
					categories {
						name
						slug
						posts {
							id
						}
					}
					language {
						slug
						name
						icon {
							url
						}
					}
				}
			}
		`;
		const result = await request(graphqlAPI, query, { slug });
		return result.posts;
	} catch (error) {
		return error;
	}
};
