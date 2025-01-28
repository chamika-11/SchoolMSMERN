import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import './AddStudent.css';
import Navbar from '../Navbar/Navbar';

function AddStudent() {
    
    const history = useNavigate();
    const [inputs, setInputs] = useState({
        name: "",
        indexNo: "",
        age: "",
        grade: "",
        address: "",
        parentPhone: "",
        subjects: []
    });

    const handleChange = (e) => {
        setInputs((prevState) => ({
            ...prevState,
            [e.target.name]: e.target.value,
        }));
    };

    const handleSubjectChange = (e, index) => {
        const { name, value } = e.target;
        const updatedSubjects = [...inputs.subjects];
        updatedSubjects[index] = {
            ...updatedSubjects[index],
            [name]: value,
        };
        setInputs((prevState) => ({
            ...prevState,
            subjects: updatedSubjects,
        }));
    };

    const addSubject = () => {
        setInputs((prevState) => ({
            ...prevState,
            subjects: [...prevState.subjects, { subjectName: "", marks: "" }],
        }));
    };

    const removeSubject = (index) => {
        const updatedSubjects = inputs.subjects.filter((_, i) => i !== index);
        setInputs((prevState) => ({
            ...prevState,
            subjects: updatedSubjects,
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(inputs);
        sendRequest().then(() => history("academics"));
    };

    const sendRequest = async () => {
        await axios.post("http://localhost:5000/StudentDetails", {
            name: String(inputs.name),
            indexNo: String(inputs.indexNo),
            age: Number(inputs.age),
            grade: String(inputs.grade),
            address: String(inputs.address),
            parentPhone: String(inputs.parentPhone),
            subjects: inputs.subjects.map((subject) => ({
                subjectName: String(subject.subjectName),
                marks: Number(subject.marks),
            })),
        });
    };

    return (
        <div className="container">
            <Navbar/>
            <h1 className="header">Add Student</h1>
            <form onSubmit={handleSubmit} className="form">
                <label className="label">
                    Name:
                    <input
                        type="text"
                        name="name"
                        value={inputs.name}
                        onChange={handleChange}
                        className="input"
                    />
                </label>

                <label className="label">
                    Index No:
                    <input
                        type="text"
                        name="indexNo"
                        value={inputs.indexNo}
                        onChange={handleChange}
                        className="input"
                    />
                </label>

                <label className="label">
                    Age:
                    <input
                        type="number"
                        name="age"
                        value={inputs.age}
                        onChange={handleChange}
                        className="input"
                    />
                </label>

                <label className="label">
                    Grade:
                    <input
                        type="text"
                        name="grade"
                        value={inputs.grade}
                        onChange={handleChange}
                        className="input"
                    />
                </label>

                <label className="label">
                    Address:
                    <input
                        type="text"
                        name="address"
                        value={inputs.address}
                        onChange={handleChange}
                        className="input"
                    />
                </label>

                <label className="label">
                    Parent's Phone:
                    <input
                        type="text"
                        name="parentPhone"
                        value={inputs.parentPhone}
                        onChange={handleChange}
                        className="input"
                    />
                </label>

                <div className="subjectsContainer">
                    <h3>Subjects</h3>
                    {inputs.subjects.map((subject, index) => (
                        <div key={index} className="subject">
                            <label className="label">
                                Subject Name:
                                <input
                                    type="text"
                                    name="subjectName"
                                    value={subject.subjectName}
                                    onChange={(e) => handleSubjectChange(e, index)}
                                    className="input"
                                />
                            </label>

                            <label className="label">
                                Marks:
                                <input
                                    type="number"
                                    name="marks"
                                    value={subject.marks}
                                    onChange={(e) => handleSubjectChange(e, index)}
                                    className="input"
                                />
                            </label>

                            <button
                                type="button"
                                onClick={() => removeSubject(index)}
                                className="removeButton"
                            >
                                Remove Subject
                            </button>
                        </div>
                    ))}
                    <button
                        type="button"
                        onClick={addSubject}
                        className="addButton"
                    >
                        Add Subject
                    </button>
                </div>

                <button type="submit" className="submitButton">Submit</button>
            </form>
        </div>
    );
}

export default AddStudent;
