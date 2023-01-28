import { useRouter } from 'next/router';

function  BlogPostsPage() {
    const router = useRouter();

    console.log(router.pathname);
    console.log(router.query);
    return(
        <div>
            <h1>The blog post Page</h1>
        </div>
    );
}

export default BlogPostsPage