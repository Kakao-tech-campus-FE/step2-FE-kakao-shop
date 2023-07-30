import { Suspense, useEffect, useState } from "react";
import { getOrderFromId } from "../services/order";
import { useQuery } from "react-query";
import Loader from "../components/atoms/Loader";
import CheckTemplate from "../components/templates/CheckTemplate";
import { useParams } from "react-router-dom";

const CheckPage = () => {
    const { id } = useParams();
    const { data } = useQuery("orderFromId", () => getOrderFromId(id));

    return (
        <Suspense fallback={<Loader />}>
            <CheckTemplate data={data} />
        </Suspense>
    );
};

export default CheckPage;
