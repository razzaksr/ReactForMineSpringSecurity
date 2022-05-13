import {Container, Nav, Navbar} from 'react-bootstrap'
export const Menus=()=>{
    return(
        <Navbar bg="light" expand="lg">
        <Container fluid>
            <Navbar.Brand href="#home">
                React For Spring Security
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="sample" />
            <Navbar.Collapse id="sample">
                <Nav className="ms-auto">
                    <Nav.Link active href="/home">Home</Nav.Link>
                    <Nav.Link href="/new">New</Nav.Link>
                </Nav>
            </Navbar.Collapse>
        </Container>
    </Navbar>
    )
}