import "./index.scss";

const Feedback = () => {
  return (
    <div className="feedback">
      <h4>How satisfied are you with our customer support performance?</h4>
      <div className="feedback-rating">
        <div className="feedback-rating__box">
          <div className="feedback-rating__box-icon"></div>
          <div className="feedback-rating__box-text">Unhappy</div>
        </div>

        <div className="feedback-rating__box">
          <div className="feedback-rating__box-icon"></div>
          <div className="feedback-rating__box-text">Neutral</div>
        </div>

        <div className="feedback-rating__box">
          <div className="feedback-rating__box-icon"></div>
          <div className="feedback-rating__box-text">Satisfied</div>
        </div>
      </div>

      <button>Send review</button>
    </div>
  );
};

export default Feedback;
