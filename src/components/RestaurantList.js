import React, { Component } from "react";
import { Table } from "react-bootstrap";
import { Link } from "react-router-dom";
import NavBarManu from "./NavBarManu";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEdit, faTrash } from '@fortawesome/free-solid-svg-icons'

class RestaurantList extends Component {
  constructor() {
    super();
    this.state = {
      list: null,
    };
  }
  componentDidMount() {
    this.getData()
  }
  getData() {
    fetch("http://localhost:3000/restaurant").then((response) => {
      response.json().then((result) => {
        this.setState({ list: result })
      })
    })
  }

  delete(id) {
    fetch("http://localhost:3000/restaurant/" + id, {
      method: "DELETE",
      // headers: {
      //   'Content-Type': 'application/json'
      // },
    }).then((result) => {
      result.json().then((resp) => {
        alert("Restaurant has been Delete")
        this.getData();
      })
    })
  }

  render() {
    return (
      <div>
        <NavBarManu />
        <h1>Restaurant List</h1>
        {this.state.list ? (
          <div>
            <Table striped bordered hover>
              <thead>
                <tr>
                  <th>#</th>
                  <th>Name</th>
                  <th>Rating</th>
                  <th>Location</th>
                  <th>Email</th>
                  <th>Operation</th>
                </tr>
              </thead>
              <tbody>
                {this.state.list.map((item, i) => (
                  <tr>
                    <td>{item.id}</td>
                    <td>{item.name}</td>
                    <td>{item.rating}</td>
                    <td>{item.address}</td>
                    <td>{item.email}</td>
                    <td><Link to={"/update/" + item.id}><FontAwesomeIcon icon={faEdit} color="orange" /></Link>
                      <span onClick={() => this.delete(item.id)}><FontAwesomeIcon icon={faTrash} color="red" /></span></td>
                  </tr>
                ))}
              </tbody>
            </Table>
          </div>
        ) : (
            <p>Please wait...</p>
          )}
      </div>
    );
  }
}

export default RestaurantList;
