import React,{ memo, useEffect, useState} from "react";
import { Row, Col } from "antd";
import Economy from "./components/Economy";
import Api from "../resouce/Api";

function Home(){
    const [ news, setNews ] = useState([]);
    const [ loading, setLoading ] = useState(false);

    const handleNews = (articles) => {
        setLoading(false)
        setNews({
            world: articles[0]?.value.value,
            economy: articles[1]?.value.value,
            tecnology: articles[2]?.value.value,

        })
    }

    useEffect(()=>{
        setLoading(true);
        Promise.allSettled([
            Api.getNews('world'),   
            Api.getNews('economy'),   
            Api.getNews('tecnology'),   
        ])
            .then(handleNews)
    },[])

    if (loading) return <div>Carregando</div>

    return (
        <div>
            <Row gutter={[16, 16]}>
                <Col span={24} md={16}>
                    <h2>World</h2>
                </Col>
                <Col span={24} md={16}>
                    <h2>Economy</h2>
                    <Economy values={news?.economy}/>
                </Col>
            </Row>
            <Row gutter={[16, 16]}>
                <Col span={24} md={16}>
                    <h2>Tecnology</h2>
                </Col>
            </Row>
        </div>
    )
    
}

export default Home;