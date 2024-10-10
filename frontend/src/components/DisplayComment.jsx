function DisplayComment(props) {
    return (
      <>
        <div className="text-start mb-2 pb-2 border-bottom small">
          <p><span className="fw-bold mb-1">{props.user}</span> commented:</p>
          <p className="mb-1">{props.comment_text}</p>
          <span className="text-muted">on {props.created_at}</span>
        </div>
      </>
    );
  }
  
  export default DisplayComment;