import { useState } from "react";
import Navbar from "./Navbar";

export default function SendInquiry(){
    
    const [inquiredData, setInquiredData] = useState({
        firstName: "",
        lastName: "",
        education: "",
        email: "",
        phoneNumber: "",
        gender: "",
        state: "",
        country: "",
    });

    let name,value;
    const updateInquiredData = (event)=>{
        name = event.target.name;
        value = event.target.value;
        setInquiredData({...inquiredData, [name]: value });
    }

    const resetAllData= ()=>{
        setInquiredData({
            firstName: "",
            lastName: "",
            education: "",
            email: "",
            phoneNumber: "",
            gender: "",
            state: "",
            country: "",
        })
    }

    const onSubmit= async (event)=>{
        event.preventDefault();
        const {firstName,lastName,education,email, phoneNumber,gender,state,country} = inquiredData; 
        const response = await fetch('https://edutech-7525e-default-rtdb.firebaseio.com/inquiry.json',
        {
            method : "POST",
            headers : {
                "Content-Type" : "application/json"
            },
            body : JSON.stringify({firstName,lastName,education,email, phoneNumber,gender,state,country}),
        });
        if(response){ 
            alert("Data Stored");
            resetAllData();
        }
        else(alert("fill the data"));
        console.log(inquiredData);
    }

    return <>
    <Navbar></Navbar>
    <section className="h-100 bg-dark">
  <div className="container py-5 h-100">
    <div className="row d-flex justify-content-center align-items-center h-100">
      <div className="col">
        <div className="card card-registration my-4">
          <div className="row g-0">
            <div className="col-xl-6 d-none d-xl-block">

            </div>
            <form>
            <div className="col-xl-6">
              <div className="card-body p-md-5 text-black">
                <h3 className="mb-5 ">Just a few details away !</h3> 
                {/* {/* text-uppercase  add it in className to convert all text into caps */}
                <div className="row">
                  <div className="col-md-6 mb-4">
                    <div className="form-outline">
                      <label className="form-label" for="form3Example1m">First name</label>
                      <input 
                        type="text" 
                        id="form3Example1m" 
                        name="firstName"
                        value={inquiredData ? inquiredData.firstName : ""}
                        className="form-control form-control-lg" 
                        placeholder="First Name"
                        onChange={updateInquiredData}
                        />
                    </div>
                  </div>
                  <div className="col-md-6 mb-4">
                    <div className="form-outline">
                      <label className="form-label" for="form3Example1n">Last name</label>
                      <input 
                        type="text" 
                        id="form3Example1n" 
                        name="lastName"
                        value={inquiredData ? inquiredData.lastName : ""}
                        className="form-control form-control-lg" 
                        placeholder="Last Name"
                        onChange={updateInquiredData}
                        />
                    </div>
                  </div>
                </div>

                {/* <div className="row">
                  <div className="col-md-6 mb-4">
                    <div className="form-outline">
                    <div className="form-outline">
                      <input type="text" id="form3Example1n1" className="form-control form-control-lg" />
                      <label className="form-label" for="form3Example1n1">Father's name</label>
                    </div>
                    </div>
                  </div>
                  <div className="col-md-6 mb-4">
                    <div className="form-outline">
                      <input type="text" id="form3Example1n1" className="form-control form-control-lg" />
                      <label className="form-label" for="form3Example1n1">Father's name</label>
                    </div>
                  </div>
                </div> */}

                <div className="form-outline mb-4">
                <label className="form-label" for="form3Example97">Email ID</label>
                  <input 
                    type="text" 
                    id="form3Example97" 
                    className="form-control form-control-lg" 
                    placeholder="abc@xyz.com"
                    name="email"
                    value={inquiredData.email ? inquiredData.email : ""}
                    onChange = {updateInquiredData}
                    />
                </div>

                {/* <div className="form-outline mb-4">
                  <input type="text" id="form3Example8" className="form-control form-control-lg" />
                  <label className="form-label" for="form3Example8">Address</label>
                </div> */}

                <div className="d-md-flex justify-content-start align-items-center mb-4 py-2">

                  <h6 className="mb-0 me-4">Gender: </h6>

                  <div className="form-check form-check-inline mb-0 me-4">
                    <input 
                        className="form-check-input" 
                        type="radio" 
                        name="gender" 
                        id="femaleGender"
                        value="Female" 
                        onChange={updateInquiredData}
                      />
                    <label className="form-check-label" htmlFor="femaleGender">Female</label>
                  </div>

                  <div className="form-check form-check-inline mb-0 me-4">
                    <input 
                        className="form-check-input" 
                        type="radio" 
                        name="gender" 
                        id="maleGender"
                        value="Male"
                        onChange={updateInquiredData} 
                    />
                    <label className="form-check-label" for="maleGender">Male</label>
                  </div>

                  <div className="form-check form-check-inline mb-0">
                    <input 
                        className="form-check-input"   
                        type="radio"   
                        name="gender" 
                        id="otherGender"
                        value="Other" 
                        onChange={updateInquiredData}
                    />
                    <label className="form-check-label" for="otherGender">Other</label>
                  </div>

                </div>

                {/* <div className="row"> */}
                  {/* <div className="col-md-6 mb-4">

                    <select 
                        className="select" 
                        maxMenuHeight={5}
                        data-live-search="true">
                    {Object.keys(stateCityMap).map((state)=>{
                        console.log(state);
                        <option value={state}>{state}</option>
                    })}
                      <option value="1">State</option>
                      <option value="2">Option 1</option>
                      <option value="3">Option 2</option>
                      <option value="4">Option 3</option>
                      <option value="2">Option 1</option>
                      <option value="3">Option 2</option>
                      <option value="2">Option 1</option>
                      <option value="3">Option 2</option>
                    </select>

                  </div> */}
                  {/* <div className="col-md-6 mb-4">

                    <select className="select">
                      <option value="1">City</option>
                      <option value="2">Option 1</option>
                      <option value="3">Option 2</option>
                      <option value="4">Option 3</option>
                    </select>

                  </div> */}
                {/* </div> */}

                <div className="form-outline mb-4">
                <label className="form-label" for="form3Example9">Phone Number</label>
                  <input 
                    type="text" 
                    id="form3Example9" 
                    className="form-control form-control-lg" 
                    name="phoneNumber"
                    value={inquiredData.phoneNumber ? inquiredData.phoneNumber : ""}
                    onChange={updateInquiredData}
                    placeholder="+91 xxxxxx9878"
                    />
                </div>

                <div className="form-outline mb-4">
                <label className="form-label" for="form3Example90">In which class do you study ?</label>
                  <input 
                    type="text" 
                    id="form3Example90" 
                    className="form-control form-control-lg" 
                    name="education"
                    value={inquiredData.education ? inquiredData.education : ""}
                    onChange={updateInquiredData}
                    placeholder="Class 8"
                    />
                </div>

                {/* <div className="form-outline mb-4">
                  <input type="text" id="form3Example99" className="form-control form-control-lg" />
                  <label className="form-label" for="form3Example99">Course</label>
                </div> */}

                

                <div className="d-flex justify-content-end pt-3">
                  <button 
                    type="button" 
                    className="btn btn-light btn-lg"
                    onClick={resetAllData}>Reset all</button>
                  <button 
                    type="button" 
                    className="btn btn-warning btn-lg ms-2"
                    onClick={onSubmit}>Submit form</button>
                </div>

              </div>
            </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>
    </>
}