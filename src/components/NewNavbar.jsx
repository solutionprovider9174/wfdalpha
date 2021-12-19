import React from "react"
import "../styles/Navbar.css"

export default function Header() {
  return (
    <div className="header">
      <div className="flex-row">
        <div className="group-649 flex-row">
          <img
            src="https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/c43a/2ce4/f46f30a7cdda94bd3f42ff01d3e7fc83"
            alt="image not found"
            className="bitmap"
          />
          <div className="flex-row-vcenter">
            <p className="txt-448 flex-hend">Projects</p>
            <img
              src="https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/f5b8/95fc/71e1c040e0d4d2a9bf64a183897fe924"
              alt="image not found"
              className="arrow-down-2"
            />
            <p className="txt-017 flex-hend">Career</p>
            <img
              src="https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/9ae9/1da2/784c8e96b3f04c5b0bbfd984da6667d7"
              alt="image not found"
              className="arrow-down-3"
            />
            <p className="txt-1011">Contact</p>
            <p className="txt-996">Blog</p>
            <p className="txt-447">Browse Project</p>
          </div>
        </div>
        <div className="create-your-project">
          <p className="txt-684 flex-hcenter">Create Your Project</p>
        </div>
        <div className="connect-wallet">
          <p className="txt-516 flex-hcenter">Connect Wallet +</p>
        </div>
      </div>
    </div>
  )
}
