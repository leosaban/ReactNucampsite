import { useSelector } from 'react-redux';
import { Col, Row } from 'reactstrap';
import CampsiteCard from "./CampsiteCard";
import { selectAllCampsites } from './campsitesSlice';


const CapmsitesList = () => {
    const campsites = useSelector(selectAllCampsites);
    console.log('campsites:', campsites);
    return (
        <Row className="ms-auto" >
                {campsites.map((campsite) => {
            return (
                    <Col 
                    md='5' 
                    className='m-4' 
                    key={campsite.id}
                    >
                        <CampsiteCard campsite={campsite} />
                    </Col>
                   );
              })}
        </Row>
        )

}

export default CapmsitesList;