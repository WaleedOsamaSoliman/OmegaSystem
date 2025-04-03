import { Header, Navbar, Nav } from "rsuite";

export default function Menu() {
  return (
    <Header id="header">
      <Navbar id="menu">
        <Navbar.Brand> أوميجا لإدارة الصيدليات والمخازن</Navbar.Brand>
        <Nav>
          <Nav.Item href="#home">Home</Nav.Item>
          <Nav.Item href="#blogs">Blogs</Nav.Item>
          <Nav.Item>Products</Nav.Item>
          <Nav.Menu title="settings">
            <Nav.Item>Company</Nav.Item>
            <Nav.Item>Team</Nav.Item>
            <Nav.Item>Contact</Nav.Item>
          </Nav.Menu>
          <Nav.Menu title="مبيعات">
            <Nav.Item>فاتورة مبيعات</Nav.Item>
            <Nav.Item>مرتجع مبيعات </Nav.Item>
            <Nav.Item>فواتير معلقه</Nav.Item>
          </Nav.Menu>
        </Nav>
        <Nav pullRight>
          <Nav.Item icon={<></>}>Settings</Nav.Item>
        </Nav>
      </Navbar>
    </Header>
  );
}
