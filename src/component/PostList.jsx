export default function PostList({ posts }) {
  return (
    <div className="postlist">
      {posts.map((post) => (
        <div className="post" key={post.idx}>
          <div className="title">{post.title}</div>
          <div className="content">{post.content}</div>
          <div className="info">
            <div className="author">{post.author}</div>
            <div className="date">{post.date}</div>
          </div>
        </div>
      ))}
    </div>
  );
}
