import React from 'react';
// import FooterSection from '../components/footer';
import StudentPortal from './projectsDone/studentportal';
import StudentForm from './projectsDone/studentform';
import Calculater from './projectsDone/calculater';
import Todo from './projectsDone/todo';

export default function  Projects(){
 return (<>
    <div className="container mx-auto py-12 px-4">
  <h2 className="text-4xl font-bold text-center mb-8">My Projects</h2>
  
  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">


 <StudentPortal/>
 <StudentForm/>
 <Calculater/>
 <Todo/>

  </div>
  </div>
  {/* <FooterSection/> */}

 </>)
}