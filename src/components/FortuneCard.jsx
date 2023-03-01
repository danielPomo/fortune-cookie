const FortuneCard = ({quote}) => {
    return (
        <div className="FortuneCard">
            <p>{quote.phrase}</p>
        </div>
    );
};

export default FortuneCard;