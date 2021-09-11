import React, { memo } from 'react';
import PropTypes from 'prop-types';
import { Row, Col } from 'antd';
import { useHistory } from 'react-router-dom';
import { createMarkup } from '../../utils';

function World ({ values}){
    const history = useHistory();

    const renderImage = ({image, description}) =>
        <img src={image.url} alt={description} width={"100%"} />
    
    const renderDescription = (description) => <p dangerouslySetInnerHTML={createMarkup(description)}/>

    const openPost = (id) => {
        history.push(`/world/${id}`)
    }

    const renderPost= (post,index) => {

        const { title, image, description, id } = post
        const isFirst = index === 0
        const spanValue = isFirst ? 24 : 12


        return (
            <Col span={spanValue} md={spanValue} key={`post-${index}`}>
                <article onClick={() => openPost(id)}>
                    <p>
                        <strong dangerouslySetInnerHTML={createMarkup(title)}/>
                    </p>
                    {image?.url ? renderImage({ image, description}) : renderDescription(description)} 
                </article>
            </Col>
        )

    }

    return (
        <Row gutter={[16, 16]}>
            {values?.map(renderPost)}
        </Row>
    )

 }

 World.defaultProps = {
     values: []
 }

 World.propTypes ={
     values: PropTypes.array.isRequired
 }
 
 export default memo(World);