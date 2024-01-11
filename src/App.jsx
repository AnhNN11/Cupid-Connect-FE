import './App.css'
import {Button, QRCode} from "antd";

function App() {
 
  return (
    <>
      <h1>Wellcome Cuppid</h1>
        <QRCode
            errorLevel="H"
            value="https://ant.design/"
            icon="https://gw.alipayobjects.com/zos/rmsportal/KDpgvguMpGfqaHPjicRK.svg"
        />
      <Button type={"primary"}>Click me</Button>

    </>
  )
}

export default App
