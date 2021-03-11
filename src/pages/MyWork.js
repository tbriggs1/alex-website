import React from 'react';
import '../styles/mywork.scss';
import Nav from '../components/Nav';
import WorkIntroductionJs from '../components/WorkIntroduction';
import Work from '../components/Work';

const MyWork = () => {
    return (
        <div>
            <Nav />
            <WorkIntroductionJs />
            <Work />
        </div>
    )
}

export default MyWork;

