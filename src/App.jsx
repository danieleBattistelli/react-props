import AppHeader from './components/AppHeader';
import PostCard from './components/PostCard'
import AppFooter from './components/AppFooter';
import posts from './data/data'


function App() {
  const publiscedPosts = posts.filter(post => post.published);
  return (
    <>
      <div className='app-container'>
        <AppHeader />
        <main>
          {publiscedPosts.map(post => (
            <PostCard
              key={post.id}
              title={post.title}
              image={post.image}
              content={post.content}
            />
          ))}
        </main>
        <AppFooter />
      </div>
    </>
  );
};

export default App
