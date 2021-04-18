import React from 'react';
import './NewsLetter.css';
const NewsLetter = () => {
    return (
        <div className="container">
<div class="row mt-5 pt-4">
        <div class="col-md-6 col-sm-12 mb-3">
          <label for="input" class="form-label"></label>
          <input type="text" class="form-control" id="input" placeholder="Your name*"/>
        </div>
        <div class="col-md-6 col-sm-12 mb-3">
          <label for="input" class="form-label"></label>
          <input type="email" class="form-control" id="input" placeholder="Your email address*"/>
        </div>
      </div>
      <div class="row">
        <div class="col-md-12  mb-3">
          <label for="input" class="form-label"></label>
          <input type="email" class="form-control" id="input" placeholder="Your subject..."/>
        </div>
      </div>
      <div class="row">
        <div class="col-md-12 mb-1">
          <label for="input" class="form-label"></label>
          <input type="email" class="form-control pb-5 mb-5 k-h" id="input" placeholder="Your message..."/>
        </div>
      </div>
      <div class="row">
    <div class="col-md-12 mb-5">
      <div class="float-right">
     <button class="custom-btn float-right">SEND MESSAGE</button>
      </div>
      </div>
    </div>
    </div>
 
 

 
    );
};

export default NewsLetter;