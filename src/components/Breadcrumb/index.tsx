import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom";
import { styled } from "styled-components";

interface Props {
  color: string;
}

const Breadcrumb = ({ color }: Props) => {
  const location = useLocation();
  const historyList =
    location.pathname === "/" ? [""] : location.pathname.split("/");

  return (
    <div>
      <Wrapper>
        {historyList.map((history, index) => {
          if (history === "") {
            return (
              <PageLink to="/" key={index} color={color}>
                main
              </PageLink>
            );
          }
          const accumulatedPath = `${historyList
            .slice(0, index + 1)
            .join("/")}`;
          return (
            <PageLink to={accumulatedPath} key={index} color={color}>
              {history === "" ? "main" : history}
            </PageLink>
          );
        })}
      </Wrapper>
    </div>
  );
};

export default Breadcrumb;

const Wrapper = styled.div`
  display: inline-flex;
  height: 30px;
  background-color: rgb(233, 233, 234);
  padding: 10px;
`;

const PageLink = styled(Link)<Pick<Props, "color">>`
  text-decoration: none;
  color: #3c3c3c;
  font-size: 20px;

  &:not(:last-child) {
    margin-right: 10px;
  }

  &:not(:last-child)::after {
    margin-left: 10px;
    content: ">";
  }

  &:last-child {
    color: ${({ color }) => color};
  }
`;
