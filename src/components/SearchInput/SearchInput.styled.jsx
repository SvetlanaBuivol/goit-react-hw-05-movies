import styled from "@emotion/styled";

export const Form = styled.form`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 20px;
  margin-bottom: 24px;
`;

export const SearchInputWrapper = styled.div`
  position: relative;
`;

export const Input = styled.input`
  padding: 10px 15px;
  font-size: 16px;
  border: 2px solid #ccc;
  border-radius: 25px;
  outline: none;
  width: 300px;
  transition: border-color 0.3s ease-in-out;

  &:hover {
    border-color: #555;

    &:focus {
        border-color: #555;
        box-shadow: 0 0 5px rgba(193, 189, 185, 0.368);
    }
  }
`;

export const SearchButton = styled.button`
  position: absolute;
  right: 10px;
  top: 50%;
  transform: translateY(-50%);
  background-color: #333;
  color: #fff;
  padding: 10px 15px;
  border: none;
  border-radius: 25px;
  cursor: pointer;
  transition: background-color 0.3s ease-in-out;

  &:hover {
    background-color: #555;
  }
`;

export const SearchIcon = styled.span`
  margin-left: 5px;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  font-size: 20px;
`;