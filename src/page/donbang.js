import { useState, useEffect } from "react";
function isAlphabet(str) {
  str = str.toUpperCase();
  for (let i = 0; i < str.length; i++) {
    if (str[i] < "A" || str[i] > "Z") return false;
  }
  return true;
}

function isEmpty(str) {
  return str.trim() === "";
}

function checkKey(str) {
  const tmp = new Set();
  for (let i = 0; i < str.length; i++) {
    tmp.add(str[i]);
  }

  const newStr = [...tmp].join("");

  return newStr.length == str.length;
}

function mahoa(text, bangma) {
  let result = "";
  for (let i = 0; i < text.length; i++) {
    const char = bangma.find((item, index) => {
      return item.plain == text[i];
    });
    result += char.cipher;
  }

  return result;
}

function check(key, text) {
  if (!checkKey(key)) {
    alert("Khóa K nhập vào chỉ gồm 26 kí tự Alphabet khác nhau");
    return false;
  }
  if (!isAlphabet(key)) {
    alert("Khóa K nhập vào phải gồm các kí tự Alphabet khác nhau");
    return false;
  }

  if (isEmpty(key)) {
    alert("Khóa K nhập vào không được trống");
    return false;
  }

  return true;
}

function Donbang() {
  const [text, setText] = useState("");
  const [key, setKey] = useState("");
  const [output, setOutput] = useState("");

  function handlerEncrypt() {
    if (check(key, text)) {
      const tmp = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

      let newKey = key.toUpperCase();
      let bangma = [];
      for (var i = 0; i < 26; i++) {
        bangma.push({ plain: tmp[i], cipher: newKey[i] });
      }

      setOutput(mahoa(text, bangma));
    }
  }

  function handlerDecrypt() {
    if (check(key, text)) {
      const tmp = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

      let newKey = key.toUpperCase();
      let bangma = [];
      for (var i = 0; i < 26; i++) {
        bangma.push({ plain: newKey[i], cipher: tmp[i] });
      }

      setOutput(mahoa(text, bangma));
    }
  }

  return (
    <div className="box-border p-10 m-0 flex justify-center items-center bg-slate-200 grow">
      <form action="" className="w-96 border-2 rounded-md p-6 bg-white">
        <h1 className="text-center m-2 text-xl font-bold">Mật mã Ceasar</h1>
        <label htmlFor="text" className="cursor-pointer font-bold my-2">
          Text
        </label>
        <textarea
          onChange={(e) => setText(e.target.value)}
          name=""
          id="text"
          rows="3"
          className="w-full border-2 outline-none py-1 px-2  my-2 resize-none"
        ></textarea>
        <div className="flex items-center">
          <label className="font-bold mr-2" htmlFor="key">
            Khóa k ={" "}
          </label>
          <input
            onChange={(e) => {
              setKey(e.target.value);
            }}
            className="w-8/12 p-1 outline-0 border-2 grow"
            type="t"
          />
        </div>
        <div className="flex justify-evenly my-2 pt-2">
          <button
            type="button"
            onClick={handlerEncrypt}
            className="bg-blue-500 rounded-md p-2 text-white"
            id="btn_en"
          >
            Encrypt
          </button>
          <button
            type="button"
            onClick={handlerDecrypt}
            className="bg-red-500 rounded-md p-2 text-white"
            id="btn_de"
          >
            Decrypt
          </button>
        </div>

        <label className="font-bold" htmlFor="">
          Đầu ra
        </label>
        <div className="h-8 bg-slate-300 my-2 flex items-center p-2">
          {output}
        </div>
      </form>
    </div>
  );
}

export default Donbang;
