import React from "react";
import axios from "axios";
import { Link } from 'react-router-dom';
import '../App.css';
// want to add col span differ like todayList
const Topics = () => {
  const [data, setData] = React.useState([])
  React.useEffect(() => {
    axios.get('http://localhost:8000/topics/')
      .then(res => setData(res.data))
  },[]);
  return(
              <div className="pt-20">
              <div className="container mx-auto px-5">
              <div className="pt-6 grid grid-cols-1 lg:grid-cols-6 lg:gap-6 ">
              <div className="col-span-4 sm:col-span-4 lg:col-span-4">
          <div className="upper ">
              <h2 className="text-5xl font-[600] tracking-tight">Topics</h2>
              <p className="my-5 ml-3 text-lg font-300">
              Follow your favorite topics to be notified of the newest products in that space.
              </p>
              <div class="container">
      <input type="text" maxlength="12" placeholder="Search Topics.." class="searchbar"></input>
      <img src="https://images-na.ssl-images-amazon.com/images/I/41gYkruZM2L.png" width="28px" height="22px" alt="search icon" class="button"></img>
        <div class="dropdown" float="right;">
        <button class="dropbtn">Trending</button>
            <div class="dropdown-content">
            <a href="#">Name</a>
            <a href="#">Popular</a>
            </div>
        </div>
      </div>

              { data.map((p)=>{
              return(
            <div className="flex bg-white rounded shadow overflow-hidden sm:flex items-center mb-6 ">
              <div className="flex w-full ">
                <ul className="w-full col-span-4">
                  <li>
                    <div className="flex pl-5 pr-24 pt-2 pb-5 relative border-b border-gray-200 transition ease-in-out duration-300 bg-gradient-to-tr from-white hover:via-white hover:to-rose-200 z-1">
                      <div>
                      <img
                          className="w-20 h-20"
                          src={p.image_url}
                          alt="product hunt"
                        />
                      </div>
                      <div className="ml-2">
                        <h3 className="text-base font-bold text-gray-900">
                         <Link to ={`/topics/${p.name}`}>
                          {p.name}
                          </Link>
                        </h3>
                        <p className="text-f13 font-normal">
                            {p.content}
                        </p>

                        <div className="visible md:invisible ">
                          <span className="inline-flex items-center mt-3 border border-grey-100 rounded pl-2 pb-1 pt-1 pr-2 ">
                            <button className="">Follow</button>
                          </span>
                        </div>
                      </div>
                      <div className="absolute top-25 right-40 border border-gray-200 rounded invisible md:visible">
                        <div className="flex-col align-center items-center px-5 py-1 inset-y-3">
                          <button className="text-lg font-[700]">Follow</button>
                        </div>
                      </div>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
      )})}
        </div>
        </div></div></div></div>
)}

export default Topics;
