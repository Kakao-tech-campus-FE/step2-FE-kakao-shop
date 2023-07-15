function ErrorType({message, status}) {
    this.message = message ?? "예상치못한 오류가 발생했습니다.";
    this.status = !!Number(status) ? Number(status) : 520;
}

export {ErrorType};
