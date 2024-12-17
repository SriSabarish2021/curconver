import { useEffect, useState } from 'react'
import './App.css'
import Button from './Components/Button'
import From from './Components/From'
import Header from './Components/Header'
import Swap from './Components/Swap'

function App() {
  let from='From'
  let to='To'
  let readonly=true
  let notread=false

  const [list,setlist]=useState([])
  const [fromval,setfrom]=useState('INR')
  const [toval,setto]=useState('USD')
  const [totamt,settotamt]=useState(0)
  const [dispamt,setdispamt]=useState()

  const [obj,setobj]=useState({})
  useEffect(() => {

    let gettingdata=async()=>{
      try{
        let fetching=await fetch(`https://v6.exchangerate-api.com/v6/b4be06c6e42246cc91f78147/latest/${fromval}`)
        if(!fetching.ok)throw Error('The Server is not reachable');
        let jsondata=await fetching.json()
        setlist(Object.keys(jsondata.conversion_rates))
        console.log(list);
        setobj(jsondata.conversion_rates)
        
      }
      catch(err){
        window.alert(err)
      }
      finally{
        console.log("Fetched Successfully");
        
      }
    }
    gettingdata()
  
    return () => {
      setlist([])
    }
  }, [fromval])
  
  let getamt=()=>{
    let getamount=Number(totamt*obj[toval]).toFixed(2)
    setdispamt(getamount)
  }

  let swapinfo=()=>{
    setfrom(toval)
    setto(fromval)
  }

  return (
    <div className='app'>
      <Header/>
      <From getthis={setfrom} thisis={fromval} list={list} settotamt={settotamt}  bywhich={from} read={readonly}/>
      <Swap swapinfo={swapinfo}/>
      <From  getthis={setto} dispamt={dispamt} totamt={totamt} settotamt={settotamt} thisis={toval} list={list} bywhich={to}  read={notread}/>
      <Button getamt={getamt} fromval={fromval} toval={toval}/>
    </div>
  )
}

export default App
