import Carousel from 'react-bootstrap/Carousel';

function GroupProjects() {
  return (
    <Carousel fade>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://stock.adobe.com/search?k=placeholder&asset_id=248426448"
          alt="First slide"
        />
        <Carousel.Caption>
          <h3>iEats</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://stock.adobe.com/search?k=placeholder&asset_id=236840201"
          alt="Second slide"
        />

        <Carousel.Caption>
          <h3>Lucarios</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://stock.adobe.com/search?k=placeholder&asset_id=271104474"
          alt="Third slide"
        />

        <Carousel.Caption>
          <h3>TBD</h3>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

export default GroupProjects;
