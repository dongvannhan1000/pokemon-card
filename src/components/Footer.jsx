import '../styles/Footer.css';

export default function Footer() {
    return (
        <div className="footer">
            <span className="author">Nhan Dong</span> 
            <a href="https://github.com/SimoneMorella" className="github-link">
                &#xe100; {/* This is a placeholder. Use an appropriate GitHub icon Unicode */}
            </a>
            <span className="year">{new Date().getFullYear()}</span>
        </div>
    );
}