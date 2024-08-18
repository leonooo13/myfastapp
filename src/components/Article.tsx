import React from 'react';
import './Article.css'; // 确保 CSS 文件路径正确

interface ArticleProps {
  title: string;
  author: string;
  date: string;
  content: string;
  comments: { user: string; comment: string }[];
}

const Article: React.FC<ArticleProps> = ({ title, author, date, content, comments }) => {
  return (
    <div className="article-container">
      <h1 className="article-title">{title}</h1>
      <div className="article-meta">
        <span className="article-author">作者: {author}</span>
        <span className="article-date">发布日期: {date}</span>
      </div>
      <div className="article-content">
        <p>{content}</p>
      </div>
      <div className="article-comments">
        <h2>评论</h2>
        {comments.length > 0 ? (
          <ul>
            {comments.map((comment, index) => (
              <li key={index} className="comment-item">
                <strong>{comment.user}:</strong> {comment.comment}
              </li>
            ))}
          </ul>
        ) : (
          <p>暂无评论</p>
        )}
      </div>
    </div>
  );
}

export default Article;
