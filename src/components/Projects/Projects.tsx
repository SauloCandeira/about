import { useEffect, useState } from "react";
import { Link } from 'react-router-dom';
import Countdown2 from "../Countdown/Countdown2";
// import MarketCap from "../MarketCap/MarketCap";
import { Project, data } from '../../Interfaces/InterfaceProject'; // Importando a interface Project e a variável data
import "./Projects.css";

function Projects() {
    const [dates, setDates] = useState<Project[]>([]);

    useEffect(() => {
        // Simulando a obtenção dos dados do Firebase com os dados do JSON
        setDates(data);
    }, []);

    return (
        <section className="StyleCard">
            <h1 className="marketplace-title">Portifolio</h1>
            <div className="slider owl-carousel">
                {dates.map((item, index) => (
                    <div className="card" key={item.id}>
                        <div className="img"><img src={item.image} alt="" /></div>
                        <div className="content">
                            <div className="title">{item.title}</div>
                            <div className="sub-title">{item.subtitle}</div>
                            <div className="progress-container">
                                <Countdown2 data={new Date(item.date)} title={item.title} />
                                {/* <MarketCap
                                    totalCost={item.budget.totalCost}
                                    totalSales={item.budget.totalSales}
                                    dailyVariation={item.dailyVariation}
                                /> */}
                                <progress id={`file${index}`} value={item.progress} max="100"></progress>
                                <span id="progress-percentage">{item.progress}%</span>
                            </div>
                            <div className="btn-website">
                                <button>
                                    <a href={item.link} target="_blank" rel="noopener noreferrer">
                                        Website
                                    </a>
                                </button>
                            </div>
                            <div className="btn">
                                <Link to={`/project/${item.id}`}>
                                    <button>Cronograma</button>
                                </Link>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
}

export default Projects;