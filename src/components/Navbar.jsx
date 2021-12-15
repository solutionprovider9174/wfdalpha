import React from 'react';
import ConnectWallet from './ConnectWallet';
//
<<<<<<< Updated upstream
=======
import '../styles/custom.css';

>>>>>>> Stashed changes

export default function WithSubnavigation() {
  // const { isOpen, onToggle } = useDisclosure();
  const isOpen = true;
  const onToggle = true;

<<<<<<< Updated upstream
=======
  function gotoLocation(href){
    if(typeof document !== 'undefined')
      document.location = href;
  }
  
>>>>>>> Stashed changes
  return (
    <div style={{width:'100%'}}>
      <div
        style={{display:'flex', backgroundColor:'#313131', height:'60px', padding:'2px', alignItems:'center', justifyContent:'space-between'}}>
        <div style={{display:'flex'}}>
<<<<<<< Updated upstream
          <div style={{cursor:'pointer'}} onClick={()=>{document.location="/"}}>
            <img
                alt={'Wefund'}
                src={
                  '/WeFund%20Logos%20only.png'
=======
          <div style={{cursor:'pointer'}}
             onClick={()=>{gotoLocation("/")}}>
            <img
                alt={'Wefund'}
                src={
                  'WeFund%20Logos%20only.png'
>>>>>>> Stashed changes
                }
                style={{height:'40px'}}
              />
          </div>
          <DesktopNav/>
        </div>
        <div style={{display:'flex', alignItems:'center'}}>
          <a href="/startup" className="navitem">Browse Project</a>
          <div style={{marginLeft:'20px', width:'130px'}}>
            <button
                className="btn btn-green"
                type="button"
                width="150px"
<<<<<<< Updated upstream
                onClick={()=>{document.location='/dogether'}}
=======
                onClick = {()=>(gotoLocation('/dogether'))}
>>>>>>> Stashed changes
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

  return (
    <>
      {NAV_ITEMS.map((navItem, index) => (
<<<<<<< Updated upstream
        <div key={index} className="btn-group" style={{cursor:'pointer'}}>
          {navItem.children &&
          <>
            <a href={navItem.href} type="button" className={"btn btn-danger "+ (navItem.children ? "dropdown-toggle":"")} data-bs-toggle="dropdown" aria-expanded="false" style={{color:'white'}}>
              {navItem.label}
            </a>
            <ul className="dropdown-menu" style={{width:'380px', padding:'10px', backgroundColor:'black'}}>
              {navItem.children.map((childitem, index) => (
                <li key={index}>
=======
        <div class="btn-group" style={{cursor:'pointer'}}>
          <a href={navItem.href} type="button" class={"btn btn-danger "+ (navItem.children ? "dropdown-toggle":"")} data-bs-toggle="dropdown" aria-expanded="false" style={{color:'white'}}>
            {navItem.label}
          </a>
          {navItem.children &&
            <ul class="dropdown-menu" style={{width:'380px', padding:'10px', backgroundColor:'black'}}>
              {navItem.children.map((childitem, index) => (
                <li>
>>>>>>> Stashed changes
                  <div style={{margin:'20px'}} >
                    <a href={childitem.href} className="navitem">
                    <p style={{marginBottom:'5px', fontSie:'large'}}>{childitem.label}</p>
                    <p style={{marginTop:'0px', fontSize:'small'}}>{childitem.subLabel}</p>
                    </a>
                  </div>
                </li>
              ))}
            </ul>
<<<<<<< Updated upstream
          </>
          }
          {navItem.href &&
            <a href={navItem.href} type="button" className={"btn btn-danger"} style={{color:'white'}}>
              {navItem.label}
            </a>
=======
>>>>>>> Stashed changes
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
        label: 'Explore Project',
        subLabel: 'Explore Project that you might be passionate about!',
        href: '/startup',
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
<<<<<<< Updated upstream
  {
    label: 'InvestForm',
    href: '/investform'
  }
=======
>>>>>>> Stashed changes
];