import Header2 from "../../components/header2"
import Header from "../../components/header"
import AdminLogin from "../../components/admin"
import './adminCss.css'
import { Link } from "react-router-dom"
function Admin(){
    return(
        <div>
            <Header />
            <Header2 />
            <div className='somenteAdmin'>
                <AdminLogin />
            </div>
            <Link to={"/admin/crud"}><p>teste página Crud</p></Link>
        </div>
        
    )
}

export default Admin;