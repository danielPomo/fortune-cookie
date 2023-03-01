const FortuneCard = ({quote}) => {
    return (
        <div>
            <p>{quote.phrase}</p>
            <span>{quote.author}</span>
        </div>
    );
};

export default FortuneCard;