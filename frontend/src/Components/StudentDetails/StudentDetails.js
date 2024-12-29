import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './StudentDetails.css';
const URL = "http://localhost:5000/StudentDetails";

const fetchHandler = async () => {
    try {
        const response = await axios.get(URL);
        console.log("API Response:", response.data);
        return response.data;
    } catch (err) {
        console.error("API Error:", err);
        return null;
    }
};

function StudentDetails() {
    const [users, setUsers] = useState([]);

    useEffect(() => {
        fetchHandler().then((data) => {
            console.log("Fetched data from API:", data);
            if (data && data.std) {
                setUsers(data.std);
            } else {
                console.log("No data received from API");
            }
        });
    }, []);

    return (
        <div>
            <h1>Hatharaliyadda Primary School</h1>
            <br />
            <h2>Student Details</h2>

            {users.length > 0 ? (
                <table border="1" style={{ width: "100%", borderCollapse: "collapse" }}>
                    <thead>
                        <tr>
                            <th>#</th>
                            <th>Name</th>
                            <th>Index Number</th>
                            <th>Age</th>
                            <th>Grade</th>
                            <th>Address</th>
                            <th>Parent Phone</th>
                            <th>Subjects</th>
                        </tr>
                    </thead>
                    <tbody>
                        {users.map((user, index) => (
                            <tr key={user._id}>
                                <td>{index + 1}</td>
                                <td>{user.name}</td>
                                <td>{user.indexNo}</td>
                                <td>{user.age}</td>
                                <td>{user.grade}</td>
                                <td>{user.address}</td>
                                <td>{user.parentPhone}</td>
                                <td>
                                    {user.subjects
                                        .map((subject) => `${subject.subjectName} (${subject.marks} Marks)`)
                                        .join(", ")}
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            ) : (
                <p>No student details available.</p>
            )}
        </div>
    );
}

export default StudentDetails;
