const Content = (props) => (
    <div className="content">
        {props.children}

        <style jsx>{`
            .content {
                padding: 50px;
            }
        `}</style>
    </div>
);

export default Content;