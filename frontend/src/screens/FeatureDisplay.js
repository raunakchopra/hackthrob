import React from 'react'

const FeatureDisplay = () => {
    return (
        <div className="w-screen bg-red-200 ">
            <div className="w-full flex flex-col items-center py-8">
                <h1 className="mb-8 font-bold text-xl">What are you looking for?</h1>
                <button className="focus:outline-none text-white mb-4 w-1/3 text-lg font-bold rounded-full p-4 bg-schemeColor">Anonymous Dating</button>
                <button className="text-white text-lg focus:outline-none mb-4 w-1/3 font-bold rounded-full p-4 bg-schemeColor">Curated Events</button>
                <button className="text-white text-lg font-bold w-1/3 mb-4 focus:outline-none rounded-full p-4 bg-schemeColor">Virtual Speed Dating</button>
            </div>
        </div>
    )
}

export default FeatureDisplay
