import React from 'react'
import { Form ,Button} from 'react-bootstrap'
import { Layout } from '../Components/Layout'
import { useState } from 'react'
import { CustomInput } from '../Components/CustomInput'

const initialstates={
    email:"",
    password:""
}

export const Login = () => {
    const [frmdt,setFrmDt] = useState(initialstates)

    const inputs=[
        {
            value :frmdt.email,
            label : "email",
            name : "email",
            required: "true",
            placeholder: "Enter email"
        },
        {
            value :frmdt.password,
            label : "Password",
            name : "password",
            required: "true",
            placeholder: "**********"
        }
    ];
  return (
    <Layout>
    <div className='w-50 m-auto '>

    <Form className='mt-5 p-3 py-4 border'>

        <h3>Login here</h3>
        <hr/>

        {
            inputs.map((item,i) => (
          <CustomInput key={i} {...item}/>
            ))
        }

         <div className='d-grid mb-3'>
            <Button variant="primary" type="submit">
              Login
            </Button>
          </div>

   <div className='text-end'>
    Forget Password?  <a >Reset</a> 

   </div>

    </Form>
    </div>
    </Layout>
  )
}
