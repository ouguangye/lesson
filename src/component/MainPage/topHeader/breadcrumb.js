import SunFlower from '../../sunflower';

const BreadCrumb = () =>{
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
                            color:"white"
                        }}>
                        <SunFlower/>
                        <span style={{marginLeft:"8px"}}>
                            Sunflower LMS
                        </span>
                        <span></span>
                    </div>
                </a>
            </div>
        </div>
    )
}

export default BreadCrumb;