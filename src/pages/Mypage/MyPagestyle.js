import { css } from "@emotion/react";

export const layout = css`
    padding: 100px 30px 0px;
    box-sizing: border-box;
    margin: 10px;
    border: 1px solid #adad;
    width: 300px;
    height: 300px;

`;

export const profileHeader = css`
    box-sizing: border-box;
    margin: 0px auto 20px;
    padding: 30px;
    border: 1px solid #dbdbdb;
    width: 700px;
`;

export const title = css`
    text-align: center;
    font-size: 30px;
    font-weight: 700;
    margin-bottom: 30px;
`;

export const profileImg = css`
    box-sizing: border-box;
    border: 1px solid #fff;
    justify-content: center;
    margin:0px auto 20px;
    align-items: center;
    border: 1px solid #eee;
    border-radius: 50px;
    width: 300px;
    height: 300px;
    overflow: hidden;
    cursor: pointer;
    & > img {

    }
`;

export const nickname = css`
    box-sizing: border-box;
    outline: none;
    border: none;
    border-bottom: 2px solid #dddd;
    text-align: center;
    padding: 5px 10px;
    width: 200px;
    font-size: 20px;
    font-weight: 600;
    transition: background-color 0.3s ease-in-out;
    cursor: pointer;

    &:focus {
        border-bottom: 2px solid #bbb;
        background-color: #dddd;
    }
`;

export const nicknameLayout = css`
    display: flex;
    justify-content: center;
    margin-bottom: 20px;
`;

export const profileInputLayout = css`
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    box-sizing: border-box;
    margin-bottom: 0px auto 20px;
    border: 1px solid #dfdf;
    padding: 10px;
    width: 700px;
`;

export const inputBox = css`
    position: relative;
    margin-bottom: 10px;

`;

export const profileInput = css`
    box-sizing: border-box;
    border: 1px solid #dbdbdb;
    padding: 20px 20px 10px;
    font-size: 16px;
    width: 335%;
    &:nth-of-type(3n), &:nth-of-type(4n) {
        margin: 0;
    }

    &:focus {
        outline: 2px solid #5dd6ff;
    }

    & + label {
        position: absolute;
        transform: translateY(-50%);
        top: 50%;
        left: 23px;
        color: #333;
        font-weight: 600;
        transition: all 0.2s ease-in-out;
    }

    &:focus + label, &:not(:placeholder-shown) + label {
        top: 13px;
        left: 23px;
        font-size: 11px;
    }
`;

export const buttonLayout = css`
    align-items: center;
`;

// 버튼은 무조건 padding으로 수치 조정
export const profilebutton = css`
    box-sizing: border-box;
    border: 1px solid #dbdbdb;
    padding: 10px 20px;
    width: 700px;
    height: 50px;
    background-color: white;
    font-size: 12px;
    font-weight: 600;
    cursor: pointer;

    &:hover {
        background-color: #afafaf;
    }

    &:active {
        background-color: gray;
    }
`;