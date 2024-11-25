export default function AppCards({ postsData }) {
    return (
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






    )
}