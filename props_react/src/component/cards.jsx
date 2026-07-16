const Card = (props) => {
   // console.log(props);
   
    return(
        <>
        <div className="card">
           <img src="https://plus.unsplash.com/premium_photo-1778573142747-8332b2c8fc4b?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" className="card-img-top" alt="..." />
           <div className="card-body">
            <h5 className="card-title">{props.name},{props.age}</h5>
            <p className="card-text">A react developer</p>
            <a href="#" className="btn btn-primary">Go somewhere</a>
            </div>
            </div>
        </>
    )
}
export default Card
