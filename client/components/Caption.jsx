import React from 'react'

const Caption = () => {
  return (
    <div>
      <h1>Caption this!</h1>
      <div className="img-display">
        <button><img className="btn-img img-nav" src="../images/left-arrow.png" /></button><img src="../images/placeholder.png" /><button className="img-nav"><img className="btn-img img-nav" src="../images/right-arrow.png" /></button>
      </div>
      <form className="submit">
        <input type="text" />
        <br />
        <button className="submit">Submit Caption</button>
      </form>
      <div className="captions">
        <img className="btn-vote" src="../images/upvote.jpg" /><span>0</span><img className="btn-vote" src="../images/downvote.jpg" />
        <span>Caption 1</span>
      </div>
      <div className="captions">
        <img className="btn-vote" src="../images/upvote.jpg" /><span>0</span><img className="btn-vote" src="../images/downvote.jpg" />
        <span>Caption 2</span>
      </div>
      <div className="captions">
        <img className="btn-vote" src="../images/upvote.jpg" /><span>0</span><img className="btn-vote" src="../images/downvote.jpg" />
        <span>Caption 3</span>
      </div>
    </div>
  )
}

export default Caption
