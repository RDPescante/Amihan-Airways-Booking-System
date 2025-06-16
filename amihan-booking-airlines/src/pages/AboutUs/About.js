import "./about.css"
import MsShaina from "../../assets/MaamShin.jpeg"
import SirLuigi from "../../assets/luigi.jpeg"
import SirRd from "../../assets/sirRd.jpeg"
import MsMg from "../../assets/maam mg.png"
import Jerico from "../../assets/Picture_HD.png"

export default function AboutUs() {
    return (
        <div className="container w-100 min-vh-100">
            <h1 id="AboutUsText" className="text-center m-3">ABOUT US</h1>
            <div className="row justify-content-center mt-4">
                {[
                    { name: 'Shaina Montesor', src: MsShaina, url: "https://github.com/buildwithshin", github: "https://github.com/buildwithshin", },
                    { name: 'Ardee Dwayne Pescante', src: SirRd, url: "https://github.com/RDPescante", github: "https://github.com/RDPescante" },
                    { name: 'Marie Glenn Alano', src: MsMg, url: "https://github.com/marieglennalano",  github: "https://github.com/marieglennalano" },
                    { name: 'Jerico De Jesus', src: Jerico, url: "https://github.com/JericoDj", github: "https://github.com/JericoDj"},
                    { name: 'Luigi Aaron Jacela', src: SirLuigi, url: "https://github.com/luigiaaronjacela", github: "https://github.com/luigiaaronjacela" },
                ].map((member, index) => (
                    <div
                        key={index}
                        className="col-12 col-md-4 mb-4 text-center">
                        <div
                        className="rounded-top d-flex justify-content-center align-items-center mx-auto"
                        style={{
                            backgroundColor: 'black',
                            padding: '1rem',
                            width: '100%',
                            height: '40vh',
                            overflow: 'hidden'
                        }}>
                            <img
                                className="img-fluid justify-content-center mx-auto"
                                
                                src={member.src}
                                alt={member.name}
                                style={{
                                    height: '40vh',
                                    width: 'auto',
                                    maxWidth: '100%',
                                    objectFit: 'cover',
                                }}
                            />
                        </div>

                        <div className="p-3 rounded-bottom" id="aboutUsTextPlaceholder">
                            <a
                                href={member.github}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-decoration-none text-dark"
                            
                            > 
                            <p id="memberPlaceholder" className="m-0 mt-1">{member.github}</p>
                            </a>
                            <a
                                href={member.url}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-decoration-none text-dark"
                            >
                                <h4 id="memberName" className="p-0 m-0 fw-bolder">{member.name}</h4>
                            </a>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}
