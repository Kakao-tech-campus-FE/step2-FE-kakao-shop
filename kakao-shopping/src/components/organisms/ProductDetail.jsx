import Container from "../atoms/Container";
import { useParams } from "react-router-dom";
import { useQuery } from "react-query";
import { getProductById } from "../../services/product";
import _ from "lodash";
import ProductInformationColumn from "../molecules/ProductInformationColumn";
import OptionColumn from "../molecules/OptionColumn";
import { useState } from "react";

const ProductDetail = () => {
    let { id } = useParams();
    const [optionIndex, setOptionIndex] = useState(null);

    const { isLoading, data, error } = useQuery({
        queryKey: ["detail_" + id],
        queryFn: () => {
            return getProductById(id);
        },
        select: (res) => {
            console.log(res.data.response);
            return res.data.response;
        },
    });

    return (
        <Container
            className={`d-flex flex-row align-items-center p-5 border mx-auto w-75`}
        >
            <ProductInformationColumn product={data} isLoading={isLoading} />
            <OptionColumn
                product={data}
                isLoading={isLoading}
                option={optionIndex}
                setOption={setOptionIndex}
            />
        </Container>
    );
};

export default ProductDetail;
