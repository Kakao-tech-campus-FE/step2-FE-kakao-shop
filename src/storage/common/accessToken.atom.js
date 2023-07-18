import { atomWithStorage } from "jotai/utils";

const accessTokenAtom = atomWithStorage("accessToken", "");

export default accessTokenAtom;
