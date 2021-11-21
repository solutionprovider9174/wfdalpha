import { Button } from 'bootstrap';
import React from 'react';
import ConnectWallet from './ConnectWallet';
//

export default function WithSubnavigation() {
  // const { isOpen, onToggle } = useDisclosure();
  const isOpen = true;
  const onToggle = true;

  return (
    <div style={{width:'100%'}}>
      <div
        style={{display:'flex', backgroundColor:'#313131', height:'60px', padding:'2px', alignItems:'center', justifyContent:'space-between'}}>
        <div style={{display:'flex'}}>
          <div style={{cursor:'pointer'}} onClick={()=>{document.location="/"}}>
            <img
                alt={'Wefund'}
                src={
                  'WeFund%20Logos%20only.png'
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
                onClick={()=>{document.location='/dogether'}}
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
        <div class="btn-group" style={{cursor:'pointer'}}>
          <a href={navItem.href} type="button" class={"btn btn-danger "+ (navItem.children ? "dropdown-toggle":"")} data-bs-toggle="dropdown" aria-expanded="false" style={{color:'white'}}>
            {navItem.label}
          </a>
          {navItem.children &&
            <ul class="dropdown-menu" style={{width:'380px', padding:'10px', backgroundColor:'black'}}>
              {navItem.children.map((childitem, index) => (
                <li>
                  <div style={{margin:'20px'}} >
                    <a href={childitem.href} className="navitem">
                    <p style={{marginBottom:'5px', fontSie:'large'}}>{childitem.label}</p>
                    <p style={{marginTop:'0px', fontSize:'small'}}>{childitem.subLabel}</p>
                    </a>
                  </div>
                </li>
              ))}
            </ul>
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
];