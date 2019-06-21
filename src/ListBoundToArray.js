import React from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { updateItem } from "./store";

let renders = 0;
let updateIndex = 1;

function addRender() {
  renders++;
  console.log(`total renders: ${renders}`);
}

const ListItemBase = props => {
  addRender();
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

function ListBoundToArrayBase({ allIds, updateItem }) {
  addRender();
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
        {allIds.map(itemId => (
          <ListItem key={itemId} id={itemId} />
        ))}
      </ul>
    </div>
  );
}

const mapStateToProps = state => ({
  allIds: state.items.allIds
});

const mapDispatchToProps = dispatch => ({
  updateItem: bindActionCreators(updateItem, dispatch)
});

export const ListBoundToArray = connect(
  mapStateToProps,
  mapDispatchToProps
)(ListBoundToArrayBase);
