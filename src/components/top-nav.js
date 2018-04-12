import React from 'react';

import './top-nav.css';

export default function TopNav(props) {
    return (
        <nav>
            <ul className="clearfix">
                <li>
                    <a className="what"
                        href="#"
                        onClick={(event) => {
                            event.preventDefault();
                            props.toggleInfoModal();
                        }}>
                        What?
                    </a>
                </li>
                <li>
                    <a className="new"
                        href="#"
                        onClick={(event) => {
                            event.preventDefault();
                            props.newGame();
                        }}>+ New Game</a>
                </li>
            </ul>
        </nav>
    );
}

