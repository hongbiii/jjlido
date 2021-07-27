// const express = require('express'); // express 불러오기
import express from 'express';
const app = express(); // express 실행

app.listen(1234, () => {
  console.log('Hello, World!'); // 서버가 실행되면 콘솔에 'Hello, World!' 출력
});

const a: number = 'abs';
