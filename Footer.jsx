import React from "react";

function Footer() {
  const curentyear = new Date().getFullYear();
  return (
    <div>
      <footer>
        <p> Copyright @ {curentyear} </p>
      </footer>
    </div>
  );
}

export default Footer;
