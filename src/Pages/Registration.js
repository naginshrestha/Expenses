import React from 'react'
import { Form ,Button} from 'react-bootstrap'
import { useState } from 'react'
import { Layout } from '../Components/Layout'
import { CustomInput } from '../Components/CustomInput'

const initialstate ={
    fName: "",
    LName:"",
    email:"",
    password:"",
    confirmPassword:""

}

export const Registration = () => {

    const [frm,setFrm] =useState(initialstate)
    const [error,setError] = useState("")

    const RegInput =[
        {
            value :frm.fName,
            label : "First Name",
            name : "fName",
            required: "true",
            placeholder: "Enter First Name"
        },
        {
            value :frm.email,
            label : "email",
            name : "email",
            required: "true",
            placeholder: "Enter email"
        },
        {
            value :frm.password,
            label : "Password",
            name : "password",
            required: "true",
            placeholder: "**********"
        },
        {
            value :frm.confirmPassword,
            label : "ConfirmPssword",
            name : "password",
            required: "true",
            placeholder: "**********"
        }

    ]
  return ( 
  <Layout>
    <div className='w-50 m-auto '>
     <Form className='mt-5 border p-3'>
     <h3>Join our system now!</h3>
     <hr/>

     {
        RegInput.map((item,i) =>( <CustomInput key={i} {...item}/>))

     }
     <Form.Group>
        <Form.Text>
            Your password must contain 6 Characters including at least 1 number upper case and lower case
        </Form.Text>
     </Form.Group>

     {error && (
        <ul>
            <li className='text-danger fw-bolder mt-3'>

            </li>
        </ul>
     )}


     </Form>
    </div>
   
  </Layout> 
  )
}
