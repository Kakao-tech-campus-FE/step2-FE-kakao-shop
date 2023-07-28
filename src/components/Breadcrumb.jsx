import { Fragment } from 'react';

const Breadcrumb = ({ labelList }) => {
    const separator = '>';

    return (
        <>
            {labelList.map((element, idx) => {
                return (
                    <Fragment key={idx}>
                        <span> {element} </span>
                        {idx < labelList.length - 1 && <span>{separator}</span>}
                    </Fragment>
                );
            })}
        </>
    );
};

export default Breadcrumb;
