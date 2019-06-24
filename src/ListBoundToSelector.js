import React from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { updateItem, allIdsSelector } from "./store";

let renders = 0;
let updateIndex = 1;

function addRender(source) {
  renders++;
  console.log(`total renders: ${renders} (${source})`);
}

const ListItemBase = props => {
  addRender("item");
  const { item = {} } = props;
  const { id, value } = item;
  return (
    <li>
      {id}:{value}
    </li>
  );
};

const mapItemStateToProps = (state, { id }) => {
  const { [id]: item } = state.items.byId;
  return { item };
};

export const ListItem = connect(
  mapItemStateToProps,
  null
)(ListItemBase);

function ListBoundToSelectorBase({ allIdsSelector, updateItem }) {
  addRender("list");
  return (
    <div>
      <button
        onClick={() => {
          updateItem(updateIndex);
          updateIndex++;
        }}
      >
        do update
      </button>
      <ul>
        {allIdsSelector.map(itemId => (
          <ListItem key={itemId} id={itemId} />
        ))}
      </ul>
    </div>
  );
}

const mapStateToProps = state => ({
  allIdsSelector: allIdsSelector(state)
});

const mapDispatchToProps = dispatch => ({
  updateItem: bindActionCreators(updateItem, dispatch)
});

export const ListBoundToSelector = connect(
  mapStateToProps,
  mapDispatchToProps
)(ListBoundToSelectorBase);
