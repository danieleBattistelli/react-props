import AppHeader from './components/AppHeader';
import AppPost from './components/AppPost';
import AppFooter from './components/AppFooter';


function App() {
 

  return (
    <>
      <div className='app-container'>
        <AppHeader />
          <main>
            <AppPost />
          </main>
        <AppFooter/>
      </div>
    </>
  )
}

export default App
