import { useState } from "react";

export default function PostForm({ setPosts }) {
  const [newPost, setNewPost] = useState({
    idx: new Date().toISOString(),
    title: "",
    content: "",
    date: new Date().toISOString().split("T")[0], // 현재 날짜 추가
    author: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setNewPost({
      ...newPost,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!newPost.title || !newPost.content || !newPost.author) {
      alert("모든 필드를 입력하세요.");
      return;
    }
    setPosts((prev) => [...prev, newPost]);
    setNewPost({ idx: new Date().toISOString(), title: "", content: "", date: new Date().toISOString().split("T")[0], author: "" }); // 입력 필드 초기화
  };

  return (
    <div className="post_form">
      <form onSubmit={handleSubmit}>
        <input type="text" name="title" placeholder="제목" value={newPost.title} onChange={handleChange} required />
        <textarea name="content" placeholder="내용" value={newPost.content} onChange={handleChange} required />
        <input type="date" name="date" value={newPost.date} readOnly />
        <input type="text" name="author" placeholder="닉네임" value={newPost.author} onChange={handleChange} required />
        <button type="submit">추가하기</button>
      </form>
    </div>
  );
}
