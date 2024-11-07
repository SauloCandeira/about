import { useEffect, useState } from "react";
import { Link } from 'react-router-dom';
import Countdown2 from "../Countdown/Countdown2";
import { Project, data } from '../../Interfaces/InterfaceProject'; 
import "./Projects.css";

function Projects() {
    const [dates, setDates] = useState<Project[]>([]);

    useEffect(() => {
        setDates(data);
    }, []);

    return (
        <section className="StyleCard">
            <h1 className="marketplace-title">Portifolio</h1>
            <div className="slider owl-carousel">
                {dates.map((item, index) => (
                    <div 
                        className={`card ${item.status === "não iniciado" ? "blur" : ""}`} 
                        key={item.id}
                    >
                        <div className="img"><img src={item.image} alt={item.title} /></div>
                        <div className="content">
                            <div className="title">{item.title}</div>
                            <div className="sub-title">{item.subtitle}</div>
                            <div className="progress-container">
                                <Countdown2 data={new Date(item.date)} title={item.title} />
                                <progress id={`file${index}`} value={item.progress} max="100"></progress>
                                <span id="progress-percentage">{item.progress}%</span>
                            </div>
                            <div className="btn-website">
                                <a href={item.link} target="_blank" rel="noopener noreferrer">
                                    <button>Website</button>
                                </a>
                            </div>
                            <div className="btn">
                                <Link to={`/project/${item.id}`}>
                                    <button>Cronograma</button>
                                </Link>
                            </div>
                        </div>
                        {item.status === "não iniciado" && (
                            <div className="overlay">
                                Em breve...
                            </div>
                        )}
                    </div>
                ))}
            </div>
        </section>
    );
}

export default Projects;
