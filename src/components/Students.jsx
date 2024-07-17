import React from 'react';
import Student from './Student.jsx';
import './Students.css';

const Students = () => {
    const students = [
        { name: "Aeron Villafuerte", department: "Science", finalGrade: Math.floor(Math.random() * 41) + 60, status: "Pass" },
        { name: "Darla Kayla M. Ipon", department: "Arts", finalGrade: Math.floor(Math.random() * 41) + 60, status: "Pass" },
        { name: "Vrix Gallon", department: "Commerce", finalGrade: Math.floor(Math.random() * 41) + 60, status: "Pass" },
        { name: "Niko Smith", department: "Science", finalGrade: Math.floor(Math.random() * 41) + 60, status: "Pass" },
        { name: "Alice Gou", department: "Arts", finalGrade: Math.floor(Math.random() * 41) + 60, status: "Pass" },
        { name: "Kai Sotto", department: "Commerce", finalGrade: Math.floor(Math.random() * 41) + 60, status: "Pass" },
        { name: "Justine Bieber", department: "Science", finalGrade: Math.floor(Math.random() * 41) + 60, status: "Pass" },
        { name: "Harry Potter", department: "Commerce", finalGrade: Math.floor(Math.random() * 41) + 60, status: "Pass" },
        { name: "Christian Joe", department: "Arts", finalGrade: null, status: "Fail" },
        { name: "Jack Frost", department: "Science", finalGrade: null, status: "Fail" },    
    ];


    return (
        <div className="students-container">
            <h1>Student Grades</h1>
            <table className="students-table">
                <thead>
                    <tr>
                        <th>No.</th>
                        <th>Student Names</th>
                        <th>Department</th>
                        <th>Final Grade</th>
                        <th>Status</th>
                    </tr>
                </thead>
                <tbody>
                    {students.map((student, index) => (
                        <Student key={index} student={student} index={index} />
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default Students;
