import React from 'react'
import HtmlToReactParser, { processDefaultNode } from "html-to-react";
import "./index.css"
const processNodeDefinitions = new HtmlToReactParser.ProcessNodeDefinitions(
    React
);
function Content({ content }) {


    const isValidNode = function () {
        return true;
    };

    const spanParser = (domNode, children, index) => {
        // return <span className="span">{children}</span>;

        // return React.createElement('span', {key: index, className: 'span'}, children);
        return <span className="span">{children}</span>;
        // return domNode;
    };

    const spanParser1 = (domNode, children, index) => {
        // return <span className="span">{children}</span>;

        // return React.createElement('span', {key: index, className: 'span'}, children);
        return <span className="span1">{children}</span>;
    };

    const test = (domNode, children, index) => {
        domNode.attribs.class = `${domNode.attribs.class || ""} nowa-klasa`;
    };

    const processingInstructions = [
        // {
        //   shouldProcessNode: ({ type, name }) => type === "tag",
        //   processNode: test
        // },
        {
            shouldProcessNode: ({ type, name }) => type === "tag" && name === "span",
            processNode: spanParser,
        },

        {
            shouldProcessNode: ({ type, name }) => type === "tag" && name === "div",
            processNode: spanParser1,
        },

        // {
        //   shouldProcessNode: () => true,
        //   processNode: (node, children, index) => {
        //     console.log({ node });

        //     return <div>aaa</div>
        //   }
        // },

        {
            shouldProcessNode: () => true,
            processNode: processNodeDefinitions.processDefaultNode,
        },
    ];

    const Parser = new HtmlToReactParser.Parser();

    return (
        <div className="blog-content" style={{ margin: "3rem 2rem", }}>
            {Parser.parseWithInstructions(
                content,
                isValidNode,
                processingInstructions
            )}
        </div>
    )
}

export default Content