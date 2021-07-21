import { Row , Col, Card } from 'react-bootstrap'
import './card.css'
import FullStar from '../../../assets/images/star.png'
import HalfStar from '../../../assets/images/half-star.png'
import EmptyStar from '../../../assets/images/empty-star.png'

function List({item}) {

  const getSubstring = (str) => {
    if(str.length > 45) {
      return str.substring(0,45) + '...';
    } else {
      return str
    }
  }

  const starRating = (rating) => {
    let fullStarCount = Math.floor(rating)
    let halfStarCount = (rating % 1) * 10
    let emptyStarCount = 6 - fullStarCount - (Math.ceil((rating % 1)))
    let array = []
    
    for (let i = 0; i < fullStarCount; i++) {
      array.push(<img className="star-image" src= {FullStar}/>)
    }
    if (halfStarCount === 5) {
      array.push(<img className="star-image" src= {HalfStar}/>)
    }

    for (let i = 0; i < emptyStarCount; i++) {
      array.push(<img className="star-image" src= {EmptyStar}/>)
    }

    return array
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
              <Row>{starRating(item.starRating)}</Row>
              <Row className="list-item-price">{`${item.price} €`}</Row>
            </Col>
          </Card>
        </Row>
      </Col>
    </>
  )
}

export default List;
  