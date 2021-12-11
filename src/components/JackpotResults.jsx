import React, { useState, useCallback } from 'react'
import { useStore } from '../store'
import numeral from 'numeral'

import { Trophy, ArrowCircleLeft, ArrowCircleRight } from 'phosphor-react'
import PriceLoader from './PriceLoader'

export default function JackpotResults() {
    const { state, dispatch } = useStore()
    const [projectID, setProjectID] = useState(0);
    let projectBacked = 0,  WFDFee = 0;
    let project;
    let projectCount = state.projectData.length;


    const changeSelect = (type) =>{
        if(type == "prev" && projectID > 0)
            setProjectID(projectID - 1);
        else if(type == 'next' && projectID+1< projectCount)
            setProjectID(projectID + 1);

        dispatch({
            type: 'setProjectID',
            message: projectID,
        })
        explorerData();
    }

    const explorerData = () => {
        try {
console.log("explorerData");            

            project = state.projectData[projectID]

            projectBacked = 0;
            for(let i=0; i<project.backer_states.length; i++)
                projectBacked += parseInt(project.backer_states[i].amount.amount);
            projectBacked /= 10**6;
            WFDFee = projectBacked /100 * 5;
        } catch (e) {
            console.log(e, 'no found')
        }
    }

    explorerData();
    return (
        <div className="container" style={{ marginTop: '7rem' }}>
            <div className="card lota-card">
                <div className="card-header text-center">
                    <div className="card-header-icon">
                        <Trophy size={90} color="#20FF93" />
                    </div>
                    <h3>
                        {projectID} Project Backed by WeFund
                    </h3>
                    <div className="btn-group w-100">
                        <button
                            className="btn btn-default"
                            // disabled={
                            //     projectID == 1
                            //         ? true
                            //         : false
                            // }
                            onClick={() => changeSelect('prev')}
                        >
                            <ArrowCircleLeft size={24} />
                        </button>
                        <button
                            className="btn btn-default"
                            onClick={() => {document.location.href=`/projectdetail/id:${projectID}`}}
                        >
                            View Detail
                        </button>
                        <button
                            className="btn btn-default"
                            // disabled={
                            //     projectID+1 >= projectCount
                            //         ? true
                            //         : false
                            // }
                            onClick={() => changeSelect('next')}
                        >
                            <ArrowCircleRight size={24} />
                        </button>
                    </div>
                </div>
                <div className="card-body">
                    <div className="w-100 text-center latest-combination">
                        <h4 style={{ color: '#ff36ff' }}>
                            Project backed
                        </h4>                     
                        <p>
                            {projectBacked}
                        </p>
                    </div>
                    <h4 className="mt-4">Ranking</h4>
                    <div className="table-responsive">
                        <table className="table text-white mb-3">
                            <thead>
                                <tr>
                                    <th>ID</th>
                                    <th>Name</th>
                                    <th>PrjWallet</th>
                                    <th>Website</th>
                                    <th>Email</th>
                                    <th>Category</th>
                                    <th>EcoSystem</th>
                                    <th>Collected</th>
                                    <th>CreatorWallet</th>
                                </tr>
                            </thead>
                            <tbody>
                                {project &&
                                <tr>
                                    <td>{project.project_id}</td>
                                    <td>{project.project_name}</td>
                                    <td>{project.project_wallet}</td>
                                    <td>{project.project_website}</td>
                                    <td>{project.project_emai}</td>
                                    <td>{project.project_category}</td>
                                    <td>{project.project_ecosystem}</td>
                                    <td>{project.project_collected}</td>
                                    <td>{project.creator_wallet}</td>
                                </tr>
                                }
                            </tbody>
                        </table>
                    </div>
                    
                </div>
            </div>
        </div>
    )
}
