import React from 'react'
import { Form ,Col, Button} from 'react-bootstrap'
import { useState ,useEffect} from 'react'

const Dashboard = ({getDataLS}) => {

    const [myData,setMyData] = useState([])

    // input form
    const [initalval,setInitialValue] =useState({})
 
   const handlechanged =(e) =>
   {
    const {name ,value} =e.target
    setInitialValue({...initalval,[name]:value})
  
   }

    const handlesumit =async(e) =>{
        e.preventDefault();
       // setMyData((prevValue) =>[...prevValue,initalval]) //this is also work
        setMyData([...myData,initalval])

        const result = await fetch("https://expenses-tracker-7df9a-default-rtdb.firebaseio.com/expenses.json",{
          method:"POST",
          headers:{
            'Content-type':'application/json'
          },
          body:JSON.stringify(initalval)
        })



 
    
    }
    
    // useEffect(()=>{

    //     localStorage.setItem("formData",JSON.stringify(myData))

    

    // },[myData  ])


  return (
    <>
    <Form  onSubmit={handlesumit} className='Header-frame'>

        <h2>My Diary</h2>

      <div className='Header-tag'>  

        <Form.Group className='Frame-bg' as={Col}>
          <p>Type</p>
          <Form.Select  required name='type' onChange={handlechanged}>
           <option>Choose the options...</option>
           <option value="Earning">Earning</option>
           <option value="Expenses">Expenses</option>
           <option value="Saving">Saving</option>
          </Form.Select>
        </Form.Group>

        <Form.Group  className='Frame-bg' as={Col}>
          <p>Descriptions</p>
          <Form.Control required onChange={handlechanged} name='description' type="text" placeholder="description" />
        </Form.Group>


        <Form.Group className='Frame-bg' as={Col}>
          <p>Amount</p>
          <Form.Control required onChange={handlechanged}  name='amount' type="number" placeholder="anount" />
        </Form.Group>

        <Form.Group  className='Frame-bg' name='date' id="form-date" as={Col}>
          <p>Choose Date</p>
          <Form.Control required type="date" name="date" placeholder="DateRange"
          onChange={handlechanged} 
              />
           </Form.Group>
      </div>


       <div className='Sumit-btn' >
        <Button   type="submit"  variant="success" size="lg">Form sumit</Button>
       </div>


    </Form>
    
    </>
  )
}

export default Dashboard
