import React from 'react'

function Figure({title, value, unit}) {
    return(
        <div className="">
            <div className="font-bold text-gray-900 text-xl">
                {title}
            </div>
            <div className="text-gray-700 text-xl">
                {value}{unit}
            </div>
        </div>
    )
}
function Table({datas}) {
    return(
        <table class="table-fixed border w-full">
            <thead>
                <tr>
                    {
                        datas.map(figure =>
                            <th class="w-1/5 border text-xl h-14">{figure.title}</th>)
                    }                    
                </tr>
            </thead>
            <tbody>                
                <tr>                
                   { 
                        datas.map(figure =>
                            <td className="border text-center text-gray-700 text-xl h-14">{figure.value}{figure.unit}</td>  ) 
                    }
                </tr>                
            </tbody>
        </table>
    )
}
function ConsensusValue({figures}) {
    return(figures.map(figure =>
            <Figure title={figure.title} value={figure.value} unit={figure.unit} /> 
        ))
}

function CompanyConsensus() {
    const figures = [{title:"PER",value:"21.48", unit:"배"},
                    {title:"PBR",value:"2.09", unit:"배"},
                    {title:"EPS",value:"5,072", unit:"원"},
                    {title:"...",value:"...", unit:""},
                    {title:"...",value:"...", unit:""},];
    
    return (
        // <div className="w-9/12 m-auto flex justify-between mt-20">
        //     {
        //         figures.map(figure =>
        //             <Figure title={figure.title} value={figure.value} unit={figure.unit} /> )
        //     }            
        // </div>
        <div className="w-9/12 m-auto mt-20">
            <Table datas={figures}/>
        </div>
    )
}

export default CompanyConsensus
