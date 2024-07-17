import React from 'react';
import './Student.css';

const Student = ({ student, index }) => {
    const getStatusStyle = (status) => {
        return status === "Fail" ? { color: 'red' } : {};
    };

    return (
        <tr className="student-row">
            <td>{index + 1}</td>
            <td>{student.name}</td>
            <td>{student.department}</td>
            <td>{student.status === "Pass" ? (student.finalGrade !== null ? student.finalGrade : "-") : "-"}</td>
            <td style={getStatusStyle(student.status)}>{student.status}</td>
        </tr>
    );
};

export default Student;
