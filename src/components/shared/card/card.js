import { Row , Col, Card } from 'react-bootstrap'
import './card.css'

function List({item}) {

  const getSubstring = (str) => {
    if(str.length > 45) {
      return str.substring(0,45) + '...';
    } else {
      return str
    }
  }

  return (
    <>
      <Col md={4} className="list-card-column">
        <Row className="list-inner-row">
          <Card>
            <Col className="list-inner-column">
              <Row><img src={item.pictureLink} /></Row>
              <Row className="list-item-name">{item.name}</Row>
              <Row>{getSubstring(item.explanation)}</Row>
              <Row>{item.starRating}</Row>
              <Row className="list-item-price">{`${item.price} €`}</Row>
            </Col>
          </Card>
        </Row>
      </Col>
    </>
  )
}

export default List;
  