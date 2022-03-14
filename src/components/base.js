import { Form, Button } from "react-bootstrap"
import { useState } from "react";
import axios from 'axios'
export default function Base() {
  const [Vendor, setVendor] = useState('');
  const [Hours, setHours] = useState('');
  const sendDataToApi = () => {
    axios.post(`https://61e1b1183050a10017681f5f.mockapi.io/Vendor_data`, {
      Vendor, Hours
    })
  }
  return (
    <div>
      <Form.Select aria-label="Default select example" className="mb-6" onChange={(e) => {
        setVendor(e.target.value)
      }}>
        <option>Select Vendor</option>
        <option value="A">A</option>
        <option value="B">B</option>
        <option value="C">C</option>
      </Form.Select>
      <Form.Group className="mb-6" >
        <Form.Label>Numbers of Hours</Form.Label>
        <Form.Control type="number" placeholder="Enter Hours" onChange={(e) => {
          setHours(e.target.value)
        }} />
      </Form.Group>
      <Button class="btn btn-outline-primary m-2" type='submit' onClick={sendDataToApi} >Download</Button>
    </div>
  )
}