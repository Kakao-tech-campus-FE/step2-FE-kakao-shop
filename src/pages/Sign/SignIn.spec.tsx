import { render, screen, waitFor } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import SignInPage from "@/pages/Sign/SignIn.page";
import { MemoryRouter } from "react-router-dom";
import * as signRemote from "@/remotes/sign";
import { AxiosResponse } from "axios";
import { DefaultResDto } from "@/dtos/response.dto";

jest.mock("@/hooks/useRedux", () => ({
  useAppDispatch: () => jest.fn(),
}));
jest.mock("@/remotes/sign");

describe("login", () => {
  test("아이디와 비밀번호를 입력하여 로그인한다.", async () => {
    const user = {
      email: "test@kakao.com",
      password: "abcd1234!@#",
    };

    const mockedSingIn = signRemote as jest.Mocked<typeof signRemote>;
    mockedSingIn.signIn.mockImplementation(() =>
      Promise.resolve({
        data: { error: null },
        status: 200,
        statusText: "",
        headers: {},
        config: {},
      } as AxiosResponse<DefaultResDto>)
    );

    render(
      <MemoryRouter>
        <SignInPage />
      </MemoryRouter>
    );

    await userEvent.click(
      await screen.findByPlaceholderText<HTMLInputElement>("이메일")
    );
    await userEvent.keyboard(user.email);
    await userEvent.click(
      await screen.findByPlaceholderText<HTMLInputElement>("비밀번호")
    );
    await userEvent.keyboard(user.password);

    await userEvent.click(
      await screen.findByRole("button", { name: "로그인" })
    );
    waitFor(() => {
      expect(mockedSingIn).toBeCalledWith(user);
    });
  });
});
