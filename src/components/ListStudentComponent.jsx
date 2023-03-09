import React, { Component } from 'react'

class ListStudentComponent extends Component {
  constructor(props) {
    super(props)

    this.state = {
      students: []
    }
  }
  render() {
    return (
      <div>
        <h2 className="text-center">Students List</h2>
        <div className="row">
          <table className='table table-striped table-bordered'>
            <thead>
              <tr>
                <th>First Name</th>
                <th>Last Name</th>
                <th>Email Address</th>
                <th>Phone Number</th>
                <th>Date of Birth</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              
              {
                this.state.students.map(
                  student =>
                  <tr key={student.id}>
                      <td> {student.firstName} </td>
                      <td> {student.lastName} </td>
                      <td> {student.emailId} </td>
                      <td> {student.phone_number} </td>
                      <td> {student.date_of_birth} </td>
                  </tr>
                )
              }
            </tbody>
          </table>
        </div>
      </div>
    )
  }
}

export default ListStudentComponent