import SearchbarStyled from "./Searchbar";

export const Searchbar = ({ onSubmit }) => (
<SearchbarStyled>
  <form class="form">
    <button type="submit" class="button"
    onClick={() => onSubmit()}>
      <span class="button-label">Search</span>
    </button>

    <input
      class="input"
      type="text"
      autocomplete="off"
      autofocus
      placeholder="Search images and photos"
    />
  </form>
</SearchbarStyled>
);

export default Searchbar;