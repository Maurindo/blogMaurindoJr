import Header2 from "../../components/header2"
import Header from "../../components/header"
import AdminLogin from "../../components/admin"
import './adminCss.css'
function Admin(){
    return(
        <div>
            <Header />
            <Header2 />
            <div className='somenteAdmin'>
                <AdminLogin />
            </div>
        </div>
        
    )
}

export default Admin;