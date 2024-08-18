import React from 'react';
import Article from '../components/Article'; // 确保路径正确

const articleData = {
  title: 'React 组件和样式',
  author: 'Jane Doe',
  date: '2024-08-18',
  content: `在这个示例中，我们创建了一个简单的 React 组件，用于展示文章内容，包括标题、作者、发布日期和正文。我们还添加了一个评论部分，可以显示用户的评论。使用 CSS 来美化这个组件。`,
  comments: [
    { user: 'John', comment: '这篇文章很有用！' },
    { user: 'Alice', comment: '感谢分享。' },
  ],
};

const ArticlePage: React.FC = () => {
  return (
    <div className="article-page-container">
      <Article
        title={articleData.title}
        author={articleData.author}
        date={articleData.date}
        content={articleData.content}
        comments={articleData.comments}
      />
    </div>
  );
}

export default ArticlePage;
