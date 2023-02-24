import React from 'react'
import { Form ,Col, Button} from 'react-bootstrap'
import { useState ,useEffect} from 'react'


const getdatafromLS=() =>{
  const data = localStorage.getItem("formData")
  if(data){
    return JSON.parse(data)
  }
  else{
    return []
  }
}



const Header = ({getDataLS}) => {

    const [myData,setMyData] = useState(getdatafromLS())

    // input form
    const [initalval,setInitialValue] =useState({
      type:"",
      description:"",
      amont:"",
      date:""
    })
 
   

    const handlesumit =(e) =>{
        e.preventDefault();

       // setMyData((prevValue) =>[...prevValue,initalval]) //this is also work

        setMyData(([...myData,initalval]))
        initalval.amont=''
        initalval.date=''
        initalval.description=''
        initalval.type=''


    }

    useEffect(()=>{

        localStorage.setItem("formData",JSON.stringify(myData))

    

    },[myData  ])


  return (
    <>
    <Form  className='Header-frame'>

        <h2>My Diary</h2>

      <div className='Header-tag'>  

        <Form.Group className='Frame-bg' as={Col}>
          <p>Type</p>
          <Form.Select value={initalval.type} onChange={(e) => (setInitialValue({...initalval,type: e.target.value}))} aria-label="Default select example">
           <option>Open this select menu</option>
           <option value="Earning">Earning</option>
           <option value="Expenses">Expenses</option>
           <option value="Saving">Saving</option>
          </Form.Select>
        </Form.Group>

        <Form.Group  className='Frame-bg' as={Col}>
          <p>Descriptions</p>
          <Form.Control value={initalval.description} onChange={(e) => (setInitialValue({...initalval,description: e.target.value}))} type="text" placeholder="description" />
        </Form.Group>


        <Form.Group className='Frame-bg' as={Col}>
          <p>Amount</p>
          <Form.Control value={initalval.amont} onChange={(e) => (setInitialValue({...initalval,amont: e.target.value}))} type="number" placeholder="anount" />
        </Form.Group>

        <Form.Group className='Frame-bg' id="form-date" as={Col}>
          <p>Choose Date</p>
          <Form.Control  type="date" name="datepic" placeholder="DateRange"
         value={initalval.date} onChange={(e) => (setInitialValue({...initalval,date: e.target.value}))}
              />
           </Form.Group>
      </div>


       <div className='Sumit-btn' >
        <Button  onClick={handlesumit} type="submit"  variant="success" size="lg">Form sumit</Button>

       </div>


    </Form>
    
    </>
  )
}

export default Header