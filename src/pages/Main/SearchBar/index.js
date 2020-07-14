import React from "react";
import "./style.css";

import Input from "../../../components/Input";
import Button from "../../../components/Button";
import SearchIcon from '../../../assets/images/icons/search-icon.svg'

const SearchBar = ({onChange, onClick}) => {
  return (
    <div className="search__container">
      <Input
        placeholder="Digite um usuário para consultar seus repositórios"
        className="input__search"
        onChange={onChange}
      />
      <Button 
      className="btn__search" 
      icon={SearchIcon}
      onClick={onClick}
      />
    </div>
  );
};

export default SearchBar;
