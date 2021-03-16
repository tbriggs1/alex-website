import React from 'react';
// import 'bootstrap/dist/css/bootstrap.css';
// import '../styles/mywork.scss';
import WorkIntroductionJs from '../components/WorkIntroduction';
import Work from '../components/Work';
import {motion} from 'framer-motion';
import {pageAnimation} from "../components/Animations.js"
const MyWork = () => {
    return (
        <motion.div exit="exit" variants={pageAnimation} initial='hidden' animate='show'>
            <WorkIntroductionJs />
            <Work />
        </motion.div >
    )
}

export default MyWork;

