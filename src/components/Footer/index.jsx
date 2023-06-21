import Container from 'react-bootstrap/Container';

function Footer() {
  return (
    <Container
      fluid
      className="shadow-sm bg-white "
      style={{ height: '70px', textAlign: 'center' }}
    >
      <p style={{ paddingTop: '10px', fontSize: '14px' }}>
        Artem Korniienko
        <br />
        <span style={{ fontSize: '10px' }}>©Copyright 2023</span>
      </p>
    </Container>
  );
}

export default Footer;
