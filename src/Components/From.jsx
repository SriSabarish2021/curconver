import React from 'react'
import '../Styles/From.css'
const From = ({bywhich,read,list,thisis,getthis,totamt,settotamt,dispamt}) => {

    
  return (
    <div className='boxer'>
      <div className='withinbox'>
        <p>{bywhich}</p>
        {read?<input  type="number" placeholder={read?'Enter AMT':''} value={totamt} onChange={(e)=>settotamt(e.target.value)}/>:<input  type="number" value={dispamt} readOnly />}
      </div>
      <div className='withinbox'>
        <p>{bywhich}</p>
        <select  value={thisis} onChange={(e)=>getthis(e.target.value)}>
            {list.map((indikey)=>
            <option key={indikey} value={indikey}>{indikey}</option>
            )}
        </select>
      </div>
    </div>
  )
}

export default From
