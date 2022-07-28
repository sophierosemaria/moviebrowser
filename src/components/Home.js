

const Home = () => {
    return (
        <>
            <div className="backdrop-404" style={{backgroundImage: "url(https://images.unsplash.com/photo-1489599849927-2ee91cede3ba?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80)"}}>
                <div className="container pt-5">
                    <h1 className="text-center text-white medium-text pt-5"> Movie Browser </h1>
                    <div className='row'>
                        <div className='col-lg-8 offset-lg-2 my-5'>
                            <p className='lead text-white text-center'>Search the details of all your favorite movies!
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Home;