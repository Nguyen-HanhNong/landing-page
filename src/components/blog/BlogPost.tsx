import bloglist from "../../editable-stuff/blog";

type BlogPostProps = {
  match?: {
    params?: {
      id?: string;
    };
  };
};

const BlogPost = ({ match }: BlogPostProps) => {
  const id = match?.params?.id;
  const post = typeof id === "string" ? bloglist[Number(id)] : undefined;

  return (
    <div className="container-lg mt-5">
      {post && (
        <div>
          <h1 className="display-2 text-center">{post.title}</h1>
          <img className="img-fluid mb-2" src={post.image} alt={`Nguyen-Hanh Nong`} />
          {post.getBlog()}
        </div>
      )}
      {!post && <h1 className="display-1 text-center">404 - Page not found</h1>}
    </div>
  );
};

export default BlogPost;
