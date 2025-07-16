import axios from 'axios'
import React, { useState } from 'react'

const Internalmarks = () => {

    const [output, changeOutput] = useState({
        name: "",
        admno: "",
        batch: "",
        internalMark: "",
        attandance: "",
        Exam: "",
        assignment: ""
    })


    const [input, changeInput] = useState(
        {

            "name": "",
            "admno": "",
            "batch": "",
            "present": "",
            "totalp": "",
            "exam1": "",
            "totalExam1": "",
            "exam2": "",
            "totalExam2": "",
            "assignment1": "",
            "assignment2": "",
            "email":""
        }
    )


    const inputHandler = (event) => {
        changeInput({ ...input, [event.target.name]: event.target.value })
    }


    const readInput = () => {
        console.log(input)
        axios.post("http://localhost:4000/calculate", input).then(
            (response) => {
                changeOutput(response.data)
            }
        ).catch()
    }


    return (
        <div>
            <h1><center>Enter Details</center></h1><br />
            <div className="container">
                <div className="row">
                    <div className="col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                        <div className="row g-3">
                            <div className="col-6 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                                <label htmlFor="" className="form-label">NAME</label>
                                <input type="text" className="form-control" name='name' value={input.name} onChange={inputHandler} />
                            </div>
                            <div className="col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                                <label htmlFor="" className="form-label">Admission Number</label>
                                <input type="text" className="form-control" name='admno' value={input.admno} onChange={inputHandler} />
                            </div>
                            <div className="col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                                <label htmlFor="" className="form-label">Batch</label>
                                <input type="text" className="form-control" name='batch' value={input.batch} onChange={inputHandler} />
                            </div>
                            <div className="col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                                <label htmlFor="" className="form-label">No.of days present</label>
                                <input type="text" className="form-control" name='present' value={input.present} onChange={inputHandler} />
                            </div>
                            <div className="col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                                <label htmlFor="" className="form-label">Total No.of days present</label>
                                <input type="text" className="form-control" name='totalp' value={input.totalp} onChange={inputHandler} />
                            </div>
                            <div className="col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                                <label htmlFor="" className="form-label">First Exam marks</label>
                                <input type="text" className="form-control" name='exam1' value={input.exam1} onChange={inputHandler} />
                            </div>
                            <div className="col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                                <label htmlFor="" className="form-label">Total marks(first)</label>
                                <input type="text" className="form-control" name='totalExam1' value={input.totalExam1} onChange={inputHandler} />
                            </div>
                            <div className="col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                                <label htmlFor="" className="form-label">Second Exam Marks</label>
                                <input type="text" className="form-control" name='exam2' value={input.exam2} onChange={inputHandler} />
                            </div>
                            <div className="col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                                <label htmlFor="" className="form-label">Total marks(second)</label>
                                <input type="text" className="form-control" name='totalExam2' value={input.totalExam2} onChange={inputHandler} />
                            </div>
                            <div className="col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                                <label htmlFor="" className="form-label">Assignment 1 marks</label>
                                <input type="text" className="form-control" name='assignment1' value={input.assignment1} onChange={inputHandler} />
                            </div>
                            <div className="col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                                <label htmlFor="" className="form-label">Assignment 2 marks</label>
                                <input type="text" className="form-control" name='assignment2' value={input.assignment2} onChange={inputHandler} />
                            </div>
                            <div className="col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                                <label htmlFor="" className="form-label">Email</label>
                                <input type="email" className="form-control" name='email' value={input.email} onChange={inputHandler} />
                            </div>

                            <div className="col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                                <button className="btn btn-primary" onClick={readInput}>Calculate</button>
                            </div>
                            <div className="col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                                <div class="card" >
                                    <div class="card-body">
                                        <h3 class="card-title">Name: {output.name} </h3>
                                        <h5 class="card-title">Admission Number: {output.admno} </h5>
                                        <h5 class="card-title">Batch: {output.batch} </h5>
                                        <h5 class="card-title">Internal Mark: {output.internalMark} </h5>
                                        <h5 class="card-title">Attandance Mark: {output.attandance} </h5>
                                        <h5 class="card-title">Assignment Mark: {output.assignment} </h5>
                                        <h5 class="card-title">Exam Mark: {output.Exam} </h5>
                                    </div>
                                </div>
                            </div>

                            { }
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Internalmarks