import { Link, useParams } from "react-router-dom"
export default function Aboutpage(){
   const {username} = useParams()
    return<>
    <h1 className="text-center fw-bold text-primary">This is About Page {username}</h1>
    <Link to="/Home" className="btn btn-primary rounded-5">Home</Link>
    </>
}