import React, { useEffect, useState } from 'react'
import Navbar from './Navbar'
import axios from 'axios'

const Viewall = () => {
    const [isLoading, changeLoading] = useState(true)
    const [studentData, changeStudentData] = useState([])

    const fetchData = () => {
        axios.get("http://localhost:4001/viewall").then((response) => {
            changeLoading(false)
            changeStudentData(response.data)
        }).catch(() => {
            alert("Something Went Wrong")
        })
    }

    useEffect(() => {
        fetchData()
    }, [])

    return (
        <div>
            <Navbar />
            <h1 className="header text-center my-4">View All Marks</h1>

            <div className="container mb-5">
                {isLoading ? (
                    <div className="d-flex justify-content-center py-5">
                        <div className="spinner-border" role="status">
                            <span className="visually-hidden">Loading...</span>
                        </div>
                    </div>
                ) : (
                    <div>
                        <table className="table table-bordered ">
                            <thead className="table-primary">
                                <tr>
                                    <th>Name</th>
                                    <th>Admission No</th>
                                    <th>Batch</th>
                                    <th>Days Present</th>
                                    <th>Exam 1</th>
                                    <th>Exam 1 Total</th>
                                    <th>Exam 2</th>
                                    <th>Exam 2 Total</th>
                                    <th>Assignment 1</th>
                                    <th>Assignment 2</th>
                                    <th>Email</th>
                                    <th>Attendance Internal</th>
                                    <th>Exam Internal</th>
                                    <th>Assignment Internal</th>
                                    <th>Internal Marks</th>
                                </tr>
                            </thead>
                            <tbody>
                                {studentData.map((value, index) => (
                                    <tr>
                                        <td>{value.name}</td>
                                        <td>{value.admno}</td>
                                        <td>{value.batch}</td>
                                        <td>{value.present}</td>
                                        <td>{value.exam1}</td>
                                        <td>{value.totalExam1}</td>
                                        <td>{value.exam2}</td>
                                        <td>{value.totalExam2}</td>
                                        <td>{value.assignment1}</td>
                                        <td>{value.assignment2}</td>
                                        <td>{value.email}</td>
                                        <td>{Number(value.attandanceinternal).toFixed(2)}</td>
                                        <td>{Number(value.Examinternal).toFixed(2)}</td>
                                        <td>{Number(value.assignmentinternal).toFixed(2)}</td>
                                        <td>{Number(value.internalMark).toFixed(2)}</td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                )}
            </div>
        </div>
    )
}

export default Viewall
