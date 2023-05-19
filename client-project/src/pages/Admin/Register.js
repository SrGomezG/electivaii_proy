import React, { useEffect, useState } from "react";
import { Button, Checkbox, Form, Input, Select } from 'antd';
import Axios from "axios";

const { Option } = Select;

const onFinish = (values) => {
  console.log('Success:', values);
};
const onFinishFailed = (errorInfo) => {
  console.log('Failed:', errorInfo);
};
export const Register = () => {
  const [data, setData] = useState({ firstname: '', lastname: '', email: '', password: '', departamento: '', municipio: '' })
  const [municipios, setMunicipios] = useState([])
  const [departamentos, setDepartamentos] = useState([])

  useEffect(() => {
    getDepartamentos()
  }, [])

  const getDepartamentos = async () => {
    try {
      const response = await Axios.get('http://localhost:3200/api/V1/listarDatos1')

      const uniqueData = response.data.reduce((accumulator, currentObject) => {
        const existingObject = accumulator.find((item) => item.departamento === currentObject.departamento)
        if (!existingObject) {
          return accumulator.concat(currentObject)
        } else {
          return accumulator
        }
      }, [])

      setDepartamentos(uniqueData)
    } catch (error) {
      console.error('Error al obtener datos:', error)
    }
  }
  console.log(departamentos)
  const handleSubmit = async (e) => {
    e.preventDefault()
    console.log(data)
    try {
      const response = await Axios.post('http://localhost:3200/api/V1/auth/register', data)
      console.log(response)
    } catch (error) {
      console.error('Error al obtener datos:', error)
    }
  }

  const handleSelectChange = async (value) => {
    console.log(value)
    if (departamentos.some(item => item.departamento === value)) {
      try {
        setData({ ...data, departamento: value })
        const response = await Axios.get(`http://localhost:3200/api/V1/listarDatos1?departamento=${value}`)
        setMunicipios(response.data)
      } catch (error) {
        console.error('Error al obtener datos:', error)
      }
    } else {
      setData({ ...data, municipio: value })
    }
  }
  return (
    < Form
      onSubmitCapture={handleSubmit}
      name="basic"
      labelCol={{
        span: 8,
      }
      }
      wrapperCol={{
        span: 16,
      }}
      style={{
        maxWidth: 600,
      }}
      initialValues={{
        remember: true,
      }}
      onFinish={onFinish}
      onFinishFailed={onFinishFailed}
      autoComplete="off"
    >
      <Form.Item
        label="First name"
        name="firstname"
        rules={[
          {
            required: true,
            message: 'Please input your first name!',
          },
        ]}
      >
        <Input onChange={(e) => setData({ ...data, firstname: e.target.value })} />
      </Form.Item>
      <Form.Item
        label="Last name"
        name="lastname"
        rules={[
          {
            required: true,
            message: 'Please input your last name!',
          },
        ]}
      >
        <Input onChange={(e) => setData({ ...data, lastname: e.target.value })} />
      </Form.Item>

      <Form.Item
        label="Email"
        name="email"
        rules={[
          {
            required: true,
            message: 'Please input your email',
          },
        ]}
      >
        <Input onChange={(e) => setData({ ...data, email: e.target.value })} />
      </Form.Item>
      <Form.Item
        label="Password"
        name="password"
        rules={[
          {
            required: true,
            message: 'Please input your password!',
          },
        ]}
      >
        <Input.Password onChange={(e) => setData({ ...data, password: e.target.value })} />
      </Form.Item>

      <Form.Item

        label="Departamento"
        rules={[
          {
            required: true,
          },
        ]}
      >
        <Select
          name="departamento"
          placeholder="Select a department"
          onChange={handleSelectChange}
          allowClear
        >
          {departamentos.map((departamento, index) => (<Option value={departamento.departamento}>{departamento.departamento}</Option>))}

        </Select>
      </Form.Item>

      <Form.Item
        name="municipio"
        label="Municipio"
        rules={[
          {
            required: true,
          },
        ]}
      >
        <Select
          placeholder="Select a municipality"
          onChange={(value) => setData({ ...data, municipio: value })}
          allowClear
        >
          {municipios.map((municipio, index) => (<Option value={municipio.municipio}>{municipio.municipio}</Option>))}
        </Select>
      </Form.Item>

      <Form.Item
        name="remember"
        valuePropName="checked"
        wrapperCol={{
          offset: 8,
          span: 16,
        }}
      >
        <Checkbox>Remember me</Checkbox>
      </Form.Item>

      <Form.Item
        wrapperCol={{
          offset: 8,
          span: 16,
        }}
      >
        <Button type="primary" htmlType="submit">
          Submit
        </Button>
      </Form.Item>
    </Form >
  )
};
