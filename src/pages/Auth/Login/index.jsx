import { Link } from 'react-router-dom';
import { useState } from 'react';
import { Button, Col, Form, Input, Row } from 'antd';

const { Item } = Form;

const initilState = {
  email: "",
  password: "",
}

const Login = () => {

  const [form, setForm] = useState(initilState)

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((s) => ({ ...s, [name]: value }))
  }

  const handleLogin = () => {
    console.log("Form : ", form)
  }

  return (
    <main className='auth bg-blue-950 flex justify-center items-center py-3 px-2'>
      <div className="card max-w-120 bg-gray-100 p-4 rounded-2xl">
        <div className='text-center mb-4'>
          <h1 className='text-center text-2xl font-bold'>Login Account</h1>
        </div>
        <Form layout='vertical'>
          <Row>
            <Col span={24}>
              <Item label={
                <span className='font-semibold'>
                  Email
                </span>
              }>
                <Input type="email" placeholder='Enter email address' size='large' name='email' onChange={handleChange} />
              </Item>
            </Col>
            <Col span={24}>
              <Item label={
                <span className='font-semibold'>
                  Password
                </span>
              }>
                <Input.Password placeholder='Enter password' size='large' name='password' onChange={handleChange} />
              </Item>
            </Col>
            <Col span={24}>
              <Button type='primary' size='large' block htmlType='submit' onClick={handleLogin}>Login</Button>
            </Col>
            <Col span={24} className='py-2 mt-1'>
              <p className='text-center text-gray-950'>Don't have an Account? <span><Link to="/auth/register">Register</Link></span> </p>
            </Col>
          </Row>
        </Form>
      </div>
    </main>
  )
}

export default Login