import React, { useEffect, useState } from 'react'
import toast, { Toaster } from 'react-hot-toast';
import "./../index.css"
import ScoreCard from '../components/ScoreCard';

function Home() {
    const [scoreA, setScoreA] = useState(0);
    const [scoreB, setScoreB] = useState(0);
    const [winner, setWinner] = useState(null);
    const MAX_SCORE = 10;

    useEffect(() => {
        if (scoreA < MAX_SCORE && scoreB < MAX_SCORE) {
            return;
        }
        if (scoreA === MAX_SCORE) {
            setWinner("Team A");
            toast.success("Team A wins!");
        }
        if (scoreB === MAX_SCORE) {
            setWinner("Team B");
            toast.success("Team B wins!");
        }
    }, [scoreA, scoreB]);


    return (
        <div className=' bg-cyan-200 min-h-screen'>
            <h1 className='text-4xl text-center mb-8 font-serif pt-8'>Points Counter</h1>
            <p>{winner}</p>
            <div className='flex bg-slate-700 mx-90 rounded-xl '>
                <ScoreCard
                    score={scoreA}
                    team="TeamA"
                    incScore={() => {
                        if(winner) return;
                        setScoreA(scoreA + 1)
                    }}
                    decScore={() => {
                        if(winner) return;
                        setScoreA(scoreA - 1)
                    }}
                    winner={winner}
                />

                <ScoreCard
                    score={scoreB}
                    team="TeamB"
                    incScore={() => {
                        if(winner) return;
                        setScoreB(scoreB + 1)
                    }}
                    decScore={() => {
                        if(winner) return;
                        setScoreB(scoreB - 1)
                    }}
                    winner={winner}
                />




            </div>
            <div className='text-cyan-300 text-2xl mx-[600px] mt-10 shadow-4xl'>
                <button onClick={() => {
                    setScoreA(0);
                    setScoreB(0);
                    setWinner(null)
                }}
                    className='bg-slate-700 px-9 py-2 rounded-lg   hover:rounded-xl hover:bg-slate-600 hover:cursor-pointer'>
                    Reset
                </button >
            </div>
            <Toaster />
        </div>
    )
}

export default Home