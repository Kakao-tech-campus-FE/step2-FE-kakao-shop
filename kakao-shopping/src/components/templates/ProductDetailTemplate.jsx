import Container from "../atoms/Container";
import { useParams } from "react-router-dom";
import { useQuery } from "react-query";
import { getProductById } from "../../services/product";
import _ from "lodash";
import ProductInformationColumn from "../molecules/ProductInformationColumn";
import OptionColumn from "../molecules/OptionColumn";

const ProductDetailTemplate = () => {
    let { id } = useParams();

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
            className={`detail-container d-flex flex-row align-items-center border mx-auto`}
        >
            <ProductInformationColumn product={data} isLoading={isLoading} />
            <OptionColumn
                product={data}
                isLoading={isLoading}
                className="border-start w-25 h-100 p-2"
            />
        </Container>
    );
};

export default ProductDetailTemplate;
