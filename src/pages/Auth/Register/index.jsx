import { Link } from 'react-router-dom';
import { useState } from 'react';
import { Button, Col, Form, Input, Row } from 'antd';

const { Item } = Form;

const initilState = {
  fullName: "",
  email: "",
  password: "",
  confirmPassword: ""
}

const Register = () => {

  const [form, setForm] = useState(initilState)

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((s) => ({ ...s, [name]: value }))
  }

  const handleRegister = () => {
    console.log("Form : ", form)
  }

  return (
    <main className='auth bg-blue-950 flex justify-center items-center py-5 px-2'>
      <div className="card max-w-120 bg-gray-100 p-4 rounded-2xl">
        <div className='text-center mb-4'>
          <h1 className='text-center text-2xl font-bold'>Create A New Account</h1>
        </div>
        <Form layout='vertical'>
          <Row>
            <Col span={24}>
              <Item label={
                <span className='font-semibold'>
                  Full Name
                </span>
              }>
                <Input type="text" placeholder='Enter full name' size='large' name='fullName' onChange={handleChange} />
              </Item>
            </Col>
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
              <Item label={
                <span className='font-semibold'>
                  Confirm Password
                </span>
              }>
                <Input.Password placeholder='Enter confirm password' size='large' name='confirmPassword' onChange={handleChange} />
              </Item>
            </Col>
            <Col span={24}>
              <Item
                label={
                  <span className="font-semibold text-gray-700">
                    Upload Image
                  </span>
                }
              >
                <Input
                  type="file"
                  accept="image/*"
                  name="file"
                  size="large"
                  className="cursor-pointer rounded-lg border border-gray-300 bg-gray-50 text-sm text-gray-600 file:mr-4 file:rounded-md file:border-0 file:bg-blue-950 file:px-4 file:py-2 file:text-sm file:font-medium file:text-white hover:file:bg-blue-900"
                />
              </Item>
            </Col>
            <Col span={24}>
              <Button type='primary' size='large' block htmlType='submit' onClick={handleRegister}>Register</Button>
            </Col>
            <Col span={24} className='py-2 mt-1'>
              <p className='text-center text-gray-950'>Already have an Account? <span><Link to="/auth/login">Login</Link></span> </p>
            </Col>
          </Row>
        </Form>
      </div>
    </main>
  )
}

export default Register