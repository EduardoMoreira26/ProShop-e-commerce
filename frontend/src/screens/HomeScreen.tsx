import { Col, Row } from 'react-bootstrap'
import Product from '../components/Product'
import products from '../products'

export default function HomeScreen() {
  return (
    <>
      <h1>Latest Products</h1>
      <Row>
        {products.map((product: any) => (
          <Col sm={12} md={6} lg={4} xl={3}>
            <Product product={product}/>
          </Col>
        ))}
      </Row>
    </>
  )
}