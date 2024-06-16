// Courses.tsx

import React from 'react';
import './Courses.css';

interface Course {
    id: number;
    title: string;
    description: string;
    image: string;
    link: string;
    price: number; // Novo campo para o preço do curso
}

const courses: Course[] = [
    {
        id: 1,
        title: 'Como criar e hospedar um website',
        description: 'Aprenda a criar e hospedar seu próprio website de forma moderna e eficiente.',
        image: 'https://via.placeholder.com/150',
        link: 'https://example.com/course1',
        price: 49 // Preço do curso
    },
    {
        id: 2,
        title: 'Curso de React Avançado',
        description: 'Domine o desenvolvimento de aplicações web com React.',
        image: 'https://via.placeholder.com/150',
        link: 'https://example.com/course2',
        price: 79 // Preço do curso
    },
    // Adicione mais cursos conforme necessário
];

const Courses: React.FC = () => {
    return (
        <div className="courses-container">
            <h1>Cursos Disponíveis</h1>
            <div className="courses-list">
                {courses.map(course => (
                    <div key={course.id} className="course-card">
                        <img src={course.image} alt={course.title} className="course-image" />
                        <h2>{course.title}</h2>
                        <p>{course.description}</p>
                        <p><strong>Preço:</strong> R$ {course.price.toFixed(2)}</p>
                        <a href={course.link} target="_blank" rel="noopener noreferrer" className="course-link">
                            Acessar Curso
                        </a>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Courses;
