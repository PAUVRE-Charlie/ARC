/**
 * This file store an article used in this website
 */

/* Packages */
import React from 'react';

/* Data */
import team from '../team';
import colors from '../colors';

const article = {
    title: "Club robotique de Nantes",
	author: 'Atlantic Robotic Club',
	preview:
		'Cet article présente les membres du club robotique de Nantes.',
	body: {
        all: {
            title: 'Team',
            body: Object.values(team.nantes).map((person) => {
                return (
                    <div key={"person" + person.id} className="sideViewImage avatar" style={{flexDirection: person.id%2 === 0 ? 'row' : 'row-reverse'}}>
                        <div><img src={person.image} alt={"avatar"+person.id}></img></div>
                        <div><h2>{person.firstname + " " + person.lastname}</h2>
                            <p style={{color: colors.secondary}}>{person.nickname}</p>
                            <p style={{color: colors.grey}}>{person.taf}</p>
                            <br/>
                            <p>{person.description}</p>
                        </div>
                    </div>
                )
            })
        }
    }
}

export default article;