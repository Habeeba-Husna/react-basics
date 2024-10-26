import { useState } from 'react'
import Counter from './components/Counter';
import Text from './components/Text';
import Checkbox from './components/Checkbox';
import Form from './components/Form';
import CounterThree from './components/CounterThree';
import Clock from './components/Clock';
import CounterRef from './components/CounterRef';
import ToDoList from './components/ToDoList';
import Timer from './components/Timer'
// import CountReducer from './components/CountReducer';
import Pagination from './components/Pagination';
import Posts from './components/Posts';
// import React from 'react';
// import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
// import { DataProvider} from './components/DataProvider' // Import DataProvider
// import PageA from './components/PageA'; // Ensure PageA is imported correctly
// import PageB from './components/PageB';
import './App.css'


function App() {

  return (
    <>
    {/* <DataProvider>
            <Router>
                <Routes>
                    <Route path="/" element={<PageA />} />
                    <Route path="/pageB" element={<PageB />} />
                </Routes>
            </Router>
        </DataProvider> */}
      <Posts />
    {/* <CountReducer/> */}
     <Counter />
     <br></br>
     <Text/> 
     <br></br><br></br>
     <Checkbox/>
     <br></br>
     <Form/>
     <br></br>
     <CounterThree/>
     <br></br>
     <Clock color="blue" time={new Date().toLocaleTimeString()} />
     <CounterRef/>
     <ToDoList/>
     <Timer/>
     <Pagination/>
    </>
  )
}

export default App
