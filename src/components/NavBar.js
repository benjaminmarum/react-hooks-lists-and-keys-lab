import React from "react";

function NavBar() {
  const links = ["home", "about", "projects"];

  const linkEls = links.map((link)=>{
    let string = `#`+link
    console.log(string)
    return <a key={link} href={string}>{link}</a>
  })

  
  return <nav>{linkEls}</nav>;
}

export default NavBar;
