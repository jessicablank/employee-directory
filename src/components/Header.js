import React from "react";

function Header() {
    const styles = {
        jumbotronColor: {
          background: "darkblue",
        },
        textSize: {
            fontSize: 60
        }
      };
    return (
        <div className="jumbotron jumbotron-fluid" style={styles.jumbotronColor}>
            <div className="container">
                <h1 className="display-4 text-center font-weight-bold" style={styles.textSize}><i className="fas fa-address-book"></i> EMPLOYEE DIRECTORY</h1>
                <h4 className="text-center">Sort by First Name and Search by State</h4>
            </div>
        </div>
    );
}

export default Header;