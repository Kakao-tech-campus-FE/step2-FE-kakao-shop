function ResponseType({response, success, error}) {
    this.response = response;
    this.success = Boolean(success);
    this.error = Boolean(success) ? null : new ErrorType(error);
}

function ErrorType({message, status}) {
    this.message = message ?? "예상치못한 오류가 발생했습니다.";
    this.status = Number(status) ?? 520;
}

export {ResponseType, ErrorType};