import React from 'react'
import { SquarePlus as IconSquarePlus } from "lucide-react"
import { SquareMinus as IconSquareMinus } from 'lucide-react';

function ScoreCard({score, incScore, decScore, team, winner}) {
    const isWinner = winner ===team;
    return (

        <div className='ht-10 bg-slate-500 p-8 m-8  rounded-lg w-[250px] drop-shadow-lg' >
            <h2 className='text-cyan-300 text-4xl text-center'>{team} {isWinner? "🏆" : ""}</h2>
            <h3 className='text-4xl text-center mt-5'>{score}</h3>

            {winner? null : (
            <div className='flex justify-around mb-5 mt-12 '>
                <IconSquareMinus size={40} color='cyan' onClick={decScore} className='cursor-pointer' />
                <IconSquarePlus size={40} color='cyan' onClick={incScore}
                    className='cursor-pointer' />

            </div>
            )}
        </div>

    )
}

export default ScoreCard