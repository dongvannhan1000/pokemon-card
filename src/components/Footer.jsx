import '../styles/Footer.css';

export default function Footer() {
    return (
        <div className="footer">
            <span className="author">Nhan Dong</span> 
            <a href="https://github.com/dongvannhan1000" className="github-link">
                <img 
                    src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/github/github-original.svg" 
                    alt="GitHub"
                    className="github-icon"
                />
            </a>
            <span className="year">{new Date().getFullYear()}</span>
        </div>
    );
}