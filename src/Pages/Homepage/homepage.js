import React from 'react'
import { FaArrowRight } from 'react-icons/fa';
import Navbar from '../../Component/Navbar/Navbar';
import Suggestioncard from '../../Component/Suggestioncard/Suggestioncard';
import './homepage.scss';


 const Homepage = () => {
  // let name = "nikita";
  let cardData=[
    {
      courseName:"Python",
      description:"python for bignner",
      tumbnail:"../../Assests/Images/thumbnail.jpg",
      rating:5,
      authorName:"Kranti kumar Jain",
      duration:11

    },
    {
      courseName:"JAVA",
      description:"python for bignner",
      tumbnail:"../../Assests/Images/thumbnail.jpg",
      rating:5,
      authorName:"Kranti kumar Jain",
      duration:11

    },
    {
      courseName:"C++",
      description:"python for bignner",
      tumbnail:"../../Assests/Images/thumbnail.jpg",
      rating:5,
      authorName:"Kranti kumar Jain",
      duration:11

    },
    {
      courseName:"C#",
      description:"python for bignner",
      tumbnail:"../../Assests/Images/thumbnail.jpg",
      rating:5,
      authorName:"Kranti kumar Jain",
      duration:11

    },
    {
      courseName:"JAVA SCRIPT",
      description:"python for bignner",
      tumbnail:"../../Assests/Images/thumbnail.jpg",
      rating:5,
      authorName:"Kranti kumar Jain",
      duration:11

    }

  ]
  return (
    <div className='homepagemain'>

      <div className='homenavbar'>
        <Navbar/>
      </div>
      {/* *****MAIN HEADER START***** */}

      <div className='homeheader'>

        {/* ********HEADER CONTENT***** */}

        <div className='homehead_content'>

          <h1>Be Your Own Book</h1>
          
          <h3>Choose best courses to enhance your skills</h3>
          <button>EXPLORE &nbsp;&nbsp; <span className='arrowright'><FaArrowRight/></span></button>
        </div>
      </div>

      {/* ****************HOME BANNER START************ */}

      <div className='homebanner'>

        <div className='quote'>
          <h1>“Don’t wish it were easier; <span style={{color:"#17228b",fontWeight:600}}>wish you were better.”</span></h1>
          <pre>― JIM ROHN</pre>
        </div>



      </div>

      {/* SUGGESTION CARD */}

      <div className="homesuggestion">
        <div className='randomsuggestion'>
          <Suggestioncard
          heading={"Random Suggestions"}
          cardData={cardData}
          />
        </div>
      </div>


    </div>
  )
}
export default Homepage;

