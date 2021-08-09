import SunFlower from '../sunflower';

const BreadCrumb = () =>{
    return(
        <div className="item ui breadcrumb"
            style={{paddingLeft: "0px"}}>
            <div className="section">
                <a href="#/">
                    <div className="ui header mainPageHeader">
                        <SunFlower/>
                        <span style={{marginLeft:"8px"}}>
                            Sunflower LMS
                        </span>
                    </div>
                </a>
            </div>
        </div>
    )
}

export default BreadCrumb;