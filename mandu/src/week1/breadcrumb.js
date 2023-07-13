function Breadcrumb({items}) {
    return (
        <div className="breadcrumb">
            {<ol className="breadcrumb">
                {items.map((item, index) => {
                    return (
                        <li className="breadcrumb-item" key={item + index}>
                            {item}
                        </li>
                    )
                })}
            </ol>}

        </div>
    );
}

export default Breadcrumb;