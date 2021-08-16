import SunFlower from '../../sunflower';
import history from '../../history';

const BreadCrumb = props =>{
    return(
        <div className="item ui breadcrumb"
            style={{paddingLeft: "0px"}}>
            <div className="section">
                <a href="#/">
                    <div className="ui header"
                        style={{
                            fontSize:"14px",
                            display:"flex",
                            alignItems: "center",
                            fontWeight: "200",
                            color:props.color
                        }}>
                        <SunFlower/>
                        <span style={{marginLeft:"8px"}} 
                            onClick={()=>{history.push("/main")}} >
                            Sunflower LMS
                        </span>
                        {props.headerName()}
                        <span></span>
                    </div>
                </a>
            </div>
        </div>
    )
}

export default BreadCrumb;