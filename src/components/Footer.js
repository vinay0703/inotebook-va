import React from 'react';

export default function Footer() {
    return (
        <div className="bg-dark" style={{ color: "white"}} id = "footer">
            <footer className="d-flex flex-wrap justify-content-around align-items-center py-3 mx-5 footer">
                <div className="col-md-4 d-flex align-items-center">
                <span className="text-muted"><h5>&copy; va</h5></span>
                </div>
                <ul className="nav col-md-4 justify-content-end list-unstyled d-flex">
                <li className="ms-3"><a className="text-muted" rel="noopener noreferrer" href="https://twitter.com/AVINAY18181818" target={'_blank'}><i className="fab fa-twitter fa-lg"></i></a></li>
                <li className="ms-3"><a className="text-muted" rel="noopener noreferrer" href="https://www.instagram.com/vinayaraveti/?hl=en" target={'_blank'}><i className="fab fa-instagram fa-lg"></i></a></li>
                <li className="ms-3"><a className="text-muted" rel="noopener noreferrer" href="https://www.facebook.com/profile.php?id=100008774533376" target={'_blank'}><i className="fab fa-facebook fa-lg"></i></a></li>
                </ul>
            </footer>
        </div>
    )
}