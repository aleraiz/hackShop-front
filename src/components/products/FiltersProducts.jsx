export const NavbarFilter = () => {
  return (
    <div class="product-topbar">
      <ul>
        <li class="page-count">
          <span>12</span> Product Found of <span>30</span>
        </li>
        <li class="product-view-wrap">
          <ul class="nav" role="tablist">
            <li class="grid-view" role="presentation">
              <a
                class="active"
                id="grid-view-tab"
                data-bs-toggle="tab"
                href="#grid-view"
                role="tab"
                aria-selected="true"
              >
                <i class="fa fa-th"></i>
              </a>
            </li>
            <li class="list-view" role="presentation">
              <a
                id="list-view-tab"
                data-bs-toggle="tab"
                href="#list-view"
                role="tab"
                aria-selected="true"
              >
                <i class="fa fa-th-list"></i>
              </a>
            </li>
          </ul>
        </li>
        <li class="short">
          <select class="nice-select">
            <option value="1">Sort by Default</option>
            <option value="2">Sort by Popularity</option>
            <option value="3">Sort by Rated</option>
            <option value="4">Sort by Latest</option>
            <option value="5">Sort by High Price</option>
            <option value="6">Sort by Low Price</option>
          </select>
        </li>
      </ul>
    </div>
  );
};
