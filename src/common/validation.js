export const idCheck = (nickname) => {
    let _reg = /[A-Za-z0-9]{4,20}$/;

    return _reg.test(nickname);
}

export const pwdCheck = (password) => {
    let _reg = /[A-Za-z0-9]{6,30}$/;

    return _reg.test(password);
}