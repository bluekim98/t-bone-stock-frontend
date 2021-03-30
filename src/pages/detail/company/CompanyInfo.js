import React from 'react'

function CompanyName({companyName}) {
    return(
        <div className="text-4xl font-bold">
            {companyName}
        </div>
    )
}
function Figure({title, figure}) {
    return(
        <div className="ml-10">
            <div className="font-bold text-gray-700">
                {title}
            </div>
            <div className="text-gray-700">
                {figure}
            </div>
        </div>
    )
}
function Sector({sectors}) {
    return(
        sectors.map(sector => 
        <div className="bg-gray-800 text-white font-bold w-1/4 m-w-1/4 text-center text-l m-auto p-3 border rounded-full">
            {sector}
        </div>)
    )
}

function CompanyInfo() {
    const sectors = ["IM", "반도체", "CE"];
    return (
        <div className="justify-center h-px100 flex mt-16 pt-5">
            <div className="flex w-6/12">
                <CompanyName companyName={"삼성전자"} />
                <Figure title="시가총액" figure={"493조 1,040억원"} />            
                <Figure title="주가" figure={"82300원"} />            
            </div>            
            <div className="w-3/12 flex justify-around">
                <Sector sectors={sectors}/>
            </div>
        </div>
    )
}

export default CompanyInfo
