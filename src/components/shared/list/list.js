import { Row , Col } from 'react-bootstrap'
import Card from '../card/card'

function List({items}) {

  return (
    <Row>
      {items.map((item) => {
        return (
          <>
            <Card item={item}/>
          </>
        )
      })}
    </Row>
  );
}

export default List;
  