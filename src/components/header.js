import React from 'react';

import TopNav from './top-nav';
import InfoModal from './info-modal';

import './header.css';

export default function Header(props) {

    if (!props.infoModal) {
        return (
            <header>
                <TopNav
                    newGame={() => props.newGame()}
                    toggleInfoModal={() => props.toggleInfoModal()}
                />
                <h1>HOT or COLD</h1>
            </header>
        )
    } else {
        return (
            <header>
                <TopNav
                    newGame={() => props.newGame()}
                    toggleInfoModal={() => props.toggleInfoModal()}
                />
                <InfoModal 
                    toggleInfoModal={() => props.toggleInfoModal()}
                />
                <h1>HOT or COLD</h1>
            </header>
        )
    }
};
