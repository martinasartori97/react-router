import { useState, useEffect } from 'react'
import './App.css'
import { BrowserRouter, Routes } from 'react-router-dom';
import Home from "./pages/Home"
// import AppCards from './components/AppCards'


// const articles = [
//   'php',
//   'javascript',
//   'laravel',
//   'react',
// ];



function App() {



  const [title, setTitle] = useState('')
  const [newArticle, setNewArticle] = useState('');
  const [image, setImage] = useState('');
  const [content, setContent] = useState('')
  const [category, setCategory] = useState('');
  const [postsData, setPostsData] = useState({})




  function handleTitleOnChange(e) {
    console.log(e);
    setTitle(e.target.value)

  }

  function addArticle(e) {
    e.preventDefault()
    console.log(articles);



  }

  function handleButtonOnClick() {
    console.log('mostrare gli articoli');


  }

  function handleImageOnChange(e) {
    console.log(e);
    setImage(e.target.value)

  }

  function handleContentOnChange(e) {
    console.log(e);
    setContent(e.target.value)

  }

  function handleCategoryOnChange(e) {
    console.log(e);
    setCategory(e.target.value)

  }



  function fetchData(url = 'http://localhost:3000/posts') {
    fetch(url)
      .then(resp => resp.json())
      .then(data => {
        console.log(data);
        setPostsData(data)
      })



  }

  useEffect(fetchData, [])


  return (
    <>
      <div className="container">
        <h1> React Blog Form</h1>
        <p>insert the title</p>
        <input type="text" title='title' id='title' value={title} onChange={e => setTitle(e.target.value)} />
        <button onClick={handleButtonOnClick}>send</button>

        {/* <ul className="list-group">
          {articles.map((article, index) => <li key={index} className="list-group-item">{article}</li>)}
        </ul> */}


        <div className="form-floating mb-3">

          <input type="text" className="form-control" value={image} onChange={e => setImage(e.target.value)} />
          <label className="img" htmlFor="floatingInputDisabled">insert the image</label>

        </div>


        <div className="form-floating mb-3">
          <input type="text" className="form-control" value={content} onChange={e => setContent(e.target.value)} />
          <label htmlFor="floatingInputDisabled">content</label>
        </div>


        <select className="form-select" aria-label="Default select example">
          <option selected>Open this select menu</option>
          <option value="1">One</option>
          <option value="2">Two</option>
          <option value="3">Three</option>
        </select>


        <div className="form-check">
          <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
          <label className="form-check-label" for="flexCheckDefault">
            Default checkbox
          </label>
        </div>
        <div className="form-check">
          <input className="form-check-input" type="checkbox" value="" id="flexCheckChecked" checked />
          <label className="form-check-label" for="flexCheckChecked">
            Checked checkbox
          </label>
        </div>
        <div className="form-check">
          <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
          <label className="form-check-label" for="flexCheckDefault">
            Default checkbox
          </label>
        </div>
        <div className="form-check">
          <input className="form-check-input" type="checkbox" value="" id="flexCheckChecked" checked />
          <label className="form-check-label" for="flexCheckChecked">
            Checked checkbox
          </label>
        </div>
      </div>


      <h1>menù della casa</h1>
      <section className='posts'>
        <div className="container">
          <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3 g-3">


            {
              postsData.data ?

                postsData.data.map(post => (

                  <div className="col" key={post.slug}>
                    <div className="card">
                      <img src={`http://localhost:3000/imgs/posts/${post.image}`} alt="" />
                      <p>
                        {post.title}
                      </p>
                    </div>
                  </div>

                )) :
                <p>hello</p>



            }




          </div>
        </div>

      </section>

      {/* <AppCards postsData={postsData} loading={loading} />  */}

      {/* return ( */}
      {/* <BrowserRouter>
      <Routes>
        <Route element={<DefaultLayout />}>
          <Route path='/' element={<Home />}/>
          <Route path='/posts' element={<PostList />}/>
          <Route path='/chi-siamo' element={<ChiSiamo />}/>
        </Route>
      </Routes>
    </BrowserRouter> */}
      {/* ) */}
}

    </>
  )
}




export default App 
