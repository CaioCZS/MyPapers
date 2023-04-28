import { ContainerSearch, SearchIcon } from "./style";

export default function Search() {
  return (
    <ContainerSearch>
      <input placeholder="O que você está procurando?" />
      <SearchIcon />
    </ContainerSearch>
  );
}
