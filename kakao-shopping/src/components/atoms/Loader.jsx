import { styled } from "styled-components";

const StyledLoader = styled.div`
    .loader.--5::before,
    .loader.--5::after {
        height: 3vmin;
        width: var(--size-bar);
        background-color: var(--color);
        animation: loader-5 0.6s cubic-bezier(0, 0, 0.03, 0.9) infinite;
    }

    .loader.--5::before {
        left: calc(50% - 1vmin);
        top: calc(50% - 3vmin);
    }

    .loader.--5::after {
        left: calc(50% + 1vmin);
        top: calc(50% - 1vmin);
        animation-delay: 0.2s;
    }

    @keyframes loader-5 {
        0%,
        88%,
        100% {
            opacity: 0;
        }

        0% {
            transform: translateY(-6vmin);
        }

        33% {
            opacity: 1;
        }

        33%,
        88% {
            transform: translateY(3vmin);
        }
    }
`;

const Loader = ({ isLoading = false }) => {
    return (
        <>
            {isLoading ? (
                <div
                    className="loading-window w-100 h-100"
                    style={{ backgroundColor: "red" }}
                >
                    {" "}
                    <StyledLoader className="loader --5"></StyledLoader>
                </div>
            ) : (
                ""
            )}
        </>
    );
};

export default Loader;
