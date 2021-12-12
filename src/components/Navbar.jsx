import React from 'react';
import ConnectWallet from './ConnectWallet';
import { Outlet, useNavigate } from 'react-router-dom'
//

export default function WithSubnavigation() {
  // const { isOpen, onToggle } = useDisclosure();
  const isOpen = true;
  const onToggle = true;
  const navigate = useNavigate();

  return (
    <div style={{width:'100%'}}>
      <div
        style={{display:'flex', backgroundColor:'#313131', height:'60px', padding:'2px', alignItems:'center', justifyContent:'space-between'}}>
        <div style={{display:'flex'}}>
          <div style={{cursor:'pointer'}} onClick={()=>{navigate("/")}}>
            <img
                alt={'Wefund'}
                src={
                  '/WeFund%20Logos%20only.png'
                }
                style={{height:'40px'}}
              />
          </div>
          <DesktopNav/>
        </div>
        <div style={{display:'flex', alignItems:'center'}}>
          <a onClick={()=>{navigate("/create")}} className="navitem" 
          style={{cursor:'pointer'}}>Browse Project</a>
          <div style={{marginLeft:'20px', width:'130px'}}>
            <button
                className="btn btn-green"
                type="button"
                width="150px"
                onClick={()=>{navigate('/dogether')}}
            >
                Create Project
            </button>
          </div>
          <div style={{marginLeft:'20px',marginRight:'20px', width:'130px'}}>
          <ConnectWallet/>
          </div>
        </div>
      </div>
      {/* <Collapse in={isOpen} animateOpacity>
        <MobileNav />
      </Collapse> */}
    </div>
  );
}
const DesktopNav = () => {
  const linkColor = 'white';
  const linkHoverColor = 'red';
  const popoverContentBgColor ='green';
  const navigate = useNavigate();

  return (
    <>
      {NAV_ITEMS.map((navItem, index) => (
        <div key={index} className="btn-group" style={{cursor:'pointer'}}>
          {navItem.children &&
          <>
            <a style={{cursor:'pointer'}} type="button" className={"btn btn-danger "+ (navItem.children ? "dropdown-toggle":"")}  data-bs-toggle="dropdown" aria-expanded="false" style={{color:'white'}}>
              {navItem.label}
            </a>
            <ul className="dropdown-menu" style={{width:'380px', padding:'10px', backgroundColor:'black'}}>
              {navItem.children.map((childitem, index) => (
                <li key={index}>
                  <div style={{margin:'20px'}} >
                    <a onClick={()=>{navigate(childitem.href)}} style={{cursor:'pointer'}}  className="navitem">
                    <p style={{marginBottom:'5px', fontSie:'large'}}>{childitem.label}</p>
                    <p style={{marginTop:'0px', fontSize:'small'}}>{childitem.subLabel}</p>
                    </a>
                  </div>
                </li>
              ))}
            </ul>
          </>
          }
          {navItem.href &&
            <a onClick={()=>{navigate(navItem.href)}} type="button" className={"btn btn-danger"} style={{color:'white'}}>
              {navItem.label}
            </a>
          }
          </div>
      ))}
    </>
  );
};

const NAV_ITEMS = [
  {
    label: 'Projects',
    children: [
      {
          label: 'Create Project',
          subLabel: 'Create Project',
          href: '/create',
      },
      // {
      //     label: 'Back to Project',
      //     subLabel: 'Back to Project',
      //     href: '/backproject',
      // },
      // {
      //     label: 'Project Detail',
      //     subLabel: 'Project Detail',
      //     href: '/projectdetail',
      // },
      {
        label: 'Explore Project',
        subLabel: 'Explore Project that you might be passionate about!',
        href: '/explorer',
      },
      {
        label: 'See Our Guidelines on Creating A Project',
        subLabel: 'Wnat to fund your project? Or open up investment opportunities for your project? See here',
        href: '/dogether',
      },
    ],
  },
  {
    label: 'Career',
    children: [
      {
        label: 'Job Board',
        subLabel: 'Join our team',
        href: '#',
      },
      {
        label: 'Freelance Projects',
        subLabel: 'An exclusive list for contract work, 1-4 weeks',
        href: '#',
      },
    ],
  },
  {
    label: 'Contact',
    href: '/#Contactme',
  },
  {
    label: 'Blog',
    href: '#',
  },
  {
    label: 'InvestForm',
    href: '/investform'
  }
];