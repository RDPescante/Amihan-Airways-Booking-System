import "./about.css"

export default function AboutUs() {
    return (
        <div className="container w-100 min-vh-100 ">
            <h1 id="AboutUsText" className="text-center m-4">ABOUT US</h1>
            <div className="row justify-content-center mt-4">
                {[
                    { name: 'Shaina Montesor', src: '' },
                    { name: 'Ardee Dwayne Pescante', src: '' },
                    { name: 'Marie Glenn Alano', src: '' },
                    { name: 'Jerico De Jesus', src: '' },
                    { name: 'Luigi Aaron Jacela', src: '' },
                ].map((member, index) => (
                    <div key={index} className="col-12 col-md-4 mb-4 text-center">
                        <div 
                        className="rounded-top"
                        style={{ backgroundColor: 'black', padding: '6rem',}}>
                            <img
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
                        
                        <div className=" p-3 rounded-bottom" id="aboutUsTextPlaceholder">
                            <p id="memberPlaceholder" className="m-0 mt-1">Full-Stack Web Developer</p>
                            <h4 id="memberName" className="p-0 m-0 fw-bolder">{member.name}</h4>
                        </div>
                        
                    </div>
                ))}
            </div>
        </div>
    );
}
