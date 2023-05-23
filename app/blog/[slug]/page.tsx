// control caching
// export const dynamic = "force-dynamic"; // always fetches latest data
export const revalidate = 420; // checks every nth seconds (when you know data is updated occasionally)

interface Post {
    title: string;
    content: string;
    slug: string;
}

// Params as a prop
// Params object has the slug as the URL parameter from the directory structure blog/[slug]
interface Props {
    params: { slug: string };
}

export async function generateStaticParams() {
    const posts: Post[] = await fetch("http://localhost:3000/api/content").then(
        (res) => res.json()
    );
    return posts.map((post) => ({
        slug: post.slug,
    }));
}

export default async function BlogPostPage({ params }: Props) {
    // deduped

    // fetch data from server (default HTTP method is GET)
    // .then() to map it to JSON
    const posts: Post[] = await fetch("http://localhost:3000/api/content", {
        cache: "no-cache",
    }).then((res) => res.json());

    // look for post with the matching slug, JS .find() method to find the matching slug in the data we have fetched
    // ! is a non-null assertion operator in TypeScript; this tells the compiler we are certain we will not fetch a non-null value to prevent certain TS errors in the IDE
    // (USE SPARINGLY); better approach is to check for null values at run time and throw error if you can't find what you're looking for
    const post = posts.find((post) => post.slug === params.slug)!;
    return (
        <div>
            <h1>{post.title}</h1>
            <p>{post.content}</p>
        </div>
    );
}
