import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom'
import React from 'react'

import Index from 'pages/Index'
import ExplorerProject from 'pages/Explorer'
import CreateProject from 'pages/CreateProject'
import BackProject from 'pages/BackProject'
import ProjectDetail from 'pages/ProjectDetail'

const AppRouter = () => {
return (
    <Router>
        <Routes>
            {/* Candidate */}
            <Route path="/" element={<Index />}>
            </Route>
            <Route path='/explorer' element={<ExplorerProject/>}>
            </Route>
            <Route path='/create' element={<CreateProject/>}>
            </Route>
            <Route path='/back' element={<BackProject/>}>
            </Route>
            <Route path='/detail' element={<ProjectDetail/>}>
            </Route>            
        </Routes>
    </Router>
)}

export default AppRouter