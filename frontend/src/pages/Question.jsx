import React from "react";
import Header from "../components/Header.jsx";
import { useParams } from "react-router-dom"; 
import QuestionContent from "../components/QuestionContent.jsx";

function QuestionPage() {
  const { id } = useParams();

  return (
    <div  className="page">
      <Header Header="header" isAccordion={true} isLogo={true} isProfileLink={true}/>
      <QuestionContent id={id}/>
    </div>
  )
}

export default QuestionPage;