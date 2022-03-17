import React from 'react'

export default function Contact() {
  return (
      <div className="container my-3">
        <h1 className="mx-auto">Fill in the form below</h1>
        <hr />
        <form>
          <div className="mb-3">
            <label htmlFor="email" className="form-label">Email address</label>
            <input type="email" className="form-control" id="email" placeholder="name@example.com"/>
          </div>
          <div className="mb-3">
            <label htmlFor="query" className="form-label">Select your query</label>
            <textarea className="form-control" id="query" cols="30" rows="1" placeholder="Enter your query here."></textarea>
          </div>
          <div className="mb-3">
            <label htmlFor="concern" className="form-label">Eloborate your concern</label>
            <textarea className="form-control" id="concern" rows="3" placeholder="Enter your concern here."></textarea>
          </div>
          <div className="mb-3">
            <button type="submit" className="btn btn-primary">Submit</button>
          </div>
        </form>
      </div>
  )
}