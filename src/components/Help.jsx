import React, { useState } from 'react'



export default function Help() {
    return (
        <div className="container">
                <div className="row">
                    <div className="col-12">
                        <div
                            className={
                                'card proj-details-block' + (viewdetails ? ' active' : '')
                            }
                        >
                            <div className="card-header">
                                <h3>Project Details Overview</h3>
                                <button
                                    className="toggle"
                                    onClick={() => setViewdetails(!viewdetails)}
                                >
                                    <X size={36} />
                                </button>
                            </div>
                            <div className="card-body">
                             <div className="col-12 text-center view-details-inline b-bord">
                                <div className="col-md-3 text-center"><h4>Project name: </h4></div>
                                <div className="col-md-9 text-center"><h2>Project name</h2></div>
                            </div>
                            <div className="col-12 text-center view-details-inline b-bord">
                                <div className="col-md-3 text-center"><h4>Project Description: </h4></div>
                                <div className="col-md-9 text-center"><h4>Our project is for crowdfunding platform like world top dapp wefund.app, we are trying to gather assets from world and world level developers and designers. thanks regards</h4></div>
                            </div>
                            <div className="col-12 text-center view-details-inline b-bord">
                                <div className="col-md-3 text-center"><h4>WebSite : </h4></div>
                                <div className="col-md-9 text-center"><h2>Project WebSite </h2></div>
                            </div>
                            <div className="col-12 text-center view-details-inline b-bord">
                                <div className="col-md-3 text-center"><h4>Project WhitePaper: </h4></div>
                                <div className="col-md-9 text-center"><h2>Project WhitePaper</h2></div>
                            </div>
                            <div className="col-12 text-center view-details-inline b-bord">
                                <div className="col-md-3 text-center"><h4>Project Team Description: </h4></div>
                                <div className="col-md-9 text-center"><h4>Our team is very talendted for this job done. we will try our best for delivering this project within your deadline and your money limit. thanks.</h4></div>
                            </div>
                            <div className="col-12 text-center view-details-inline b-bord">
                                <div className="col-md-3 text-center"><h4>Amount: </h4></div>
                                <div className="col-md-9 text-center"><h2>1259UST</h2></div>
                            </div>
                            <div className="col-12 text-center view-details-inline">
                                <div className="col-md-3 text-center"><h4>TimeLine: </h4></div>
                                <div className="col-md-9 text-center"><h2>15days</h2></div>
                            </div>
                                <button
                                    onClick={() => setTicketModal(!ticketModal)}
                                    className="btn btn-default w-100 mb-3 mt-3"
                                    style={{
                                        fontSize: '18px',
                                        fontWeight: 'bold',
                                        padding: '11px 5px',
                                        borderBottom: '4px solid #10003b',
                                    }}
                                >
                                    <PencilLine
                                        size={24}
                                        color={'#ff36ff'}
                                        style={{
                                            marginTop: '-1px',
                                            marginRight: '5px',
                                        }}
                                    />
                                    Help to create your idea
                                </button>
                                <button
                                    onClick={() => execute()}
                                    className="btn btn-special w-100"
                                    disabled={amount <= 0}
                                >
                                    {!buyLoader ? (
                                        <>Back {amount} Crypto Of Duty</>
                                    ) : (
                                        <div
                                            className="spinner-border spinner-border-sm"
                                            role="status"
                                            style={{
                                                position: 'relative',
                                                top: '-3px',
                                            }}
                                        >
                                            <span className="visually-hidden">
                                                Loading...
                                            </span>
                                        </div>
                                    )}
                                </button>
                            </div>
                        </div>
                        
                    </div>
                </div>
                
            </div>
    )
}
