import "./App.css";
import { Button } from "@mui/material";
import { Route, Routes, Link } from "react-router-dom";
import Ceasar from "./page/ceasar";
import Donbang from "./page/donbang";
import Crypt from "./page/Crypt";
import logoPath from "./img/logo.webp";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";

function Home() {
  const tmp = (
    <List
      onBack={() =>
        setMainPanel(
          <Introduce
            onStart={() => {
              setMainPanel(tmp);
            }}
          ></Introduce>
        )
      }
    ></List>
  );
  const [mainPanel, setMainPanel] = useState(
    <Introduce
      onStart={() => {
        setMainPanel(tmp);
      }}
    ></Introduce>
  );

  return (
    <div className="flex-grow bg-white w-full h-96 p-10 ">{mainPanel}</div>
  );
}

function List({ onBack }) {
  return (
    <>
      <h1 className="text-amber-400 text-2xl font-bold text-center mb-10">
        Hãy bắt đầu chọn hệ mã hóa
      </h1>
      <ul className="flex gap-8 flex-wrap text-3xl">
        <li>
          <Button variant="outlined">
            <Link to="/ceasar">Mã hóa Ceasar</Link>
          </Button>
        </li>
        <li>
          <Button variant="outlined">
            <Link to="/donbang">Mã hóa đơn bảng</Link>
          </Button>
        </li>
        <li>
          <Button variant="outlined">Mã hóa playfair</Button>
        </li>
      </ul>
      <div className="float-right mt-20">
        <Button variant="contained" onClick={onBack}>
          Back
        </Button>
      </div>
    </>
  );
}

function Introduce({ onStart }) {
  return (
    <>
      <h2 className="mb-4 text-3xl text-amber-500 font-semibold">
        Công cụ mã hóa, giải mã tự động
      </h2>
      <h2 className="mb-20 leading-10 text-2xl text-blue-800 font-semibold">
        Bảo vệ văn bản của bạn bằng cách Mã hóa và Giải mã chúng bằng khóa mà
        không ai khác biết. Bảo vệ thông tin nhạy cảm khỏi bị truy cập trái phép
        và duy trì toàn quyền kiểm soát tính bảo mật của thông tin đó. Đảm bảo
        quyền riêng tư cho mật khẩu, cuộc hội thoại, v.v
      </h2>
      <Button
        variant="contained"
        className="bg-blue-300 float-right"
        onClick={onStart}
      >
        Getting Started
      </Button>
    </>
  );
}

export default function App() {
  return (
    <div className="w-screen min-h-screen box-border px-10 py-8 bg-slate-300">
      <header className="p-3 mb-8 h-16 flex w-full justify-between items-center bg-white">
        <Link className="flex items-center" to="/">
          <img src={logoPath} className="h-8 mr-2" alt="Logo ToolCrypt" />
          <span className="font-bold text-xlS text-green-800">ToolCrypt</span>
        </Link>
        <div className="text-center w-7/12">
          <h1 className="text-lg text-blue-700 font-semibold">
            Công cụ mã hóa giải mã trực tuyến
          </h1>
          <h2 className="text-xs text-gray-400">
            Thực hiện bởi nhóm 14 lớp DHTI15A13HN
          </h2>
        </div>
      </header>
      <main>
        <Routes>
          <Route path="/" element={<Home></Home>} />
          <Route
            path="/ceasar"
            element={<Crypt element={<Ceasar />}></Crypt>}
          />
          <Route
            path="/playfair"
            element={<Crypt element={<Ceasar />}></Crypt>}
          />
          <Route
            path="/donbang"
            element={<Crypt element={<Donbang />}></Crypt>}
          />
        </Routes>
      </main>
    </div>
  );
}
