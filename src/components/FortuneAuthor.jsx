const FortuneAuthor = ({quote}) => {
    return (
        <div className="FortuneAuthor">
            <span>{quote.author}</span>
        </div>
    );
};

export default FortuneAuthor;