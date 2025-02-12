import React from "react";
import { Col, Row, Button, Form } from "react-bootstrap";

const Engine = () => {
    return (
        <div>

            <div className="slice">
                <div className="slideshow owl-carousel">
                    <div className="item">
                        <img
                            src="images/slide1.jpg"
                            alt="slider"
                            title="slider"
                            className="img-responsive"
                        />
                    </div>
                </div>

                <div className="slide-detail">
                    <div className="container">
                        <Form className="form-horizontal" method="post">
                            <div className="form-group d-flex">
                                <Row className="w-100">
                                    <Col md={6} xl={3}>
                                        <Form.Label>Destination</Form.Label>
                                        <Form.Control
                                            name="s"
                                            className="wid1"
                                            placeholder="Enter a destination or tour type.."
                                            type="text"
                                        />
                                    </Col>

                                    <Col md={6} xl={3}>
                                        <Form.Label>From</Form.Label>
                                        <div className="input-group date" id="datepicker">
                                            <Form.Control
                                                name="s"
                                                placeholder="dd/mm/yy"
                                                type="text"
                                            />

                                        </div>
                                    </Col>

                                    {/* Date To */}
                                    <Col md={6} xl={3}>
                                        <Form.Label>To</Form.Label>
                                        <div className="input-group date" id="datepicker1">
                                            <Form.Control
                                                name="s"
                                                placeholder="dd/mm/yy"
                                                type="text"
                                            />

                                        </div>
                                    </Col>

                                    {/* Trip Type */}
                                    <Col md={6} xl={3}>
                                        <Form.Label>Trip Type</Form.Label>
                                        <div className="selec-icon">
                                            <i className="fa fa-angle-down" aria-hidden="true"></i>
                                        </div>
                                        <Form.Control as="select" name="location">
                                            <option value="1">Trip Type</option>
                                            <option value="0">Location 1</option>
                                            <option value="0">Location 2</option>
                                            <option value="0">Location 3</option>
                                        </Form.Control>
                                    </Col>

                                    {/* Max Budget */}
                                    <Col md={6} xl={3} className="padd-left">
                                        <Form.Label>Max Budget</Form.Label>
                                        <Form.Control
                                            name="s"
                                            placeholder="Max budget ($)"
                                            type="text"
                                        />
                                    </Col>

                                    {/* Search Button */}
                                    <Col sm={3} className="wid2 padd-left">
                                        <Button className="btn-primary" type="button">
                                            Search Tours
                                        </Button>
                                    </Col>
                                </Row>
                            </div>
                        </Form>
                    </div>
                </div>
            </div>
        </div>

    );
};

export default Engine;
