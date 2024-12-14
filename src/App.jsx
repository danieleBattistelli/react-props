import AppHeader from './components/AppHeader';
import PostCard from './components/PostCard'
import AppFooter from './components/AppFooter';
import posts from './data/data'


function App() {
  const publiscedPosts = posts.filter(post => post.published);
  const uniqueTags = new Set();
  for (let i = 0; i < posts.length; i++) {
    for (let j = 0; j < posts[i].tags.length;
      j++) {
      uniqueTags.add(posts[i].tags[j]);

    }
  }
  const tagsArray = Array.from(uniqueTags);

  return (
    <>
      <div className='app-container'>
        <AppHeader />
        <main>
          <div className="tags-section">
            <h2>Tags Distinti</h2>
            <ul>
              {tagsArray.map(tag => (
                <li key={tag} className="tag-item">{tag}</li>
              ))}
            </ul>
          </div>
          {publiscedPosts.map(post => (
            <PostCard
              key={post.id}
              title={post.title}
              image={post.image}
              content={post.content}
              tags={post.tags}
            />
          ))}
        </main>
        <AppFooter />
      </div>
    </>
  );
};

export default App
