import React from 'react'

export default function Contact() {
  return (
      <div className="container my-3">
        <form>
          <div className="mb-3">
            <label htmlFor="email" className="form-label">Email address</label>
            <input type="email" className="form-control" id="email" placeholder="name@example.com"/>
          </div>
          <div className="mb-3">
            <label htmlFor="query" className="form-label">Select your query</label>
            <select className="form-select" aria-label="Default select example">
              <option value="none">Select below</option>
              <option value="Web">Web</option>
              <option value="Tech Stack">Tech stack</option>
              <option value="Technology">Technology</option>
              <option value="Others">Others</option>
            </select>
          </div>
          <div className="mb-3">
            <label htmlFor="concern" className="form-label">Eloborate your concern</label>
            <textarea className="form-control" id="concern" rows="3" placeholder="Enter your concern here."></textarea>
          </div>
          <div className="mb-3">
            <div className="form- group row">
              <div className="col-sm-2">Are you a member?</div>
              <div className="col-sm-10">
                <input className="form-check-input" type="checkbox" value="IsMember" id="IsMember"/>
                <label className="form-check-label" htmlFor="IsMember">Yes</label>
              </div>
            </div>
          </div>
          <div className="mb-3">
            <button type="submit" className="btn btn-primary">Submit</button>
          </div>
        </form>
      </div>
  )
}