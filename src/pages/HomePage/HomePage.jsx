import React from 'react';
import { InfoSection } from '../../components';
import { HomeObjOne, HomeObjTwo } from './Data';

function HomePage(props) {
    return (
        <>
            <InfoSection {...HomeObjOne} />
            <InfoSection {...HomeObjTwo} />

        </>
    );
}

export default HomePage;