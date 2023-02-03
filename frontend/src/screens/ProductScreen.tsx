import { Button, Card, Col, Image, ListGroup, Row } from 'react-bootstrap';
import { useParams } from 'react-router'
import { Link } from 'react-router-dom';
import Rating from '../components/Rating';
import products from '../products'

function ProductScreen({ match }: any) {
  const { id } = useParams();
  const product = products.find((product) => product._id === id);

  return <>
    <Link className='btn btn-light my-3' to="/">
      Go Back
    </Link>
    <Row>
      <Col md={6}>
        <Image src={product?.image} alt={product?.name} fluid />
      </Col>
      <Col md={3}>
        <ListGroup variant='flush'>
          <ListGroup.Item>
            <h3>{product?.name}</h3>
          </ListGroup.Item>
          <ListGroup.Item>
            <Rating value={product!.rating} text={`${product?.numReviews} reviews`} />
          </ListGroup.Item>
          <ListGroup.Item>
            Price: ${product!.price}
          </ListGroup.Item>
          <ListGroup.Item>
            Price: ${product!.description}
          </ListGroup.Item>
        </ListGroup>
      </Col>
      <Col md={3}>
        <Card>
          <ListGroup variant="flush">
            <ListGroup.Item>
              <Row>
                <Col>
                  Price:
                </Col>
                  <strong>${product?.price}</strong>
                <Col>
                </Col>
              </Row>
            </ListGroup.Item>

            <ListGroup.Item>
              <Row>
                <Col>
                  Status:
                </Col>
                <Col>
                  {product!.countInStock > 0 ? 'In Stock' : 'Out Of Stock'}
                </Col>
              </Row>
            </ListGroup.Item>

            <ListGroup.Item style={{ display: 'flex', justifyContent:"center" }}> 
              <Button className='btn-block' type='button' disabled={product!.countInStock === 0}>
                Add To Cart
              </Button>
            </ListGroup.Item>
          </ListGroup>
        </Card>
      </Col>
    </Row>
  </>
}

export default ProductScreen