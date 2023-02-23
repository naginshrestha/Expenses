import React from 'react'
import { Form ,Row,Col,InputGroup, Button} from 'react-bootstrap'
import { useState ,useEffect} from 'react'

const Header = () => {

    const [myData,setMyData] = useState([])

    // input form
    const [type,setType] =useState('')
    const[Amount,setAmount] =useState('')
    const[description,setDescription] =useState('')
    const[date,setDate] =useState('')

  

    const handlesumit =(e) =>{
        e.preventDefault();
        let data ={type,Amount,description,date}
        console.log(data)
        setMyData(...myData,data)
        console.log("dfs")



    }

    // useEffect(()=>{

    //     localStorage.setItem("data",JSON.stringify(myData))

    // },[myData])


  return (
    <>
    <Form  className='Header-frame'>

        <h2>My Diary</h2>

      <div className='Header-tag'>  

        <Form.Group className='Frame-bg' as={Col}>
          <p>Type</p>
          <Form.Select onChange={(e) =>(setType(e.target.value))} aria-label="Default select example">
           <option>Open this select menu</option>
           <option value="Earning">Earning</option>
           <option value="Expenses">Expenses</option>
           <option value="Saving">Saving</option>
          </Form.Select>
        </Form.Group>

        <Form.Group  className='Frame-bg' as={Col}>
          <p>Descriptions</p>
          <Form.Control onChange={(e) =>(setDescription(e.target.value))} type="text" placeholder="description" />
        </Form.Group>


        <Form.Group className='Frame-bg' as={Col}>
          <p>Amount</p>
          <Form.Control onChange={(e) =>(setAmount(e.target.value))}  type="number" placeholder="anount" />
        </Form.Group>

        <Form.Group className='Frame-bg' as={Col}>
          <p>Choose Date</p>
          <Form.Control  type="date"  name="datepic" placeholder="DateRange"
           onChange={(e) =>(setDate(e.target.value))}
              />
           </Form.Group>
      </div>


       <div className='Sumit-btn'>
        <Button  onSubmit={handlesumit}  variant="success" size="lg">Form sumit</Button>

       </div>
     


    </Form>
    
    </>
  )
}

export default Header